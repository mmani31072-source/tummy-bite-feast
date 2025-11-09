import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChefHat, Clock, Star } from "lucide-react";
import Navbar from "@/components/Navbar";

const heroImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&h=600&fit=crop",
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen pt-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        
        {/* Background Image Slider */}
        <div className="absolute inset-0 opacity-20">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === idx ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl slide-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Taste.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Happiness.
              </span>{" "}
              Delivered.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Experience the finest multi-cuisine dishes from top restaurants, delivered right to your hostel room.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu">
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-lg px-8 py-6 rounded-full">
                  Explore Menu
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/restaurants">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Restaurants
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === idx ? "bg-primary w-8" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <ChefHat className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">50+ Dishes</h3>
              <p className="text-muted-foreground">
                Wide variety of multi-cuisine dishes from Indian, Italian, Chinese, and Continental
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Track your order in real-time with our live delivery tracking system
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Top Restaurants</h3>
              <p className="text-muted-foreground">
                Partner with the best 6 restaurants to bring you quality food
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
