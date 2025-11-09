import { Link, useLocation } from "react-router-dom";
import { UtensilsCrossed } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center logo-bite">
              <UtensilsCrossed className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tummy Bites
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive("/")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`font-medium transition-colors ${
                isActive("/menu")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Menu
            </Link>
            <Link
              to="/restaurants"
              className={`font-medium transition-colors ${
                isActive("/restaurants")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Restaurants
            </Link>
            <Link
              to="/student"
              className={`font-medium transition-colors ${
                isActive("/student")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Student
            </Link>
            <Link
              to="/admin"
              className={`font-medium transition-colors ${
                isActive("/admin")
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
