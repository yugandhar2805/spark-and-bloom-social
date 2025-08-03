import { useState } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  MessageCircle, 
  Search, 
  User, 
  Settings, 
  Bell, 
  Sparkles,
  Video,
  Map,
  Trophy,
  Gift
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AppLayout = () => {
  const [notifications] = useState(3);
  const location = useLocation();
  const { toast } = useToast();

  const handleNotificationClick = () => {
    toast({
      title: "Notifications",
      description: "You have 3 new notifications",
      duration: 2000,
    });
  };

  const navItems = [
    { path: "/", icon: Search, label: "Discover" },
    { path: "/matches", icon: Heart, label: "Matches" },
    { path: "/messages", icon: MessageCircle, label: "Messages" },
    { path: "/video", icon: Video, label: "Video" },
    { path: "/events", icon: Trophy, label: "Events" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-pink-50/30 dark:from-background dark:to-purple-950/10">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            LoveMatch
          </Link>
          
          <div className="flex items-center space-x-2">
            <Button size="icon" variant="ghost" className="relative" onClick={handleNotificationClick}>
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-pink-500 text-white">
                  {notifications}
                </Badge>
              )}
            </Button>
            <Link to="/premium">
              <Button size="icon" variant="ghost" className="text-yellow-600 hover:text-yellow-700">
                <Sparkles className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/profile">
              <Button size="icon" variant="ghost">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/settings">
              <Button size="icon" variant="ghost">
                <Settings className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Bottom Navigation for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center p-2 text-xs ${
                  isActive 
                    ? "text-pink-500" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <item.icon className="h-5 w-5 mb-1" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default AppLayout;