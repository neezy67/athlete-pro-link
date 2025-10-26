import { Calendar, Heart, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock user type - in real app, this would come from auth context
  const userType = "sportif"; // or "pro"

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">Mon Espace</h1>
            <p className="text-muted-foreground">
              {userType === "sportif" 
                ? "Gérez vos séances et suivez votre progression"
                : "Gérez votre planning et vos clients"}
            </p>
          </div>

          {userType === "sportif" ? (
            // Sportif Dashboard
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Mes séances
                  </CardTitle>
                  <CardDescription>Prochaines séances programmées</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <p className="font-semibold">Jean Dupont - Coach</p>
                      <p className="text-sm text-muted-foreground">Lundi 10:00</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-semibold">Marie Leroy - Kiné</p>
                      <p className="text-sm text-muted-foreground">Mercredi 14:00</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link to="/search">Réserver une nouvelle séance</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="animate-fade-in [animation-delay:100ms]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Favoris
                  </CardTitle>
                  <CardDescription>Vos professionnels préférés</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-muted" />
                      <div>
                        <p className="font-semibold text-sm">Jean Dupont</p>
                        <p className="text-xs text-muted-foreground">Coach</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-muted" />
                      <div>
                        <p className="font-semibold text-sm">Pierre Martin</p>
                        <p className="text-xs text-muted-foreground">Préparateur</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in [animation-delay:200ms]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Ma progression
                  </CardTitle>
                  <CardDescription>Statistiques du mois</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Séances complétées</span>
                        <span className="text-sm font-semibold">8/12</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-2/3" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Objectif mensuel</span>
                        <span className="text-sm font-semibold">67%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-secondary w-2/3" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            // Professional Dashboard
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Planning
                  </CardTitle>
                  <CardDescription>Séances à venir</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <p className="font-semibold">Sophie M.</p>
                      <p className="text-sm text-muted-foreground">Aujourd'hui 14:00</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-semibold">Lucas D.</p>
                      <p className="text-sm text-muted-foreground">Demain 10:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in [animation-delay:100ms]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Mes clients
                  </CardTitle>
                  <CardDescription>Clients actifs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-primary mb-2">24</div>
                  <p className="text-sm text-muted-foreground">+3 ce mois-ci</p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in [animation-delay:200ms]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Revenus
                  </CardTitle>
                  <CardDescription>Ce mois</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-primary mb-2">2,450€</div>
                  <p className="text-sm text-muted-foreground">+15% vs mois dernier</p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Info Card */}
          <Card className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 border-none animate-fade-in">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                💡 Fonctionnalités complètes à venir
              </h3>
              <p className="text-muted-foreground mb-4">
                Pour accéder à toutes les fonctionnalités (authentification, base de données, paiements),
                nous pouvons activer Lovable Cloud qui vous donnera un backend complet sans configuration.
              </p>
              <Button variant="outline">En savoir plus</Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
