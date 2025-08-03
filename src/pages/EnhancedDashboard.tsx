import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { mockProfiles, mockMatches, UserProfile, loveQuotes } from "@/data/mockProfiles";
import MatchCard from "@/components/matching/MatchCard";
import ProfilePreview from "@/components/profiles/ProfilePreview";
import EnhancedMessaging from "@/components/messaging/EnhancedMessaging";
import AdvancedFilters from "@/components/filters/AdvancedFilters";
import { Heart, X, MessageCircle, Search, Filter, Map, Grid, Sparkles, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { QuoteDisplay } from "@/components/ui/quote-display";

const EnhancedDashboard = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("discover");
  const [showProfile, setShowProfile] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<UserProfile | null>(null);
  const [selectedMatch, setSelectedMatch] = useState<any>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"stack" | "grid" | "map">("stack");
  const [randomQuote, setRandomQuote] = useState("");
  const [superLikesRemaining, setSuperLikesRemaining] = useState(5);
  const [boostActive, setBoostActive] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * loveQuotes.length);
    const quote = loveQuotes[randomIndex];
    setRandomQuote(quote);
    
    toast({
      title: "Welcome back to LoveMatch",
      description: quote,
      duration: 5000,
    });
  }, []);

  const handleSwipe = (liked: boolean, isSuper: boolean = false) => {
    const currentProfile = mockProfiles[currentProfileIndex];
    
    if (isSuper && superLikesRemaining > 0) {
      setSuperLikesRemaining(prev => prev - 1);
      toast({
        title: `Super Liked ${currentProfile.name}! 💫`,
        description: "They'll know you're really interested!",
        duration: 3000,
      });
    } else if (liked) {
      toast({
        title: `You liked ${currentProfile.name}!`,
        description: "If they like you back, you'll get a match!",
        duration: 3000,
      });
    }
    
    if (currentProfileIndex < mockProfiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    } else {
      setCurrentProfileIndex(0);
    }
  };

  const handleViewProfile = (profile: UserProfile) => {
    setSelectedProfile(profile);
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
    setSelectedProfile(null);
  };

  const handleMessageClick = (match: any) => {
    setSelectedMatch(match);
    setActiveTab("messages");
  };

  const handleBackFromMessage = () => {
    setSelectedMatch(null);
  };

  const handleBoost = () => {
    setBoostActive(true);
    toast({
      title: "Profile Boosted! 🚀",
      description: "Your profile will be shown to more people for 30 minutes",
      duration: 3000,
    });
    
    setTimeout(() => {
      setBoostActive(false);
    }, 30 * 60 * 1000); // 30 minutes
  };

  const handleApplyFilters = (filters: any) => {
    toast({
      title: "Filters Applied",
      description: "Your discovery preferences have been updated",
      duration: 2000,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
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
          {showFilters ? (
            <AdvancedFilters 
              onClose={() => setShowFilters(false)}
              onApplyFilters={handleApplyFilters}
            />
          ) : showProfile ? (
            <ProfilePreview 
              profile={selectedProfile} 
              onClose={handleCloseProfile}
            />
          ) : (
            <div className="space-y-6">
              {/* Discovery Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowFilters(true)}
                    className="flex items-center gap-2"
                  >
                    <Filter className="h-4 w-4" />
                    Filters
                  </Button>
                  
                  <div className="flex rounded-lg border p-1">
                    <Button
                      variant={viewMode === "stack" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("stack")}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "map" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("map")}
                    >
                      <Map className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="text-sm text-muted-foreground">
                    Super Likes: {superLikesRemaining}
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={handleBoost}
                    disabled={boostActive}
                    className={`${boostActive ? "bg-yellow-100 border-yellow-300" : ""}`}
                  >
                    <Zap className="h-4 w-4 mr-1" />
                    {boostActive ? "Boosting..." : "Boost"}
                  </Button>
                </div>
              </div>

              {/* Stack View */}
              {viewMode === "stack" && (
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-md">
                    {mockProfiles.length > 0 && (
                      <MatchCard 
                        profile={mockProfiles[currentProfileIndex]}
                        onLike={() => handleSwipe(true)}
                        onPass={() => handleSwipe(false)}
                        onSuperLike={() => handleSwipe(true, true)}
                        onViewProfile={() => handleViewProfile(mockProfiles[currentProfileIndex])}
                        superLikesRemaining={superLikesRemaining}
                      />
                    )}
                  </div>
                </div>
              )}

              {/* Grid View */}
              {viewMode === "grid" && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {mockProfiles.slice(0, 8).map((profile) => (
                    <Card 
                      key={profile.id} 
                      className="overflow-hidden hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                      onClick={() => handleViewProfile(profile)}
                    >
                      <CardContent className="p-0">
                        <div className="relative">
                          <img 
                            src={profile.photos[0]} 
                            alt={profile.name} 
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                            <h3 className="text-white font-bold text-sm">{profile.name}, {profile.age}</h3>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Map View Placeholder */}
              {viewMode === "map" && (
                <Card className="h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Map className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="font-semibold mb-2">Map View</h3>
                    <p className="text-muted-foreground">See nearby matches on a map</p>
                    <Button className="mt-4">Enable Location</Button>
                  </div>
                </Card>
              )}

              <div className="text-center">
                <Button 
                  variant="outline" 
                  className="border-pink-300 text-pink-600 hover:bg-pink-50 hover:text-pink-700 dark:border-pink-800 dark:text-pink-400 dark:hover:bg-pink-950/50 flex items-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  Get Premium for More Matches
                </Button>
              </div>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="matches" className="animate-fade-in">
          {showProfile ? (
            <ProfilePreview 
              profile={selectedProfile} 
              onClose={handleCloseProfile}
            />
          ) : (
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
                          <X className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <p className="line-clamp-2 text-sm text-muted-foreground mb-3">{profile.bio}</p>
                      <div className="flex gap-2">
                        <Button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewProfile(profile);
                          }}
                          variant="outline"
                          className="flex-1"
                        >
                          View Profile
                        </Button>
                        <Button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMessageClick({ ...profile, avatar: profile.photos[0] });
                          }}
                          className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                        >
                          Message
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="messages" className="animate-fade-in">
          {selectedMatch ? (
            <EnhancedMessaging 
              selectedMatch={selectedMatch} 
              onBack={handleBackFromMessage}
            />
          ) : (
            <div className="space-y-2">
              {mockMatches.map((match) => (
                <div 
                  key={match.id} 
                  className={`flex items-center p-4 rounded-lg hover:bg-pink-50/50 dark:hover:bg-pink-950/20 cursor-pointer transition-colors duration-200 ${match.unread ? 'bg-pink-50/80 dark:bg-pink-950/30' : ''}`}
                  onClick={() => setSelectedMatch(match)}
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
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EnhancedDashboard;