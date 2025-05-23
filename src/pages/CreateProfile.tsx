
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const INTERESTS = [
  "Travel", "Fitness", "Reading", "Cooking", "Photography", "Music", 
  "Movies", "Art", "Sports", "Gaming", "Technology", "Fashion", 
  "Nature", "Animals", "Dancing", "Hiking", "Wine", "Coffee"
];

const CreateProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    photos: [],
    bio: "",
    gender: "",
    orientation: "",
    birthdate: "",
    location: "",
    interests: [],
    height: 175,
    education: "",
    relationshipType: "",
    ageRange: [25, 40],
    maxDistance: 50,
  });

  const updateForm = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleInterestToggle = (interest) => {
    setFormData((prev) => {
      if (prev.interests.includes(interest)) {
        return {
          ...prev,
          interests: prev.interests.filter(i => i !== interest)
        };
      } else {
        if (prev.interests.length >= 5) {
          toast({
            title: "Maximum 5 interests",
            description: "Please remove an interest before adding another.",
            variant: "destructive",
          });
          return prev;
        }
        return {
          ...prev,
          interests: [...prev.interests, interest]
        };
      }
    });
  };

  const handlePhotoUpload = () => {
    if (formData.photos.length >= 6) {
      toast({
        title: "Maximum 6 photos",
        description: "Please remove a photo before adding another.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would open a file picker and upload to storage
    // For demo, we're adding a placeholder image
    updateForm("photos", [...formData.photos, "/placeholder.svg"]);
    
    toast({
      title: "Photo Added",
      description: "Your photo has been uploaded successfully.",
    });
  };

  const handleRemovePhoto = (index) => {
    updateForm("photos", formData.photos.filter((_, i) => i !== index));
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (formData.photos.length < 1) {
        toast({
          title: "Photo Required",
          description: "Please add at least one photo to continue.",
          variant: "destructive",
        });
        return;
      }
      if (!formData.bio || formData.bio.length < 10) {
        toast({
          title: "Bio Required",
          description: "Please write a bio of at least 10 characters.",
          variant: "destructive",
        });
        return;
      }
    }
    
    if (currentStep === 2) {
      if (!formData.gender || !formData.orientation || !formData.birthdate) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return;
      }
    }
    
    if (currentStep === 3) {
      if (!formData.location || formData.interests.length < 3) {
        toast({
          title: "Missing Information",
          description: "Please add your location and at least 3 interests.",
          variant: "destructive",
        });
        return;
      }
      // Simulate profile completion
      toast({
        title: "Profile Created",
        description: "Your profile has been successfully created! Let's find your match.",
      });
      
      setTimeout(() => navigate("/dashboard"), 1500);
    }
    
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4 py-12">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Create Your Profile</CardTitle>
          <CardDescription>
            Step {currentStep} of 3: {currentStep === 1 ? "Basic Info" : currentStep === 2 ? "Personal Details" : "Preferences"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <Label className="block mb-2">Profile Photos (Add up to 6)</Label>
                <div className="grid grid-cols-3 gap-4 mb-2">
                  {formData.photos.map((photo, index) => (
                    <div key={index} className="relative aspect-square bg-muted rounded-md overflow-hidden">
                      <img src={photo} alt="Profile" className="w-full h-full object-cover" />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 h-6 w-6 rounded-full"
                        onClick={() => handleRemovePhoto(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  {formData.photos.length < 6 && (
                    <Button
                      variant="outline"
                      className="h-full aspect-square flex flex-col items-center justify-center border-dashed"
                      onClick={handlePhotoUpload}
                    >
                      <Upload className="h-6 w-6 mb-2" />
                      <span>Upload</span>
                    </Button>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  Add your best photos to increase your chances of matching.
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">About Me</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell potential matches about yourself, your interests, and what you're looking for..."
                  className="min-h-[120px]"
                  value={formData.bio}
                  onChange={(e) => updateForm("bio", e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  {formData.bio.length}/500 characters
                </p>
              </div>
            </div>
          )}
          
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="gender">I am</Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) => updateForm("gender", value)}
                  >
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="man">Man</SelectItem>
                      <SelectItem value="woman">Woman</SelectItem>
                      <SelectItem value="non-binary">Non-binary</SelectItem>
                      <SelectItem value="transgender">Transgender</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="orientation">I am interested in</Label>
                  <Select
                    value={formData.orientation}
                    onValueChange={(value) => updateForm("orientation", value)}
                  >
                    <SelectTrigger id="orientation">
                      <SelectValue placeholder="Select orientation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="men">Men</SelectItem>
                      <SelectItem value="women">Women</SelectItem>
                      <SelectItem value="non-binary">Non-binary</SelectItem>
                      <SelectItem value="everyone">Everyone</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="birthdate">Date of Birth</Label>
                <Input
                  id="birthdate"
                  type="date"
                  value={formData.birthdate}
                  onChange={(e) => updateForm("birthdate", e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="height">Height</Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    id="height"
                    min={130}
                    max={220}
                    step={1}
                    value={[formData.height]}
                    onValueChange={(value) => updateForm("height", value[0])}
                    className="flex-1"
                  />
                  <span className="w-16 text-center">{formData.height} cm</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="education">Education</Label>
                  <Select
                    value={formData.education}
                    onValueChange={(value) => updateForm("education", value)}
                  >
                    <SelectTrigger id="education">
                      <SelectValue placeholder="Select education" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-school">High School</SelectItem>
                      <SelectItem value="college">Some College</SelectItem>
                      <SelectItem value="undergraduate">Undergraduate</SelectItem>
                      <SelectItem value="postgraduate">Postgraduate</SelectItem>
                      <SelectItem value="phd">PhD / Doctorate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="relationshipType">Looking for</Label>
                  <Select
                    value={formData.relationshipType}
                    onValueChange={(value) => updateForm("relationshipType", value)}
                  >
                    <SelectTrigger id="relationshipType">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="long-term">Long-term Relationship</SelectItem>
                      <SelectItem value="marriage">Marriage</SelectItem>
                      <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}
          
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="City, Country"
                  value={formData.location}
                  onChange={(e) => updateForm("location", e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Interests (Select up to 5)</Label>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map((interest) => (
                    <Badge
                      key={interest}
                      variant={formData.interests.includes(interest) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleInterestToggle(interest)}
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <Label>Age Range</Label>
                    <span className="text-sm">{formData.ageRange[0]}-{formData.ageRange[1]} years</span>
                  </div>
                  <Slider
                    min={18}
                    max={80}
                    step={1}
                    value={formData.ageRange}
                    onValueChange={(value) => updateForm("ageRange", value)}
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <Label>Maximum Distance</Label>
                    <span className="text-sm">{formData.maxDistance} km</span>
                  </div>
                  <Slider
                    min={5}
                    max={100}
                    step={5}
                    value={[formData.maxDistance]}
                    onValueChange={(value) => updateForm("maxDistance", value[0])}
                  />
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {currentStep > 1 ? (
            <Button variant="outline" onClick={handlePrevStep}>
              Back
            </Button>
          ) : (
            <Button variant="outline" onClick={() => navigate("/login")}>
              Cancel
            </Button>
          )}
          <Button onClick={handleNextStep}>
            {currentStep === 3 ? "Complete Profile" : "Next"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateProfile;
