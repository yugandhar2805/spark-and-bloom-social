import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Heart,
  Trophy,
  Coffee,
  Music,
  Camera,
  Gamepad2
} from "lucide-react";

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const events = [
    {
      id: 1,
      title: "Speed Dating Night",
      date: "Tonight, 8:00 PM",
      location: "Virtual",
      participants: 24,
      maxParticipants: 30,
      category: "dating",
      price: "Free",
      image: "/placeholder.svg?height=200&width=300",
      description: "Meet multiple people in quick 5-minute conversations",
      icon: Heart
    },
    {
      id: 2,
      title: "Coffee Chat Meetup",
      date: "Tomorrow, 2:00 PM",
      location: "Central Cafe, NYC",
      participants: 12,
      maxParticipants: 15,
      category: "meetup",
      price: "$5",
      image: "/placeholder.svg?height=200&width=300",
      description: "Casual coffee meetup for meaningful conversations",
      icon: Coffee
    },
    {
      id: 3,
      title: "Photography Walk",
      date: "Saturday, 10:00 AM",
      location: "Central Park, NYC",
      participants: 8,
      maxParticipants: 12,
      category: "activity",
      price: "Free",
      image: "/placeholder.svg?height=200&width=300",
      description: "Explore the city while taking photos together",
      icon: Camera
    },
    {
      id: 4,
      title: "Virtual Game Night",
      date: "Friday, 7:00 PM",
      location: "Virtual",
      participants: 18,
      maxParticipants: 20,
      category: "game",
      price: "Free",
      image: "/placeholder.svg?height=200&width=300",
      description: "Fun online games and icebreaker activities",
      icon: Gamepad2
    },
    {
      id: 5,
      title: "Wine Tasting Evening",
      date: "Next Sunday, 6:00 PM",
      location: "Wine Bar Downtown",
      participants: 16,
      maxParticipants: 20,
      category: "social",
      price: "$25",
      image: "/placeholder.svg?height=200&width=300",
      description: "Sophisticated wine tasting with fellow singles",
      icon: Music
    }
  ];

  const categories = [
    { id: "all", label: "All Events", icon: Calendar },
    { id: "dating", label: "Speed Dating", icon: Heart },
    { id: "meetup", label: "Meetups", icon: Coffee },
    { id: "activity", label: "Activities", icon: Camera },
    { id: "game", label: "Games", icon: Gamepad2 },
    { id: "social", label: "Social", icon: Music }
  ];

  const filteredEvents = selectedCategory === "all" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const myEvents = events.slice(0, 2); // Simulate user's registered events

  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="discover" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50">
          <TabsTrigger value="discover" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500/20 data-[state=active]:to-purple-500/20">
            <Calendar className="h-4 w-4 mr-2" />
            Discover
          </TabsTrigger>
          <TabsTrigger value="my-events" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500/20 data-[state=active]:to-purple-500/20">
            <Trophy className="h-4 w-4 mr-2" />
            My Events
          </TabsTrigger>
          <TabsTrigger value="create" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500/20 data-[state=active]:to-purple-500/20">
            <Users className="h-4 w-4 mr-2" />
            Create Event
          </TabsTrigger>
        </TabsList>

        <TabsContent value="discover" className="space-y-6">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id 
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700" 
                  : ""
                }
              >
                <category.icon className="h-4 w-4 mr-1" />
                {category.label}
              </Button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-white/90 text-black">
                    {event.price}
                  </Badge>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <event.icon className="h-5 w-5 text-pink-500" />
                      {event.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{event.participants}/{event.maxParticipants} participants</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                    Join Event
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my-events" className="space-y-6">
          <div className="text-center mb-8">
            <Trophy className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
            <h2 className="text-2xl font-bold mb-2">Your Events</h2>
            <p className="text-muted-foreground">Events you've joined or created</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-32 object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-green-500 text-white">
                    Registered
                  </Badge>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{event.title}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" className="flex-1">
                      View Details
                    </Button>
                    <Button variant="destructive" className="flex-1">
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Create New Event</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Event Title</label>
                <input 
                  className="w-full p-2 border rounded-md" 
                  placeholder="Enter event title" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <textarea 
                  className="w-full p-2 border rounded-md h-24" 
                  placeholder="Describe your event" 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date & Time</label>
                  <input 
                    type="datetime-local" 
                    className="w-full p-2 border rounded-md" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <input 
                    className="w-full p-2 border rounded-md" 
                    placeholder="Event location" 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Max Participants</label>
                  <input 
                    type="number" 
                    className="w-full p-2 border rounded-md" 
                    placeholder="20" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Price</label>
                  <input 
                    className="w-full p-2 border rounded-md" 
                    placeholder="Free or $10" 
                  />
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                Create Event
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EventsPage;