import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const cuisines = ["All", "Indian", "Italian", "Chinese", "Continental"];

const dishes = [
  // Indian
  { id: 1, name: "Paneer Butter Masala", cuisine: "Indian", price: 180, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop", rating: 4.5 },
  { id: 2, name: "Chicken Biryani", cuisine: "Indian", price: 220, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop", rating: 4.8 },
  { id: 3, name: "Masala Dosa", cuisine: "Indian", price: 120, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop", rating: 4.6 },
  { id: 4, name: "Samosa", cuisine: "Indian", price: 40, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop", rating: 4.3 },
  { id: 5, name: "Dal Makhani", cuisine: "Indian", price: 160, image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&h=300&fit=crop", rating: 4.4 },
  { id: 6, name: "Butter Chicken", cuisine: "Indian", price: 240, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop", rating: 4.9 },
  
  // Italian
  { id: 7, name: "Margherita Pizza", cuisine: "Italian", price: 280, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop", rating: 4.7 },
  { id: 8, name: "Pasta Alfredo", cuisine: "Italian", price: 260, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop", rating: 4.5 },
  { id: 9, name: "Lasagna", cuisine: "Italian", price: 320, image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop", rating: 4.6 },
  { id: 10, name: "Pepperoni Pizza", cuisine: "Italian", price: 340, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop", rating: 4.8 },
  
  // Chinese
  { id: 11, name: "Veg Manchurian", cuisine: "Chinese", price: 180, image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=300&fit=crop", rating: 4.4 },
  { id: 12, name: "Fried Rice", cuisine: "Chinese", price: 160, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop", rating: 4.3 },
  { id: 13, name: "Hakka Noodles", cuisine: "Chinese", price: 170, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop", rating: 4.5 },
  { id: 14, name: "Spring Rolls", cuisine: "Chinese", price: 140, image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop", rating: 4.2 },
  
  // Continental
  { id: 15, name: "Chicken Burger", cuisine: "Continental", price: 200, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop", rating: 4.6 },
  { id: 16, name: "Club Sandwich", cuisine: "Continental", price: 180, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop", rating: 4.4 },
  { id: 17, name: "Caesar Salad", cuisine: "Continental", price: 160, image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop", rating: 4.3 },
  { id: 18, name: "French Fries", cuisine: "Continental", price: 100, image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&h=300&fit=crop", rating: 4.5 },
];

const Menu = () => {
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  const filteredDishes =
    selectedCuisine === "All"
      ? dishes
      : dishes.filter((dish) => dish.cuisine === selectedCuisine);

  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              Our <span className="text-primary">Delicious</span> Menu
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our wide variety of multi-cuisine dishes
            </p>
          </div>

          {/* Cuisine Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {cuisines.map((cuisine) => (
              <Button
                key={cuisine}
                onClick={() => setSelectedCuisine(cuisine)}
                variant={selectedCuisine === cuisine ? "default" : "outline"}
                className={`rounded-full px-6 ${
                  selectedCuisine === cuisine
                    ? "bg-primary hover:bg-primary-dark"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {cuisine}
              </Button>
            ))}
          </div>

          {/* Dishes Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDishes.map((dish) => (
              <Card
                key={dish.id}
                className="overflow-hidden dish-card-hover cursor-pointer border-0 shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    {dish.cuisine}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{dish.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      ₹{dish.price}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-warning">★</span>
                      <span className="font-semibold">{dish.rating}</span>
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

export default Menu;
