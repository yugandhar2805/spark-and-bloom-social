import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Phone, 
  Camera,
  Settings,
  Users,
  Calendar
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const VideoChat = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isInCall, setIsInCall] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startCall = () => {
    setIsInCall(true);
    // Simulate video call start
  };

  const endCall = () => {
    setIsInCall(false);
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Speed Dating Night",
      date: "Tonight, 8:00 PM",
      participants: 24,
      type: "Group Event"
    },
    {
      id: 2,
      title: "Coffee Chat Meetup",
      date: "Tomorrow, 2:00 PM",
      participants: 12,
      type: "Casual Meetup"
    },
    {
      id: 3,
      title: "Virtual Game Night",
      date: "Friday, 7:00 PM",
      participants: 18,
      type: "Fun Activity"
    }
  ];

  if (isInCall) {
    return (
      <div className="h-screen bg-black relative">
        {/* Video Call Interface */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            poster="/placeholder.svg?height=800&width=600"
          />
          
          {/* User Video (Picture-in-Picture) */}
          <div className="absolute top-4 right-4 w-32 h-24 bg-gray-800 rounded-lg overflow-hidden border-2 border-white">
            <video className="w-full h-full object-cover" autoPlay muted />
          </div>
          
          {/* Call Controls */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <Button
              variant={isAudioOn ? "default" : "destructive"}
              size="icon"
              className="h-12 w-12 rounded-full"
              onClick={() => setIsAudioOn(!isAudioOn)}
            >
              {isAudioOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
            </Button>
            
            <Button
              variant={isVideoOn ? "default" : "destructive"}
              size="icon"
              className="h-12 w-12 rounded-full"
              onClick={() => setIsVideoOn(!isVideoOn)}
            >
              {isVideoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="destructive"
              size="icon"
              className="h-12 w-12 rounded-full bg-red-500 hover:bg-red-600"
              onClick={endCall}
            >
              <Phone className="h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border-white/20"
            >
              <Settings className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Call Info */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white">
            <h3 className="font-semibold">Sarah Johnson</h3>
            <p className="text-sm opacity-80">Call duration: 02:34</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Video Features Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Video className="h-8 w-8 text-pink-500" />
          <h1 className="text-3xl font-bold">Video Features</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Connect face-to-face with your matches and join exciting video events
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={startCall}>
          <CardContent className="pt-6 text-center">
            <Video className="h-12 w-12 mx-auto mb-4 text-pink-500" />
            <h3 className="font-semibold mb-2">Start Video Call</h3>
            <p className="text-sm text-muted-foreground">Call your matches directly</p>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="pt-6 text-center">
            <Camera className="h-12 w-12 mx-auto mb-4 text-blue-500" />
            <h3 className="font-semibold mb-2">Record Video Intro</h3>
            <p className="text-sm text-muted-foreground">Show your personality</p>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="pt-6 text-center">
            <Users className="h-12 w-12 mx-auto mb-4 text-purple-500" />
            <h3 className="font-semibold mb-2">Join Group Chat</h3>
            <p className="text-sm text-muted-foreground">Meet multiple people</p>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Video Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Upcoming Video Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">{event.title}</h4>
                    <Badge variant="secondary">{event.type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                  <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{event.participants} participants</span>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                  Join Event
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Video Call History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Video Calls</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: "Emily Davis", duration: "12:45", time: "2 hours ago", type: "outgoing" },
              { name: "Michael Brown", duration: "8:20", time: "Yesterday", type: "incoming" },
              { name: "Jessica Wilson", duration: "25:30", time: "2 days ago", type: "outgoing" }
            ].map((call, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                    {call.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{call.name}</p>
                    <p className="text-sm text-muted-foreground">{call.time} • {call.duration}</p>
                  </div>
                </div>
                <Button variant="outline" size="icon">
                  <Video className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoChat;