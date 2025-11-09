import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Clock, User } from "lucide-react";
import Navbar from "@/components/Navbar";

const Tracking = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 4;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Track Your <span className="text-primary">Delivery</span>
            </h1>
            <p className="text-muted-foreground">
              Your delicious meal is on its way!
            </p>
          </div>

          <div className="space-y-6">
            {/* Delivery Info Card */}
            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Delivery Partner
                    </p>
                    <p className="font-bold text-lg">Ramesh Kumar</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Contact
                    </p>
                    <p className="font-bold text-lg">+91 98765-43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Estimated Time
                    </p>
                    <p className="font-bold text-lg">
                      {Math.max(1, Math.ceil(20 - (progress / 100) * 20))} minutes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Delivery Address
                    </p>
                    <p className="font-bold">Room 104, Hostel A</p>
                    <p className="text-sm text-muted-foreground">Tech Campus</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Map Card */}
            <Card className="p-6 overflow-hidden">
              <h3 className="font-bold text-xl mb-4">Live Tracking</h3>
              
              <div className="relative h-64 bg-muted rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop"
                  alt="City Map"
                  className="w-full h-full object-cover opacity-30"
                />
                
                {/* Animated Delivery Boy */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 delivery-boy-animation"
                  style={{ left: "10px" }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <span className="text-2xl">🛵</span>
                    </div>
                    <Badge className="absolute -top-2 -right-2 bg-success animate-pulse">
                      Live
                    </Badge>
                  </div>
                </div>

                {/* Destination Marker */}
                <div className="absolute top-1/2 right-4 -translate-y-1/2">
                  <div className="w-10 h-10 bg-destructive rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-destructive-foreground" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Progress Bar */}
            <Card className="p-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Delivery Progress</span>
                  <span className="text-primary font-bold">{progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-linear rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                
                {progress < 100 ? (
                  <p className="text-sm text-muted-foreground text-center">
                    Your order is on the way...
                  </p>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-2xl font-bold text-success mb-2">
                      🎉 Delivered!
                    </p>
                    <p className="text-muted-foreground">
                      Enjoy your meal!
                    </p>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
