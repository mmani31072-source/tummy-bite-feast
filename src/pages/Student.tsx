import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const dishes = [
  { id: 1, name: "Paneer Butter Masala", price: 180, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop" },
  { id: 2, name: "Chicken Biryani", price: 220, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&h=200&fit=crop" },
  { id: 3, name: "Margherita Pizza", price: 280, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop" },
  { id: 4, name: "Veg Manchurian", price: 180, image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=300&h=200&fit=crop" },
  { id: 5, name: "Chicken Burger", price: 200, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
];

const Student = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [selectedDish, setSelectedDish] = useState<number | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentName && studentId) {
      setIsLoggedIn(true);
      toast({
        title: "Welcome! 🎉",
        description: `Hi ${studentName}! You're logged in successfully.`,
      });
    }
  };

  const handleConfirmOrder = () => {
    if (selectedDish !== null) {
      const dish = dishes.find((d) => d.id === selectedDish);
      toast({
        title: "Order Confirmed! 🎉",
        description: `Your ${dish?.name} is being prepared. Tracking your delivery...`,
      });
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
        <div className="container mx-auto px-4 max-w-4xl">
          {!isLoggedIn ? (
            <Card className="p-8 shadow-xl">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-2">Student Portal</h1>
                <p className="text-muted-foreground">Login to place your order</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <Label htmlFor="name">Student Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="studentId">Student ID</Label>
                  <Input
                    id="studentId"
                    type="text"
                    placeholder="Enter your student ID"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-lg py-6"
                >
                  Login
                </Button>
              </form>
            </Card>
          ) : (
            <div className="space-y-8">
              <Card className="p-6 bg-primary/5 border-primary">
                <h2 className="text-2xl font-bold mb-2">
                  Welcome, {studentName}! 👋
                </h2>
                <p className="text-muted-foreground">Student ID: {studentId}</p>
              </Card>

              <div>
                <h3 className="text-3xl font-bold mb-6">Select Your Dish</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {dishes.map((dish) => (
                    <Card
                      key={dish.id}
                      onClick={() => setSelectedDish(dish.id)}
                      className={`cursor-pointer transition-all overflow-hidden ${
                        selectedDish === dish.id
                          ? "ring-4 ring-primary shadow-xl scale-105"
                          : "hover:shadow-lg"
                      }`}
                    >
                      <div className="h-40 overflow-hidden">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">{dish.name}</h4>
                        <p className="text-2xl font-bold text-primary">
                          ₹{dish.price}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleConfirmOrder}
                className="w-full bg-primary hover:bg-primary-dark text-lg py-6"
                disabled={selectedDish === null}
              >
                Confirm Order
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Student;
