import { useParams, useNavigate } from "react-router-dom";
import { Star, MapPin, Euro, Calendar, Award, Share2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { professionals } from "@/data/professionals";
import { toast } from "sonner";

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const professional = professionals.find((p) => p.id === parseInt(id || ""));

  if (!professional) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Professionnel non trouvé</h2>
            <Button onClick={() => navigate("/search")}>Retour à la recherche</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBook = () => {
    toast.success("Demande de réservation envoyée !");
  };

  const handleShare = () => {
    toast.success("Lien copié dans le presse-papier !");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="container max-w-5xl">
          {/* Hero Section */}
          <div className="mb-8 animate-fade-in">
            <Button variant="ghost" onClick={() => navigate("/search")} className="mb-4">
              ← Retour à la recherche
            </Button>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Image */}
              <div className="md:col-span-1">
                <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="md:col-span-2 space-y-4">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">{professional.name}</h1>
                      <Badge variant="secondary" className="text-sm">
                        {professional.type}
                      </Badge>
                    </div>
                    <Button variant="outline" size="icon" onClick={handleShare}>
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-foreground">{professional.rating}</span>
                      <span>({professional.reviews} avis)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-5 w-5" />
                      <span>{professional.location}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-2xl font-bold text-primary">
                    <Euro className="h-6 w-6" />
                    <span>{professional.price}€/heure</span>
                  </div>

                  <p className="text-muted-foreground">{professional.bio}</p>
                </div>

                <div className="flex gap-3">
                  <Button size="lg" className="flex-1" onClick={handleBook}>
                    <Calendar className="mr-2 h-5 w-5" />
                    Réserver une séance
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1" onClick={handleShare}>
                    <Share2 className="mr-2 h-5 w-5" />
                    Partager avec un ami
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  💡 Partagez cette séance avec un ami : le coût sera divisé entre vous deux,
                  et votre coach gagnera plus !
                </p>
              </div>
            </div>
          </div>

          {/* Details Cards */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            {/* Diplomas */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-lg">Diplômes et certifications</h3>
                </div>
                <p className="text-muted-foreground">{professional.diplomas}</p>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-lg">Disponibilités</h3>
                </div>
                <p className="text-muted-foreground">{professional.availability}</p>
              </CardContent>
            </Card>
          </div>

          {/* Reviews Section */}
          <Card className="mt-6 animate-fade-in">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Avis des clients</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">Marie L.</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Excellent professionnel ! Très à l'écoute et les résultats sont au rendez-vous.
                  </p>
                </div>
                <Separator />
                <div className="border-l-4 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">Thomas B.</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Je recommande vivement ! Approche professionnelle et bienveillante.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
