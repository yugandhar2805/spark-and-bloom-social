
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, X, Eye } from "lucide-react";

interface Profile {
  id: number;
  name: string;
  age: number;
  location: string;
  distance: string;
  bio: string;
  interests: string[];
  photos: string[];
}

interface MatchCardProps {
  profile: Profile;
  onLike: () => void;
  onPass: () => void;
  onViewProfile: () => void;
}

const MatchCard = ({ profile, onLike, onPass, onViewProfile }: MatchCardProps) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setDragStart(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setDragOffset(e.clientX - dragStart);
    }
  };

  const handleMouseUp = () => {
    if (dragOffset > 100) {
      onLike();
    } else if (dragOffset < -100) {
      onPass();
    }
    setDragOffset(0);
    setIsDragging(false);
  };

  const getTransformStyle = () => {
    if (!isDragging) return {};
    return {
      transform: `translateX(${dragOffset}px) rotate(${dragOffset / 20}deg)`,
      transition: isDragging ? 'none' : 'transform 0.3s ease'
    };
  };

  return (
    <Card 
      className="w-full overflow-hidden shadow-lg relative"
      style={getTransformStyle()}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="relative">
        <div className="relative h-[500px]">
          <img 
            src={profile.photos[currentPhotoIndex]} 
            alt={profile.name} 
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 className="text-3xl font-bold mb-1">{profile.name}, {profile.age}</h2>
          <p className="text-white/80 mb-2">{profile.location} • {profile.distance}</p>
          
          <p className="mb-4 line-clamp-2">{profile.bio}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {profile.interests.map((interest, index) => (
              <Badge key={index} variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <CardContent className="bg-card p-4 flex justify-between">
        <Button 
          size="lg" 
          variant="outline" 
          className="rounded-full h-14 w-14 border-2 border-muted-foreground"
          onClick={onPass}
        >
          <X className="h-8 w-8 text-muted-foreground" />
        </Button>
        
        <Button 
          size="lg" 
          variant="outline" 
          className="rounded-full h-14 w-14 border-2 border-muted"
          onClick={onViewProfile}
        >
          <Eye className="h-6 w-6 text-muted-foreground" />
        </Button>
        
        <Button 
          size="lg" 
          variant="outline" 
          className="rounded-full h-14 w-14 border-2 border-pink-500"
          onClick={onLike}
        >
          <Heart className="h-8 w-8 text-pink-500" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default MatchCard;
