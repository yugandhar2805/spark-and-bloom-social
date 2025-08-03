import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { X, Filter } from "lucide-react";

interface FilterProps {
  onClose?: () => void;
  onApplyFilters?: (filters: any) => void;
}

const AdvancedFilters = ({ onClose, onApplyFilters }: FilterProps) => {
  const [ageRange, setAgeRange] = useState([18, 35]);
  const [distance, setDistance] = useState([50]);
  const [heightRange, setHeightRange] = useState([150, 200]);
  const [education, setEducation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [relationshipGoal, setRelationshipGoal] = useState("");
  const [lifestyle, setLifestyle] = useState({
    smoking: false,
    drinking: false,
    pets: false,
    children: false
  });
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    "Travel", "Photography", "Music", "Movies", "Sports", "Fitness",
    "Art", "Reading", "Cooking", "Dancing", "Gaming", "Nature",
    "Technology", "Fashion", "Food", "Adventure"
  ];

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleApplyFilters = () => {
    const filters = {
      ageRange,
      distance: distance[0],
      heightRange,
      education,
      occupation,
      relationshipGoal,
      lifestyle,
      interests: selectedInterests
    };
    onApplyFilters?.(filters);
    onClose?.();
  };

  const clearAllFilters = () => {
    setAgeRange([18, 35]);
    setDistance([50]);
    setHeightRange([150, 200]);
    setEducation("");
    setOccupation("");
    setRelationshipGoal("");
    setLifestyle({
      smoking: false,
      drinking: false,
      pets: false,
      children: false
    });
    setSelectedInterests([]);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Advanced Filters
        </CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Age Range */}
        <div className="space-y-3">
          <label className="text-sm font-medium">Age Range: {ageRange[0]} - {ageRange[1]}</label>
          <Slider
            value={ageRange}
            onValueChange={setAgeRange}
            min={18}
            max={65}
            step={1}
            className="w-full"
          />
        </div>

        {/* Distance */}
        <div className="space-y-3">
          <label className="text-sm font-medium">Distance: {distance[0]} miles</label>
          <Slider
            value={distance}
            onValueChange={setDistance}
            min={1}
            max={100}
            step={1}
            className="w-full"
          />
        </div>

        {/* Height Range */}
        <div className="space-y-3">
          <label className="text-sm font-medium">Height: {heightRange[0]}cm - {heightRange[1]}cm</label>
          <Slider
            value={heightRange}
            onValueChange={setHeightRange}
            min={140}
            max={220}
            step={1}
            className="w-full"
          />
        </div>

        <Separator />

        {/* Education */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Education Level</label>
          <Select value={education} onValueChange={setEducation}>
            <SelectTrigger>
              <SelectValue placeholder="Select education level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high-school">High School</SelectItem>
              <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
              <SelectItem value="master">Master's Degree</SelectItem>
              <SelectItem value="phd">PhD</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Occupation */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Occupation</label>
          <Select value={occupation} onValueChange={setOccupation}>
            <SelectTrigger>
              <SelectValue placeholder="Select occupation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="creative">Creative Arts</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Relationship Goal */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Looking For</label>
          <Select value={relationshipGoal} onValueChange={setRelationshipGoal}>
            <SelectTrigger>
              <SelectValue placeholder="Select relationship goal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="serious">Serious Relationship</SelectItem>
              <SelectItem value="casual">Casual Dating</SelectItem>
              <SelectItem value="friendship">Friendship</SelectItem>
              <SelectItem value="marriage">Marriage</SelectItem>
              <SelectItem value="unsure">Not Sure Yet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Lifestyle Preferences */}
        <div className="space-y-4">
          <label className="text-sm font-medium">Lifestyle Preferences</label>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Smoking</span>
              <Switch
                checked={lifestyle.smoking}
                onCheckedChange={(checked) => 
                  setLifestyle(prev => ({ ...prev, smoking: checked }))
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Drinking</span>
              <Switch
                checked={lifestyle.drinking}
                onCheckedChange={(checked) => 
                  setLifestyle(prev => ({ ...prev, drinking: checked }))
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Has Pets</span>
              <Switch
                checked={lifestyle.pets}
                onCheckedChange={(checked) => 
                  setLifestyle(prev => ({ ...prev, pets: checked }))
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Has Children</span>
              <Switch
                checked={lifestyle.children}
                onCheckedChange={(checked) => 
                  setLifestyle(prev => ({ ...prev, children: checked }))
                }
              />
            </div>
          </div>
        </div>

        <Separator />

        {/* Interests */}
        <div className="space-y-3">
          <label className="text-sm font-medium">Interests</label>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <Badge
                key={interest}
                variant={selectedInterests.includes(interest) ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${
                  selectedInterests.includes(interest)
                    ? "bg-pink-500 text-white hover:bg-pink-600"
                    : "hover:bg-pink-50 hover:text-pink-600 hover:border-pink-300"
                }`}
                onClick={() => handleInterestToggle(interest)}
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <Button variant="outline" onClick={clearAllFilters} className="flex-1">
            Clear All
          </Button>
          <Button onClick={handleApplyFilters} className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
            Apply Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdvancedFilters;