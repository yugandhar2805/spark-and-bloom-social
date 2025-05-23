
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, X, Eye, CheckCircle } from "lucide-react";
import { UserProfile } from "@/data/mockProfiles";

interface MatchCardProps {
  profile: UserProfile;
  onLike: () => void;
  onPass: () => void;
  onViewProfile: () => void;
}

const MatchCard = ({ profile, onLike, onPass, onViewProfile }: MatchCardProps) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [exitDirection, setExitDirection] = useState<"left" | "right" | null>(null);
  const [isExiting, setIsExiting] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart(e.clientX);
    setIsDragging(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStart(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setDragOffset(e.clientX - dragStart);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      setDragOffset(e.touches[0].clientX - dragStart);
    }
  };

  const handleMouseUp = () => {
    handleSwipeEnd();
  };

  const handleTouchEnd = () => {
    handleSwipeEnd();
  };

  const handleSwipeEnd = () => {
    if (dragOffset > 100) {
      setExitDirection("right");
      setIsExiting(true);
      setTimeout(() => {
        onLike();
        setExitDirection(null);
        setIsExiting(false);
        setDragOffset(0);
      }, 300);
    } else if (dragOffset < -100) {
      setExitDirection("left");
      setIsExiting(true);
      setTimeout(() => {
        onPass();
        setExitDirection(null);
        setIsExiting(false);
        setDragOffset(0);
      }, 300);
    } else {
      // Reset position if not a full swipe
      setDragOffset(0);
    }
    setIsDragging(false);
  };

  const getTransformStyle = () => {
    if (isExiting) {
      return {
        transform: exitDirection === "right" 
          ? `translateX(150%) rotate(30deg)` 
          : `translateX(-150%) rotate(-30deg)`,
        transition: 'transform 0.3s ease, opacity 0.3s ease',
        opacity: 0
      };
    }
    
    if (isDragging) {
      return {
        transform: `translateX(${dragOffset}px) rotate(${dragOffset / 20}deg)`,
        transition: 'none'
      };
    }
    
    return {
      transform: 'translateX(0) rotate(0deg)',
      transition: 'transform 0.3s ease'
    };
  };

  return (
    <Card 
      className="w-full overflow-hidden shadow-lg relative animate-enter"
      style={getTransformStyle()}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Like/Pass Overlays that show when swiping */}
      {dragOffset > 50 && (
        <div className="absolute top-6 right-6 bg-green-500/80 text-white py-1 px-4 rounded-full text-xl font-bold transform rotate-12 z-20 backdrop-blur-sm">
          LIKE
        </div>
      )}
      {dragOffset < -50 && (
        <div className="absolute top-6 left-6 bg-red-500/80 text-white py-1 px-4 rounded-full text-xl font-bold transform -rotate-12 z-20 backdrop-blur-sm">
          PASS
        </div>
      )}
      
      <div className="relative">
        <div className="relative h-[500px]">
          <img 
            src={profile.photos[currentPhotoIndex]} 
            alt={profile.name} 
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
          
          {profile.verified && (
            <div className="absolute top-4 right-4 bg-blue-500/90 rounded-full p-1.5 flex items-center gap-1 backdrop-blur-sm text-white shadow-lg">
              <CheckCircle className="h-4 w-4" />
              <span className="text-xs font-medium">Verified</span>
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 className="text-3xl font-bold mb-1">{profile.name}, {profile.age}</h2>
          <div className="flex items-center text-white/90 mb-2 text-sm">
            <span>{profile.job}</span>
            {profile.job && profile.education && <span className="mx-2">•</span>}
            <span>{profile.education}</span>
          </div>
          <p className="text-white/80 mb-2">{profile.location} • {profile.distance}</p>
          
          <p className="mb-4 line-clamp-2">{profile.bio}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {profile.interests.map((interest, index) => (
              <Badge key={index} variant="secondary" className="bg-white/20 text-white border-none hover:bg-white/30">
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
          className="rounded-full h-14 w-14 border-2 border-red-300 hover:bg-red-50 hover:text-red-500 dark:border-red-700 dark:hover:bg-red-950/50 dark:hover:text-red-400 transition-all duration-200"
          onClick={onPass}
        >
          <X className="h-8 w-8" />
        </Button>
        
        <Button 
          size="lg" 
          variant="outline" 
          className="rounded-full h-14 w-14 border-2 border-blue-300 hover:bg-blue-50 hover:text-blue-500 dark:border-blue-700 dark:hover:bg-blue-950/50 dark:hover:text-blue-400 transition-all duration-200"
          onClick={onViewProfile}
        >
          <Eye className="h-6 w-6" />
        </Button>
        
        <Button 
          size="lg" 
          variant="outline" 
          className="rounded-full h-14 w-14 border-2 border-pink-300 hover:bg-pink-50 hover:text-pink-500 dark:border-pink-700 dark:hover:bg-pink-950/50 dark:hover:text-pink-400 transition-all duration-200"
          onClick={onLike}
        >
          <Heart className="h-8 w-8" />
        </Button>
      </CardContent>

      {/* Swipe instruction for new users */}
      <div className="absolute left-0 right-0 bottom-20 flex justify-center pointer-events-none">
        <div className="bg-black/40 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
          Swipe right to like, left to pass
        </div>
      </div>
    </Card>
  );
};

export default MatchCard;
