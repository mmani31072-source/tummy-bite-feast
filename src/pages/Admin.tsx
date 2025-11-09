import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import { Package, Truck, CheckCircle, Clock } from "lucide-react";

const initialOrders = [
  { id: 1, student: "Rahul Sharma", dish: "Paneer Butter Masala", status: "preparing", time: "2 min ago" },
  { id: 2, student: "Ananya Singh", dish: "Margherita Pizza", status: "delivery", time: "5 min ago" },
  { id: 3, student: "Vivek Kumar", dish: "Chicken Biryani", status: "delivered", time: "15 min ago" },
  { id: 4, student: "Priya Patel", dish: "Veg Manchurian", status: "preparing", time: "1 min ago" },
  { id: 5, student: "Arjun Reddy", dish: "Club Sandwich", status: "delivery", time: "8 min ago" },
];

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [orders, setOrders] = useState(initialOrders);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      toast({
        title: "Admin Access Granted! 🔐",
        description: "Welcome to the admin dashboard",
      });
    } else {
      toast({
        title: "Invalid Credentials",
        description: "Username: admin, Password: 1234",
        variant: "destructive",
      });
    }
  };

  const updateOrderStatus = (orderId: number) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.id === orderId) {
          const statusFlow = { preparing: "delivery", delivery: "delivered", delivered: "delivered" };
          return { ...order, status: statusFlow[order.status as keyof typeof statusFlow] };
        }
        return order;
      })
    );
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "preparing":
        return <Package className="w-5 h-5" />;
      case "delivery":
        return <Truck className="w-5 h-5" />;
      case "delivered":
        return <CheckCircle className="w-5 h-5" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "preparing":
        return "bg-warning text-warning-foreground";
      case "delivery":
        return "bg-primary text-primary-foreground";
      case "delivered":
        return "bg-success text-success-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {!isLoggedIn ? (
            <Card className="max-w-md mx-auto p-8 shadow-xl">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
                <p className="text-muted-foreground">
                  Login with credentials: admin / 1234
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-lg py-6"
                >
                  Login to Dashboard
                </Button>
              </form>
            </Card>
          ) : (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">Order Management</h1>
                <p className="text-muted-foreground">
                  Track and manage all student orders
                </p>
              </div>

              <div className="grid gap-4">
                {orders.map((order) => (
                  <Card
                    key={order.id}
                    className="p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-3 rounded-full ${getStatusColor(
                              order.status
                            )}`}
                          >
                            {getStatusIcon(order.status)}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">
                              Order #{order.id}
                            </h3>
                            <p className="text-muted-foreground mb-2">
                              <span className="font-semibold text-foreground">
                                {order.student}
                              </span>{" "}
                              ordered {order.dish}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {order.time}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <Badge
                          className={`${getStatusColor(
                            order.status
                          )} text-sm px-4 py-2`}
                        >
                          {order.status === "preparing" && "Preparing"}
                          {order.status === "delivery" && "Out for Delivery"}
                          {order.status === "delivered" && "Delivered"}
                        </Badge>

                        {order.status !== "delivered" && (
                          <Button
                            onClick={() => updateOrderStatus(order.id)}
                            variant="outline"
                            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          >
                            {order.status === "preparing" && "Send for Delivery"}
                            {order.status === "delivery" && "Mark Delivered"}
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
