import { Star, MapPin, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ProfessionalCardProps {
  id: number;
  name: string;
  type: string;
  bio: string;
  rating: number;
  reviews: number;
  price: number;
  location: string;
  image: string;
}

const ProfessionalCard = ({
  id,
  name,
  type,
  bio,
  rating,
  reviews,
  price,
  location,
  image,
}: ProfessionalCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <Badge variant="secondary" className="mt-1">
              {type}
            </Badge>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
            <span className="text-muted-foreground">({reviews})</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{bio}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-foreground">
            <Euro className="h-4 w-4" />
            <span>{price}/h</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link to={`/profile/${id}`}>Voir le profil</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfessionalCard;
