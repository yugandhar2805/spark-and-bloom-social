import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  Image, 
  Mic, 
  Video, 
  Smile, 
  Paperclip,
  Phone,
  MoreVertical,
  Check,
  CheckCheck,
  ArrowLeft
} from "lucide-react";
import { mockMatches } from "@/data/mockProfiles";

interface Message {
  id: number;
  text: string;
  sender: "me" | "other";
  timestamp: string;
  status: "sent" | "delivered" | "read";
  type: "text" | "image" | "voice" | "gif";
}

interface EnhancedMessagingProps {
  selectedMatch?: any;
  onBack?: () => void;
}

const EnhancedMessaging = ({ selectedMatch, onBack }: EnhancedMessagingProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey! How's your day going?",
      sender: "other",
      timestamp: "10:30 AM",
      status: "read",
      type: "text"
    },
    {
      id: 2,
      text: "It's going great! Just finished a workout. How about you?",
      sender: "me",
      timestamp: "10:32 AM",
      status: "read",
      type: "text"
    },
    {
      id: 3,
      text: "That's awesome! I love staying active too. What kind of workout?",
      sender: "other",
      timestamp: "10:35 AM",
      status: "read",
      type: "text"
    },
    {
      id: 4,
      text: "Just some yoga and cardio. Really helps me start the day right!",
      sender: "me",
      timestamp: "10:37 AM",
      status: "delivered",
      type: "text"
    }
  ]);
  
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: message,
        sender: "me",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: "sent",
        type: "text"
      };
      
      setMessages([...messages, newMessage]);
      setMessage("");
      
      // Simulate typing indicator
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        // Simulate response
        const response: Message = {
          id: messages.length + 2,
          text: "That sounds great! I'd love to hear more about your routine.",
          sender: "other",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: "sent",
          type: "text"
        };
        setMessages(prev => [...prev, response]);
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const currentMatch = selectedMatch || mockMatches[0];

  return (
    <div className="flex flex-col h-[600px] max-w-2xl mx-auto">
      {/* Chat Header */}
      <CardHeader className="flex flex-row items-center space-y-0 pb-4 border-b">
        <Button variant="ghost" size="icon" onClick={onBack} className="mr-2 md:hidden">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex items-center gap-3 flex-1">
          <div className="relative">
            <img 
              src={currentMatch.avatar} 
              alt={currentMatch.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          
          <div className="flex-1">
            <h3 className="font-semibold">{currentMatch.name}</h3>
            <p className="text-xs text-muted-foreground">
              {isTyping ? "typing..." : "online"}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon">
            <Phone className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Video className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      {/* Messages Area */}
      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[70%] ${msg.sender === "me" ? "order-2" : "order-1"}`}>
              <div className={`rounded-2xl px-4 py-2 ${
                msg.sender === "me" 
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" 
                  : "bg-muted"
              }`}>
                <p className="text-sm">{msg.text}</p>
              </div>
              
              <div className={`flex items-center gap-1 mt-1 text-xs text-muted-foreground ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}>
                <span>{msg.timestamp}</span>
                {msg.sender === "me" && (
                  <div className="flex items-center">
                    {msg.status === "sent" && <Check className="h-3 w-3" />}
                    {msg.status === "delivered" && <CheckCheck className="h-3 w-3" />}
                    {msg.status === "read" && <CheckCheck className="h-3 w-3 text-blue-500" />}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-2xl px-4 py-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </CardContent>
      
      {/* Message Input */}
      <div className="border-t p-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Image className="h-4 w-4" />
          </Button>
          
          <div className="flex-1 relative">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="pr-12"
            />
            <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Smile className="h-4 w-4" />
            </Button>
          </div>
          
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Mic className="h-4 w-4" />
          </Button>
          
          <Button 
            onClick={handleSendMessage}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
            size="icon"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Quick Responses */}
        <div className="flex gap-2 mt-3 overflow-x-auto">
          {["👋 Hey!", "😊 How are you?", "☕ Coffee?", "🎬 Movie night?"].map((quick, index) => (
            <Badge 
              key={index}
              variant="outline" 
              className="cursor-pointer hover:bg-pink-50 hover:border-pink-300 whitespace-nowrap"
              onClick={() => setMessage(quick)}
            >
              {quick}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedMessaging;