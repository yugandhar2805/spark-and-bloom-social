
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MapPin, Heart, X, MessageCircle, Calendar, Check } from "lucide-react";

interface ProfilePreviewProps {
  profile: any; // Using any for now, would be better to define a proper type
}

const ProfilePreview = ({ profile }: ProfilePreviewProps) => {
  if (!profile) return null;

  return (
    <div className="w-full max-w-3xl mx-auto">
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
                <span className="ml-2 inline-flex items-center">
                  <Check className="w-5 h-5 text-blue-500" />
                </span>
              </h2>
              <div className="flex items-center text-muted-foreground mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{profile.location}</span>
                <span className="mx-2">•</span>
                <span>{profile.distance}</span>
              </div>
            </div>
            <div className="flex space-x-1">
              <Button variant="outline" size="icon" className="rounded-full">
                <X className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full text-pink-500 border-pink-200">
                <Heart className="h-5 w-5 fill-pink-500" />
              </Button>
              <Button className="rounded-full bg-blue-500 hover:bg-blue-600">
                <MessageCircle className="h-5 w-5 mr-2" />
                Message
              </Button>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-3">About Me</h3>
            <p className="text-muted-foreground">{profile.bio}</p>
          </section>
          
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest, index) => (
                <Badge key={index} variant="secondary">
                  {interest}
                </Badge>
              ))}
            </div>
          </section>
          
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Basic Information</h3>
            <div className="grid grid-cols-2 gap-y-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>Looking for: Long-term</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>Relationship: Single</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>Height: 5'9"</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>Education: Bachelor's</span>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePreview;
