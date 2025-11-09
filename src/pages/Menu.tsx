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
  { id: 7, name: "Tandoori Chicken", cuisine: "Indian", price: 250, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop", rating: 4.7 },
  { id: 8, name: "Chole Bhature", cuisine: "Indian", price: 140, image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400&h=300&fit=crop", rating: 4.5 },
  { id: 9, name: "Palak Paneer", cuisine: "Indian", price: 170, image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400&h=300&fit=crop", rating: 4.4 },
  { id: 10, name: "Aloo Paratha", cuisine: "Indian", price: 80, image: "https://images.unsplash.com/photo-1660869760954-a16c6c0f860a?w=400&h=300&fit=crop", rating: 4.3 },
  { id: 11, name: "Chicken Tikka", cuisine: "Indian", price: 230, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop", rating: 4.6 },
  { id: 12, name: "Pav Bhaji", cuisine: "Indian", price: 110, image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop", rating: 4.5 },
  { id: 13, name: "Veg Thali", cuisine: "Indian", price: 200, image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&h=300&fit=crop", rating: 4.7 },
  { id: 14, name: "Fish Curry", cuisine: "Indian", price: 280, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop", rating: 4.6 },
  { id: 15, name: "Mutton Rogan Josh", cuisine: "Indian", price: 320, image: "https://images.unsplash.com/photo-1631709497146-a239ef373cf1?w=400&h=300&fit=crop", rating: 4.8 },
  
  // Italian
  { id: 16, name: "Margherita Pizza", cuisine: "Italian", price: 280, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop", rating: 4.7 },
  { id: 17, name: "Pasta Alfredo", cuisine: "Italian", price: 260, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop", rating: 4.5 },
  { id: 18, name: "Lasagna", cuisine: "Italian", price: 320, image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop", rating: 4.6 },
  { id: 19, name: "Pepperoni Pizza", cuisine: "Italian", price: 340, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop", rating: 4.8 },
  { id: 20, name: "Spaghetti Carbonara", cuisine: "Italian", price: 270, image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop", rating: 4.6 },
  { id: 21, name: "Penne Arrabbiata", cuisine: "Italian", price: 240, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop", rating: 4.4 },
  { id: 22, name: "Veggie Pizza", cuisine: "Italian", price: 300, image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=300&fit=crop", rating: 4.5 },
  { id: 23, name: "Ravioli", cuisine: "Italian", price: 290, image: "https://images.unsplash.com/photo-1587740896339-96b76acb83f9?w=400&h=300&fit=crop", rating: 4.7 },
  { id: 24, name: "Minestrone Soup", cuisine: "Italian", price: 150, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop", rating: 4.3 },
  { id: 25, name: "Garlic Bread", cuisine: "Italian", price: 120, image: "https://images.unsplash.com/photo-1573140401552-3fab0b24f2cc?w=400&h=300&fit=crop", rating: 4.5 },
  { id: 26, name: "BBQ Chicken Pizza", cuisine: "Italian", price: 360, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop", rating: 4.8 },
  { id: 27, name: "Risotto", cuisine: "Italian", price: 310, image: "https://images.unsplash.com/photo-1476124369491-c0b5f4925c4f?w=400&h=300&fit=crop", rating: 4.6 },
  
  // Chinese
  { id: 28, name: "Veg Manchurian", cuisine: "Chinese", price: 180, image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=300&fit=crop", rating: 4.4 },
  { id: 29, name: "Fried Rice", cuisine: "Chinese", price: 160, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop", rating: 4.3 },
  { id: 30, name: "Hakka Noodles", cuisine: "Chinese", price: 170, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop", rating: 4.5 },
  { id: 31, name: "Spring Rolls", cuisine: "Chinese", price: 140, image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop", rating: 4.2 },
  { id: 32, name: "Chicken Manchurian", cuisine: "Chinese", price: 210, image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=300&fit=crop", rating: 4.6 },
  { id: 33, name: "Schezwan Noodles", cuisine: "Chinese", price: 190, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop", rating: 4.5 },
  { id: 34, name: "Chilli Chicken", cuisine: "Chinese", price: 220, image: "https://images.unsplash.com/photo-1603073197527-3e57099c4926?w=400&h=300&fit=crop", rating: 4.7 },
  { id: 35, name: "Momos (Steamed)", cuisine: "Chinese", price: 120, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop", rating: 4.8 },
  { id: 36, name: "Hot & Sour Soup", cuisine: "Chinese", price: 130, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop", rating: 4.3 },
  { id: 37, name: "Sweet & Sour Chicken", cuisine: "Chinese", price: 230, image: "https://images.unsplash.com/photo-1603073197527-3e57099c4926?w=400&h=300&fit=crop", rating: 4.5 },
  { id: 38, name: "Chowmein", cuisine: "Chinese", price: 180, image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop", rating: 4.4 },
  { id: 39, name: "Dim Sum", cuisine: "Chinese", price: 150, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop", rating: 4.6 },
  { id: 40, name: "Honey Chilli Potato", cuisine: "Chinese", price: 160, image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop", rating: 4.5 },
  
  // Continental
  { id: 41, name: "Chicken Burger", cuisine: "Continental", price: 200, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop", rating: 4.6 },
  { id: 42, name: "Club Sandwich", cuisine: "Continental", price: 180, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop", rating: 4.4 },
  { id: 43, name: "Caesar Salad", cuisine: "Continental", price: 160, image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop", rating: 4.3 },
  { id: 44, name: "French Fries", cuisine: "Continental", price: 100, image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&h=300&fit=crop", rating: 4.5 },
  { id: 45, name: "Grilled Chicken Steak", cuisine: "Continental", price: 350, image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=300&fit=crop", rating: 4.8 },
  { id: 46, name: "Fish & Chips", cuisine: "Continental", price: 280, image: "https://images.unsplash.com/photo-1580217593608-61931cefc821?w=400&h=300&fit=crop", rating: 4.5 },
  { id: 47, name: "Mushroom Soup", cuisine: "Continental", price: 140, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop", rating: 4.4 },
  { id: 48, name: "Veggie Burger", cuisine: "Continental", price: 170, image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=300&fit=crop", rating: 4.3 },
  { id: 49, name: "Chicken Wings", cuisine: "Continental", price: 220, image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop", rating: 4.7 },
  { id: 50, name: "Onion Rings", cuisine: "Continental", price: 110, image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop", rating: 4.4 },
  { id: 51, name: "Chicken Quesadilla", cuisine: "Continental", price: 240, image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400&h=300&fit=crop", rating: 4.6 },
  { id: 52, name: "Nachos with Cheese", cuisine: "Continental", price: 180, image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&h=300&fit=crop", rating: 4.5 },
  { id: 53, name: "Greek Salad", cuisine: "Continental", price: 170, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop", rating: 4.3 },
  { id: 54, name: "BBQ Chicken", cuisine: "Continental", price: 260, image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop", rating: 4.7 },
  { id: 55, name: "Cheese Balls", cuisine: "Continental", price: 130, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop", rating: 4.4 },
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
