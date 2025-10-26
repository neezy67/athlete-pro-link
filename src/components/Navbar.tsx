import { Link, useLocation } from "react-router-dom";
import { Dumbbell, Search, Info, User, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-2xl text-primary hover:opacity-80 transition-opacity">
          <Dumbbell className="h-7 w-7" />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            CoachLink+
          </span>
        </Link>
        
        <div className="flex items-center gap-2">
          <Button
            variant={isActive("/search") ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link to="/search">
              <Search className="h-4 w-4 mr-2" />
              Rechercher
            </Link>
          </Button>
          
          <Button
            variant={isActive("/about") ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link to="/about">
              <Info className="h-4 w-4 mr-2" />
              À Propos
            </Link>
          </Button>
          
          <Button
            variant={isActive("/dashboard") ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link to="/dashboard">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              Mon Espace
            </Link>
          </Button>
          
          <Button
            variant={isActive("/auth") ? "default" : "outline"}
            size="sm"
            asChild
          >
            <Link to="/auth">
              <User className="h-4 w-4 mr-2" />
              Connexion
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
