import { useState } from "react";
import { Search as SearchIcon, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfessionalCard from "@/components/ProfessionalCard";
import { professionals } from "@/data/professionals";

const Search = () => {
  const [filters, setFilters] = useState({
    type: "all",
    location: "",
    budget: "",
    rating: "all",
  });

  const filteredProfessionals = professionals.filter((pro) => {
    if (filters.type && filters.type !== "all" && pro.type !== filters.type) return false;
    if (filters.location && !pro.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    if (filters.budget && pro.price > parseInt(filters.budget)) return false;
    if (filters.rating && filters.rating !== "all" && pro.rating < parseFloat(filters.rating)) return false;
    return true;
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Trouvez votre professionnel
            </h1>
            <p className="text-muted-foreground text-lg">
              Découvrez les meilleurs coachs, kinés et préparateurs physiques près de chez vous
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 p-6 rounded-lg border bg-card animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <SlidersHorizontal className="h-5 w-5 text-primary" />
              <h2 className="font-semibold">Filtres de recherche</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Select
                value={filters.type}
                onValueChange={(value) => setFilters({ ...filters, type: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Type de professionnel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les types</SelectItem>
                  <SelectItem value="Coach">Coach</SelectItem>
                  <SelectItem value="Kinésithérapeute">Kinésithérapeute</SelectItem>
                  <SelectItem value="Préparateur Physique">Préparateur Physique</SelectItem>
                </SelectContent>
              </Select>

              <Input
                placeholder="Localisation"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              />

              <Input
                type="number"
                placeholder="Budget max (€/h)"
                value={filters.budget}
                onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
              />

              <Select
                value={filters.rating}
                onValueChange={(value) => setFilters({ ...filters, rating: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Note minimum" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les notes</SelectItem>
                  <SelectItem value="4.5">4.5+ étoiles</SelectItem>
                  <SelectItem value="4.0">4.0+ étoiles</SelectItem>
                  <SelectItem value="3.5">3.5+ étoiles</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {(filters.type !== "all" || filters.location || filters.budget || filters.rating !== "all") && (
              <Button
                variant="ghost"
                size="sm"
                className="mt-4"
                onClick={() => setFilters({ type: "all", location: "", budget: "", rating: "all" })}
              >
                Réinitialiser les filtres
              </Button>
            )}
          </div>

          {/* Results */}
          <div className="mb-4">
            <p className="text-muted-foreground">
              {filteredProfessionals.length} professionnel{filteredProfessionals.length > 1 ? "s" : ""} trouvé{filteredProfessionals.length > 1 ? "s" : ""}
            </p>
          </div>

          {filteredProfessionals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProfessionals.map((pro) => (
                <ProfessionalCard key={pro.id} {...pro} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 animate-fade-in">
              <SearchIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">Aucun résultat trouvé</h3>
              <p className="text-muted-foreground mb-6">
                Essayez d'ajuster vos critères de recherche
              </p>
              <Button
                variant="outline"
                onClick={() => setFilters({ type: "all", location: "", budget: "", rating: "all" })}
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
