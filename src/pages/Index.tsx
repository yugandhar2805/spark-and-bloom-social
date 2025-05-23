
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Heart, Search, MessageCircle, Shield, UserCheck } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Match</h1>
            <p className="text-xl md:text-2xl mb-8">Join thousands of singles looking for meaningful connections. Start your journey to find your best partner today.</p>
            <div className="space-x-4">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="/placeholder.svg" 
              alt="Happy couple" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Our Platform</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Heart className="h-10 w-10 text-pink-500" />} 
              title="Smart Matching" 
              description="Our AI-powered algorithm finds compatible matches based on your preferences and behavior."
            />
            <FeatureCard 
              icon={<Search className="h-10 w-10 text-purple-500" />} 
              title="Advanced Filters" 
              description="Find exactly what you're looking for with our detailed search filters."
            />
            <FeatureCard 
              icon={<MessageCircle className="h-10 w-10 text-blue-500" />} 
              title="Secure Messaging" 
              description="Connect with matches through our end-to-end encrypted messaging system."
            />
            <FeatureCard 
              icon={<Shield className="h-10 w-10 text-green-500" />} 
              title="Safety First" 
              description="Verified profiles and strict moderation to ensure a safe dating experience."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard 
              number="1" 
              title="Create Your Profile" 
              description="Sign up and build your profile with photos and personal details."
            />
            <StepCard 
              number="2" 
              title="Discover Matches" 
              description="Browse profiles or use our smart matching system to find compatible partners."
            />
            <StepCard 
              number="3" 
              title="Connect & Meet" 
              description="Start conversations, build connections, and arrange to meet when you're ready."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="I found my soulmate within two months of joining. We're now happily engaged!"
              name="Sarah & Michael"
              location="New York, USA"
            />
            <TestimonialCard 
              quote="The matching system really works! I connected with someone who shares all my values and interests."
              name="David & Lisa"
              location="London, UK"
            />
            <TestimonialCard 
              quote="After years of disappointing dates, I finally met someone special through this platform."
              name="James & Emma"
              location="Sydney, Australia"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of singles already on our platform and start your journey to meaningful connections.</p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100"
            onClick={() => navigate('/signup')}
          >
            Sign Up Now
          </Button>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const FeatureCard = ({ icon, title, description }) => (
  <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
    <CardContent className="pt-6">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
      <p className="text-muted-foreground text-center">{description}</p>
    </CardContent>
  </Card>
);

const StepCard = ({ number, title, description }) => (
  <Card className="border-none shadow-md">
    <CardContent className="pt-6">
      <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mb-4 mx-auto">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
      <p className="text-muted-foreground text-center">{description}</p>
    </CardContent>
  </Card>
);

const TestimonialCard = ({ quote, name, location }) => (
  <Card className="border-none shadow-md">
    <CardContent className="pt-6">
      <div className="mb-4 flex justify-center">
        <UserCheck className="h-8 w-8 text-purple-500" />
      </div>
      <p className="text-muted-foreground text-center italic mb-4">"{quote}"</p>
      <p className="font-semibold text-center">{name}</p>
      <p className="text-sm text-muted-foreground text-center">{location}</p>
    </CardContent>
  </Card>
);

export default Index;
