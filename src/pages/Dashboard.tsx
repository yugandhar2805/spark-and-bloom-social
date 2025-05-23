
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import MatchCard from "@/components/matching/MatchCard";
import ProfilePreview from "@/components/profiles/ProfilePreview";
import { Heart, X, MessageCircle, Search, Bell, Settings, User } from "lucide-react";

// Mock data for demo
const mockProfiles = [
  {
    id: 1,
    name: "Sophie Williams",
    age: 28,
    location: "New York, NY",
    distance: "5 miles away",
    bio: "Adventure seeker, coffee enthusiast, and dog lover. Looking for someone who enjoys hiking and trying new restaurants.",
    interests: ["Travel", "Fitness", "Coffee", "Dogs", "Hiking"],
    photos: ["/placeholder.svg"]
  },
  {
    id: 2,
    name: "James Thompson",
    age: 32,
    location: "Brooklyn, NY",
    distance: "7 miles away",
    bio: "Musician and tech enthusiast. Love good conversation over craft beer. Looking for someone genuine and kind.",
    interests: ["Music", "Technology", "Craft Beer", "Reading", "Photography"],
    photos: ["/placeholder.svg"]
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    age: 26,
    location: "Queens, NY",
    distance: "10 miles away",
    bio: "Art teacher by day, painter by night. Seeking someone creative who appreciates the beauty in small things.",
    interests: ["Art", "Painting", "Museums", "Wine Tasting", "Cooking"],
    photos: ["/placeholder.svg"]
  }
];

const mockMatches = [
  {
    id: 101,
    name: "Olivia Parker",
    lastMessage: "When should we meet for coffee?",
    time: "2m ago",
    unread: true,
    avatar: "/placeholder.svg"
  },
  {
    id: 102,
    name: "Ethan Mitchell",
    lastMessage: "I loved that restaurant you recommended!",
    time: "1h ago",
    unread: false,
    avatar: "/placeholder.svg"
  },
  {
    id: 103,
    name: "Ava Williams",
    lastMessage: "Looking forward to our date this weekend!",
    time: "3h ago",
    unread: false,
    avatar: "/placeholder.svg"
  }
];

const Dashboard = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("discover");
  const [showProfile, setShowProfile] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSwipe = (liked: boolean) => {
    // Here you would implement the actual swipe logic with your backend
    console.log(`${liked ? "Liked" : "Passed"} profile ${mockProfiles[currentProfileIndex].id}`);
    
    // Move to the next profile
    if (currentProfileIndex < mockProfiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    } else {
      // Reset to first profile for demo purposes
      setCurrentProfileIndex(0);
    }
  };

  const handleViewProfile = (profile) => {
    setSelectedProfile(profile);
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">LoveMatch</h1>
          <div className="flex items-center space-x-2">
            <Button size="icon" variant="ghost">
              <Bell className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <User className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="discover">
              <Search className="h-4 w-4 mr-2" />
              Discover
            </TabsTrigger>
            <TabsTrigger value="matches">
              <Heart className="h-4 w-4 mr-2" />
              Matches
            </TabsTrigger>
            <TabsTrigger value="messages">
              <MessageCircle className="h-4 w-4 mr-2" />
              Messages
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="discover">
            {showProfile ? (
              <div>
                <Button 
                  variant="outline" 
                  className="mb-4"
                  onClick={handleCloseProfile}
                >
                  Back to Discovery
                </Button>
                <ProfilePreview profile={selectedProfile} />
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-full max-w-md">
                  <MatchCard 
                    profile={mockProfiles[currentProfileIndex]}
                    onLike={() => handleSwipe(true)}
                    onPass={() => handleSwipe(false)}
                    onViewProfile={() => handleViewProfile(mockProfiles[currentProfileIndex])}
                  />
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="matches">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockProfiles.map((profile) => (
                <Card key={profile.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={profile.photos[0]} 
                        alt={profile.name} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h3 className="text-white font-bold text-xl">{profile.name}, {profile.age}</h3>
                        <p className="text-white/80 text-sm">{profile.location}</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="line-clamp-2 text-sm text-muted-foreground mb-3">{profile.bio}</p>
                      <Button 
                        onClick={() => handleViewProfile(profile)} 
                        className="w-full"
                      >
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="messages">
            <div className="space-y-2">
              {mockMatches.map((match) => (
                <div 
                  key={match.id} 
                  className={`flex items-center p-4 rounded-lg hover:bg-muted cursor-pointer ${match.unread ? 'bg-muted/50' : ''}`}
                >
                  <div className="relative">
                    <img 
                      src={match.avatar} 
                      alt={match.name} 
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    {match.unread && (
                      <span className="absolute top-0 right-3 w-3 h-3 bg-primary rounded-full"></span>
                    )}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">{match.name}</h3>
                      <span className="text-xs text-muted-foreground">{match.time}</span>
                    </div>
                    <p className={`text-sm ${match.unread ? 'font-medium' : 'text-muted-foreground'}`}>
                      {match.lastMessage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
