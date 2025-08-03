import { HomeIcon, User, Settings, Heart, MessageCircle, Video, Trophy, Crown, Calendar } from "lucide-react";
import Index from "./pages/Index";
import EnhancedDashboard from "./pages/EnhancedDashboard";
import VideoChat from "./components/video/VideoChat";
import EventsPage from "./components/events/EventsPage";
import PremiumFeatures from "./components/premium/PremiumFeatures";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <EnhancedDashboard />,
  },
  {
    title: "Matches",
    to: "/matches",
    icon: <Heart className="h-4 w-4" />,
    page: <EnhancedDashboard />,
  },
  {
    title: "Messages", 
    to: "/messages",
    icon: <MessageCircle className="h-4 w-4" />,
    page: <EnhancedDashboard />,
  },
  {
    title: "Video",
    to: "/video",
    icon: <Video className="h-4 w-4" />,
    page: <VideoChat />,
  },
  {
    title: "Events",
    to: "/events", 
    icon: <Trophy className="h-4 w-4" />,
    page: <EventsPage />,
  },
  {
    title: "Premium",
    to: "/premium",
    icon: <Crown className="h-4 w-4" />,
    page: <PremiumFeatures />,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <User className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: <Index />,
  },
];