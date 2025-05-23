
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { mockProfiles, mockMatches, UserProfile, loveQuotes } from "@/data/mockProfiles";
import MatchCard from "@/components/matching/MatchCard";
import ProfilePreview from "@/components/profiles/ProfilePreview";
import { Heart, X, MessageCircle, Search, Bell, Settings, User, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { QuoteDisplay } from "@/components/ui/quote-display";

const Dashboard = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("discover");
  const [showProfile, setShowProfile] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<UserProfile | null>(null);
  const [randomQuote, setRandomQuote] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    // Display a welcome toast with a love quote when the dashboard loads
    const randomIndex = Math.floor(Math.random() * loveQuotes.length);
    const quote = loveQuotes[randomIndex];
    setRandomQuote(quote);
    
    toast({
      title: "Welcome to LoveMatch",
      description: quote,
      duration: 5000,
    });
  }, []);

  const handleSwipe = (liked: boolean) => {
    // Here you would implement the actual swipe logic with your backend
    console.log(`${liked ? "Liked" : "Passed"} profile ${mockProfiles[currentProfileIndex].id}`);
    
    if (liked) {
      // Show toast when user likes a profile
      toast({
        title: `You liked ${mockProfiles[currentProfileIndex].name}!`,
        description: "If they like you back, you'll get a match!",
        duration: 3000,
      });
    }
    
    // Move to the next profile with animation
    if (currentProfileIndex < mockProfiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    } else {
      // Reset to first profile for demo purposes
      setCurrentProfileIndex(0);
    }
  };

  const handleViewProfile = (profile: UserProfile) => {
    console.log("Viewing profile of:", profile.name);
    setSelectedProfile(profile);
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    console.log("Closing profile view");
    setShowProfile(false);
    setSelectedProfile(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-pink-50/30 dark:from-background dark:to-purple-950/10">
      {/* Header/Navigation */}
      <header className="border-b bg-background/95 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">LoveMatch</h1>
          <div className="flex items-center space-x-2">
            <Button size="icon" variant="ghost" className="animate-pulse relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
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
        <QuoteDisplay variant="subtle" className="mb-6" />
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50">
            <TabsTrigger value="discover" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500/20 data-[state=active]:to-purple-500/20">
              <Search className="h-4 w-4 mr-2" />
              Discover
            </TabsTrigger>
            <TabsTrigger value="matches" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500/20 data-[state=active]:to-purple-500/20">
              <Heart className="h-4 w-4 mr-2" />
              Matches
            </TabsTrigger>
            <TabsTrigger value="messages" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500/20 data-[state=active]:to-purple-500/20">
              <MessageCircle className="h-4 w-4 mr-2" />
              Messages
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="discover" className="animate-fade-in">
            {showProfile ? (
              <div>
                <ProfilePreview 
                  profile={selectedProfile} 
                  onClose={handleCloseProfile}
                />
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-full max-w-md">
                  {mockProfiles.length > 0 && (
                    <MatchCard 
                      profile={mockProfiles[currentProfileIndex]}
                      onLike={() => handleSwipe(true)}
                      onPass={() => handleSwipe(false)}
                      onViewProfile={() => handleViewProfile(mockProfiles[currentProfileIndex])}
                    />
                  )}
                </div>
                <Button 
                  variant="outline" 
                  className="mt-6 border-pink-300 text-pink-600 hover:bg-pink-50 hover:text-pink-700 dark:border-pink-800 dark:text-pink-400 dark:hover:bg-pink-950/50 flex items-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  Get Premium for More Matches
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="matches" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockProfiles.slice(0, 6).map((profile) => (
                <Card 
                  key={profile.id} 
                  className="overflow-hidden hover:shadow-md transition-all duration-300 hover:scale-[1.02] border-muted cursor-pointer"
                  onClick={() => handleViewProfile(profile)}
                >
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
                      {profile.verified && (
                        <div className="absolute top-2 right-2 bg-blue-500 rounded-full p-1" title="Verified Profile">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <p className="line-clamp-2 text-sm text-muted-foreground mb-3">{profile.bio}</p>
                      <Button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewProfile(profile);
                        }}
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                      >
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="messages" className="animate-fade-in">
            <div className="space-y-2">
              {mockMatches.map((match) => (
                <div 
                  key={match.id} 
                  className={`flex items-center p-4 rounded-lg hover:bg-pink-50/50 dark:hover:bg-pink-950/20 cursor-pointer transition-colors duration-200 ${match.unread ? 'bg-pink-50/80 dark:bg-pink-950/30' : ''}`}
                >
                  <div className="relative">
                    <img 
                      src={match.avatar} 
                      alt={match.name} 
                      className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-transparent hover:border-pink-300 transition-all duration-200"
                    />
                    {match.unread && (
                      <span className="absolute top-0 right-3 w-3 h-3 bg-pink-500 rounded-full animate-pulse"></span>
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

// Missing Check component for verified badges
const Check = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default Dashboard;
