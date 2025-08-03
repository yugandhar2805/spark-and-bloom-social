import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Crown, 
  Sparkles, 
  Eye, 
  MapPin, 
  MessageCircle, 
  Heart,
  Zap,
  Shield,
  Check
} from "lucide-react";

const PremiumFeatures = () => {
  const features = [
    {
      icon: Heart,
      title: "Unlimited Likes",
      description: "Like as many profiles as you want"
    },
    {
      icon: Eye,
      title: "See Who Liked You",
      description: "View all profiles that liked you first"
    },
    {
      icon: Zap,
      title: "5 Super Likes Daily",
      description: "Stand out with premium super likes"
    },
    {
      icon: MapPin,
      title: "Passport Feature",
      description: "Match with people anywhere in the world"
    },
    {
      icon: MessageCircle,
      title: "Read Receipts",
      description: "See when your messages are read"
    },
    {
      icon: Shield,
      title: "Incognito Mode",
      description: "Browse profiles without being seen"
    }
  ];

  const plans = [
    {
      name: "Premium",
      price: "$9.99",
      period: "month",
      popular: false,
      features: [
        "Unlimited likes",
        "See who liked you",
        "5 Super Likes daily",
        "1 Boost monthly",
        "Read receipts"
      ]
    },
    {
      name: "Premium Plus",
      price: "$19.99",
      period: "month",
      popular: true,
      features: [
        "Everything in Premium",
        "Passport feature",
        "Incognito browsing",
        "Priority customer support",
        "Message before matching",
        "5 Boosts monthly"
      ]
    },
    {
      name: "Premium Gold",
      price: "$29.99",
      period: "month",
      popular: false,
      features: [
        "Everything in Premium Plus",
        "See who read your messages",
        "Weekly profile boost",
        "VIP customer support",
        "Advanced filters",
        "Unlimited rewinds"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Crown className="h-8 w-8 text-yellow-500" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Premium Features
          </h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Unlock premium features and get more matches with our subscription plans
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="text-center border-2 hover:border-pink-300 transition-colors">
            <CardContent className="pt-6">
              <feature.icon className="h-12 w-12 mx-auto mb-4 text-pink-500" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={`relative ${
              plan.popular 
                ? "border-2 border-pink-500 shadow-lg scale-105" 
                : "border"
            }`}
          >
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white">
                Most Popular
              </Badge>
            )}
            
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5 text-yellow-500" />
                {plan.name}
              </CardTitle>
              <div className="text-3xl font-bold">
                {plan.price}
                <span className="text-sm font-normal text-muted-foreground">/{plan.period}</span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                    : "bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700"
                }`}
              >
                Choose {plan.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Individual Purchases */}
      <Card>
        <CardHeader>
          <CardTitle>Individual Purchases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <Heart className="h-8 w-8 mx-auto mb-2 text-pink-500" />
              <h4 className="font-semibold">5 Super Likes</h4>
              <p className="text-sm text-muted-foreground">$4.99</p>
              <Button size="sm" className="mt-2 w-full">Buy Now</Button>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <Zap className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
              <h4 className="font-semibold">Profile Boost</h4>
              <p className="text-sm text-muted-foreground">$3.99</p>
              <Button size="sm" className="mt-2 w-full">Buy Now</Button>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <Eye className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <h4 className="font-semibold">Spotlight</h4>
              <p className="text-sm text-muted-foreground">$6.99</p>
              <Button size="sm" className="mt-2 w-full">Buy Now</Button>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <MapPin className="h-8 w-8 mx-auto mb-2 text-green-500" />
              <h4 className="font-semibold">Travel Pass</h4>
              <p className="text-sm text-muted-foreground">$9.99</p>
              <Button size="sm" className="mt-2 w-full">Buy Now</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PremiumFeatures;