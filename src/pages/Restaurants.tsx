import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";

const restaurants = [
  {
    id: 1,
    name: "Spice Junction",
    cuisine: "Indian",
    rating: 4.5,
    deliveryTime: "25-30 min",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    specialties: ["Biryani", "Paneer Dishes", "Naan"],
    location: "Near Main Gate",
  },
  {
    id: 2,
    name: "Pizza Paradise",
    cuisine: "Italian",
    rating: 4.7,
    deliveryTime: "20-25 min",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
    specialties: ["Wood Fired Pizza", "Pasta", "Garlic Bread"],
    location: "College Road",
  },
  {
    id: 3,
    name: "Dragon Wok",
    cuisine: "Chinese",
    rating: 4.4,
    deliveryTime: "30-35 min",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
    specialties: ["Noodles", "Manchurian", "Fried Rice"],
    location: "Market Complex",
  },
  {
    id: 4,
    name: "Burger Hub",
    cuisine: "Continental",
    rating: 4.6,
    deliveryTime: "15-20 min",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=400&fit=crop",
    specialties: ["Gourmet Burgers", "Fries", "Shakes"],
    location: "Food Court",
  },
  {
    id: 5,
    name: "Curry House",
    cuisine: "Indian",
    rating: 4.3,
    deliveryTime: "25-30 min",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop",
    specialties: ["Curries", "Tandoori", "Thalis"],
    location: "Campus Street",
  },
  {
    id: 6,
    name: "Pasta Villa",
    cuisine: "Italian",
    rating: 4.8,
    deliveryTime: "20-25 min",
    image: "https://images.unsplash.com/photo-1498579397066-22750a3cb424?w=600&h=400&fit=crop",
    specialties: ["Fresh Pasta", "Lasagna", "Tiramisu"],
    location: "Central Plaza",
  },
];

const Restaurants = () => {
  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              Our <span className="text-primary">Partner</span> Restaurants
            </h1>
            <p className="text-xl text-muted-foreground">
              Top-rated restaurants serving delicious food
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurants.map((restaurant) => (
              <Card
                key={restaurant.id}
                className="overflow-hidden dish-card-hover cursor-pointer border-0 shadow-lg"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {restaurant.cuisine}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{restaurant.name}</h3>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-warning fill-warning" />
                      <span className="font-semibold text-foreground">
                        {restaurant.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{restaurant.deliveryTime}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 mb-4">
                    <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {restaurant.location}
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.specialties.map((specialty, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-primary/10 text-primary"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
