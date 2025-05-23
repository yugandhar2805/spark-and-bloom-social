
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MapPin, Heart, X, MessageCircle, Calendar, CheckCircle, Briefcase, GraduationCap, Ruler } from "lucide-react";
import { UserProfile } from "@/data/mockProfiles";
import { QuoteDisplay } from "@/components/ui/quote-display";

interface ProfilePreviewProps {
  profile: UserProfile | null;
  onClose?: () => void;
}

const ProfilePreview = ({ profile, onClose }: ProfilePreviewProps) => {
  if (!profile) return null;

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <Card className="border-none shadow-none">
        <CardHeader className="p-0">
          <AspectRatio ratio={3/4} className="bg-muted rounded-t-lg overflow-hidden">
            <img 
              src={profile.photos[0]} 
              alt={profile.name} 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </CardHeader>
        
        <CardContent className="pt-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-bold mb-1">
                {profile.name}, {profile.age}
                {profile.verified && (
                  <span className="ml-2 inline-flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                  </span>
                )}
              </h2>
              <div className="flex items-center text-muted-foreground mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{profile.location}</span>
                <span className="mx-2">•</span>
                <span>{profile.distance}</span>
              </div>
            </div>
            <div className="flex space-x-1">
              {onClose && (
                <Button 
                  onClick={onClose} 
                  variant="outline" 
                  className="rounded-full"
                >
                  Back
                </Button>
              )}
              <Button variant="outline" size="icon" className="rounded-full border-red-200 hover:bg-red-50 hover:text-red-500 dark:border-red-800 dark:hover:bg-red-950/50">
                <X className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-pink-200 hover:bg-pink-50 hover:text-pink-500 dark:border-pink-800 dark:hover:bg-pink-950/50">
                <Heart className="h-5 w-5" />
              </Button>
              <Button className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                <MessageCircle className="h-5 w-5 mr-2" />
                Message
              </Button>
            </div>
          </div>
          
          <QuoteDisplay variant="subtle" className="my-4" />
          
          <Separator className="my-6" />
          
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-3">About Me</h3>
            <p className="text-muted-foreground">{profile.bio}</p>
          </section>
          
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest, index) => (
                <Badge key={index} variant="secondary" className="bg-muted/50 hover:bg-muted">
                  {interest}
                </Badge>
              ))}
            </div>
          </section>
          
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
              {profile.job && (
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Work: {profile.job}</span>
                </div>
              )}
              {profile.education && (
                <div className="flex items-center">
                  <GraduationCap className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Education: {profile.education}</span>
                </div>
              )}
              {profile.height && (
                <div className="flex items-center">
                  <Ruler className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Height: {profile.height}</span>
                </div>
              )}
              {profile.relationshipGoal && (
                <div className="flex items-center">
                  <Heart className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Looking for: {profile.relationshipGoal}</span>
                </div>
              )}
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePreview;
