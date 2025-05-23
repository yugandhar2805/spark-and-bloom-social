
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { QuoteDisplay } from "@/components/ui/quote-display";

const NotFound = () => {
  // Animated images for the carousel
  const animatedImages = [
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvdmV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGxvdmV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGxvdmV8ZW58MHx8MHx8fDA%3D"
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950 dark:to-purple-950 px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">404</h1>
          <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
          <p className="text-muted-foreground mt-2 max-w-md">
            The page you are looking for doesn't exist or has been moved.
            Let's help you find your perfect match instead!
          </p>
        </div>
        
        <QuoteDisplay variant="card" className="animate-enter" />
        
        <div className="py-6 animate-enter" style={{ animationDelay: "0.2s" }}>
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {animatedImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg shadow-lg hover-scale transition-transform hover:scale-105 duration-300">
                      <img 
                        src={image} 
                        alt={`Love and connection ${index + 1}`} 
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
        
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
            <Link to="/">Find Your Match</Link>
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Or explore <Link to="/dashboard" className="text-pink-600 dark:text-pink-400 hover:underline">suggested profiles</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
