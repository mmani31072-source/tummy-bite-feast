import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Star, Clock, ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
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
    dishes: [
      { name: "Chicken Biryani", price: 220 },
      { name: "Paneer Butter Masala", price: 180 },
      { name: "Butter Chicken", price: 240 },
      { name: "Dal Makhani", price: 160 },
    ],
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
    dishes: [
      { name: "Margherita Pizza", price: 280 },
      { name: "Pepperoni Pizza", price: 340 },
      { name: "Pasta Alfredo", price: 260 },
      { name: "Garlic Bread", price: 120 },
    ],
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
    dishes: [
      { name: "Hakka Noodles", price: 170 },
      { name: "Veg Manchurian", price: 180 },
      { name: "Fried Rice", price: 160 },
      { name: "Momos (Steamed)", price: 120 },
    ],
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
    dishes: [
      { name: "Chicken Burger", price: 200 },
      { name: "Veggie Burger", price: 170 },
      { name: "French Fries", price: 100 },
      { name: "Cheese Balls", price: 130 },
    ],
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
    dishes: [
      { name: "Tandoori Chicken", price: 250 },
      { name: "Palak Paneer", price: 170 },
      { name: "Veg Thali", price: 200 },
      { name: "Fish Curry", price: 280 },
    ],
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
    dishes: [
      { name: "Spaghetti Carbonara", price: 270 },
      { name: "Lasagna", price: 320 },
      { name: "Ravioli", price: 290 },
      { name: "Penne Arrabbiata", price: 240 },
    ],
  },
  {
    id: 7,
    name: "Tandoor Express",
    cuisine: "Indian",
    rating: 4.6,
    deliveryTime: "25-30 min",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
    specialties: ["Kebabs", "Tikka", "Rotis"],
    location: "University Road",
    dishes: [
      { name: "Chicken Tikka", price: 230 },
      { name: "Mutton Rogan Josh", price: 320 },
      { name: "Paneer Tikka", price: 210 },
      { name: "Aloo Paratha", price: 80 },
    ],
  },
  {
    id: 8,
    name: "Noodle Nation",
    cuisine: "Chinese",
    rating: 4.5,
    deliveryTime: "20-25 min",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&h=400&fit=crop",
    specialties: ["Authentic Noodles", "Dim Sum", "Soup"],
    location: "Downtown",
    dishes: [
      { name: "Schezwan Noodles", price: 190 },
      { name: "Chilli Chicken", price: 220 },
      { name: "Dim Sum", price: 150 },
      { name: "Hot & Sour Soup", price: 130 },
    ],
  },
  {
    id: 9,
    name: "Desi Dhaba",
    cuisine: "Indian",
    rating: 4.4,
    deliveryTime: "30-35 min",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&h=400&fit=crop",
    specialties: ["North Indian", "Parathas", "Lassi"],
    location: "Highway Side",
    dishes: [
      { name: "Chole Bhature", price: 140 },
      { name: "Pav Bhaji", price: 110 },
      { name: "Masala Dosa", price: 120 },
      { name: "Dal Fry", price: 150 },
    ],
  },
  {
    id: 10,
    name: "The Steakhouse",
    cuisine: "Continental",
    rating: 4.9,
    deliveryTime: "35-40 min",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=400&fit=crop",
    specialties: ["Steaks", "Grills", "Salads"],
    location: "Premium Plaza",
    dishes: [
      { name: "Grilled Chicken Steak", price: 350 },
      { name: "BBQ Chicken", price: 260 },
      { name: "Fish & Chips", price: 280 },
      { name: "Greek Salad", price: 170 },
    ],
  },
  {
    id: 11,
    name: "Sushi Corner",
    cuisine: "Chinese",
    rating: 4.7,
    deliveryTime: "25-30 min",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop",
    specialties: ["Sushi", "Ramen", "Asian Fusion"],
    location: "Metro Station",
    dishes: [
      { name: "Veg Sushi Roll", price: 240 },
      { name: "Chowmein", price: 180 },
      { name: "Sweet & Sour Chicken", price: 230 },
      { name: "Spring Rolls", price: 140 },
    ],
  },
  {
    id: 12,
    name: "Taco Fiesta",
    cuisine: "Continental",
    rating: 4.5,
    deliveryTime: "20-25 min",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
    specialties: ["Tacos", "Burritos", "Nachos"],
    location: "Food Street",
    dishes: [
      { name: "Chicken Quesadilla", price: 240 },
      { name: "Nachos with Cheese", price: 180 },
      { name: "Veggie Tacos", price: 160 },
      { name: "Chicken Wings", price: 220 },
    ],
  },
];

const Restaurants = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<typeof restaurants[0] | null>(null);
  const [selectedDish, setSelectedDish] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleOrderClick = (restaurant: typeof restaurants[0]) => {
    setSelectedRestaurant(restaurant);
    setSelectedDish(null);
  };

  const handleConfirmOrder = () => {
    if (selectedDish && selectedRestaurant) {
      toast({
        title: "Order Confirmed! 🎉",
        description: `Your ${selectedDish} from ${selectedRestaurant.name} is being prepared.`,
      });
      setSelectedRestaurant(null);
      setTimeout(() => {
        navigate("/tracking");
      }, 1500);
    } else {
      toast({
        title: "Please select a dish",
        description: "Choose a dish to place your order",
        variant: "destructive",
      });
    }
  };

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
                onClick={() => handleOrderClick(restaurant)}
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

                  <div className="mb-4">
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

                  <Button className="w-full bg-primary hover:bg-primary-dark">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Order Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Order Dialog */}
      <Dialog open={!!selectedRestaurant} onOpenChange={() => setSelectedRestaurant(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">
              Order from {selectedRestaurant?.name}
            </DialogTitle>
            <p className="text-muted-foreground mt-2">
              {selectedRestaurant?.cuisine} • {selectedRestaurant?.deliveryTime}
            </p>
          </DialogHeader>

          <div className="space-y-4 mt-6">
            <h3 className="font-bold text-xl">Select Your Dish</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {selectedRestaurant?.dishes.map((dish, idx) => (
                <Card
                  key={idx}
                  onClick={() => setSelectedDish(dish.name)}
                  className={`p-4 cursor-pointer transition-all ${
                    selectedDish === dish.name
                      ? "ring-4 ring-primary shadow-xl"
                      : "hover:shadow-lg"
                  }`}
                >
                  <h4 className="font-bold text-lg mb-2">{dish.name}</h4>
                  <p className="text-2xl font-bold text-primary">₹{dish.price}</p>
                </Card>
              ))}
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={() => setSelectedRestaurant(null)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirmOrder}
                disabled={!selectedDish}
                className="flex-1 bg-primary hover:bg-primary-dark"
              >
                Confirm Order
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Restaurants;
