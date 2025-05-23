
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const NotFound = () => {
  // Images that will be shown in the carousel
  const animatedImages = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg"
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/10 px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-9xl font-bold text-primary bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">404</h1>
          <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
          <p className="text-muted-foreground mt-2 max-w-md">
            The page you are looking for doesn't exist or has been moved.
            Let's help you find your perfect match instead!
          </p>
        </div>
        
        <div className="py-6 animate-enter">
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {animatedImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg shadow-lg hover-scale">
                      <img 
                        src={image} 
                        alt={`Animated image ${index + 1}`} 
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
          <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white">
            <Link to="/">Find Your Match</Link>
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Or explore <Link to="/dashboard" className="text-primary hover:underline">suggested profiles</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
