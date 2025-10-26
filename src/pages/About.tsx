import { Heart, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 py-20">
          <div className="container text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À Propos de CoachLink+
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Notre mission est de rendre le sport accessible à tous en connectant 
              les athlètes avec les meilleurs professionnels de santé et de préparation physique.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Notre Vision</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                <strong className="text-foreground">CoachLink+ connecte les athlètes avec les meilleurs coachs, 
                kinés et préparateurs physiques.</strong> Une seule plateforme pour t'entraîner, 
                te soigner et progresser. <strong className="text-foreground">Simple. Humain. Intelligent.</strong>
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center animate-fade-in">
                <CardContent className="pt-8 pb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <Heart className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Humain</h3>
                  <p className="text-muted-foreground">
                    Des relations authentiques entre professionnels et sportifs, 
                    basées sur la confiance et le respect mutuel.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center animate-fade-in [animation-delay:100ms]">
                <CardContent className="pt-8 pb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-4">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Simple</h3>
                  <p className="text-muted-foreground">
                    Une plateforme intuitive qui simplifie la recherche, 
                    la réservation et le suivi de vos séances sportives.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center animate-fade-in [animation-delay:200ms]">
                <CardContent className="pt-8 pb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Intelligent</h3>
                  <p className="text-muted-foreground">
                    Des fonctionnalités innovantes comme le partage de séances 
                    pour optimiser les coûts et la disponibilité.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8 text-center animate-fade-in">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Professionnels certifiés</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10k+</div>
                <p className="text-muted-foreground">Sportifs actifs</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50k+</div>
                <p className="text-muted-foreground">Séances réalisées</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
                <p className="text-muted-foreground">Satisfaction moyenne</p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container max-w-4xl">
            <div className="prose prose-lg mx-auto animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 text-center">Notre Histoire</h2>
              <p className="text-muted-foreground leading-relaxed">
                CoachLink+ est né d'un constat simple : trouver le bon professionnel du sport 
                et de la santé est souvent compliqué, chronophage et coûteux. En 2023, 
                notre équipe de passionnés de sport et de technologie a décidé de créer 
                une solution pour simplifier cette recherche.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Aujourd'hui, CoachLink+ rassemble des centaines de professionnels certifiés 
                et des milliers de sportifs qui partagent la même passion : progresser, 
                se surpasser et atteindre leurs objectifs dans un cadre bienveillant et professionnel.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
