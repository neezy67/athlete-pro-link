import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, TrendingUp, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
        <div className="container relative animate-fade-in-up">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <Dumbbell className="h-5 w-5" />
              <span className="text-sm font-medium">Plateforme #1 en France</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              CoachLink+
            </h1>
            
            <p className="mb-4 text-xl md:text-2xl font-medium">
              Le sport commence ici.
            </p>
            
            <p className="mb-12 text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Connectez-vous avec les meilleurs coachs, kinés et préparateurs physiques. 
              Une seule plateforme pour t'entraîner, te soigner et progresser.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg h-14 px-8 shadow-lg hover:shadow-xl transition-all"
              >
                <Link to="/auth?type=sportif">
                  👟 Je suis un sportif
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg h-14 px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm"
              >
                <Link to="/auth?type=pro">
                  👨‍🏫 Je suis un coach / kiné
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <Link
              to="/search"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors underline underline-offset-4"
            >
              Découvrir sans compte
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-center text-3xl font-bold mb-12 animate-fade-in">
            Pourquoi choisir CoachLink+ ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-muted/50 transition-colors animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professionnels Vérifiés</h3>
              <p className="text-muted-foreground">
                Tous nos coachs sont certifiés et expérimentés pour garantir votre sécurité et vos progrès.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:bg-muted/50 transition-colors animate-fade-in [animation-delay:200ms]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Objectifs Personnalisés</h3>
              <p className="text-muted-foreground">
                Des programmes adaptés à vos besoins spécifiques pour atteindre vos objectifs rapidement.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:bg-muted/50 transition-colors animate-fade-in [animation-delay:400ms]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Suivi en Temps Réel</h3>
              <p className="text-muted-foreground">
                Suivez votre progression et communiquez facilement avec votre coach via votre espace personnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à commencer votre transformation ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers de sportifs qui ont déjà trouvé leur coach idéal sur CoachLink+
          </p>
          <Button asChild size="lg" className="h-12 px-8">
            <Link to="/search">
              Explorer les professionnels
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
