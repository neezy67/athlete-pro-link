export interface Professional {
  id: number;
  name: string;
  type: "Coach" | "Kinésithérapeute" | "Préparateur Physique";
  bio: string;
  diplomas: string;
  rating: number;
  reviews: number;
  price: number;
  availability: string;
  location: string;
  image: string;
}

export const professionals: Professional[] = [
  {
    id: 1,
    name: "Jean Dupont",
    type: "Coach",
    bio: "Expert en musculation et préparation physique. 10 ans d'expérience dans l'accompagnement d'athlètes de haut niveau.",
    diplomas: "Licence STAPS, Certificat de Préparateur Physique",
    rating: 4.8,
    reviews: 25,
    price: 50,
    availability: "Lundi 10h, Mercredi 14h, Vendredi 16h",
    location: "Paris",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Marie Leroy",
    type: "Kinésithérapeute",
    bio: "Spécialiste en rééducation sportive. Aide les athlètes à récupérer rapidement après blessure.",
    diplomas: "Master en Kinésithérapie, Formation en Sport",
    rating: 4.6,
    reviews: 18,
    price: 60,
    availability: "Mardi 9h, Jeudi 16h, Samedi 10h",
    location: "Lyon",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Pierre Martin",
    type: "Préparateur Physique",
    bio: "Préparation mentale et physique pour compétitions. Travaille avec des pros du football et du rugby.",
    diplomas: "Diplôme de Préparateur Physique, Coach Mental",
    rating: 4.9,
    reviews: 32,
    price: 70,
    availability: "Vendredi 11h, Samedi 15h, Dimanche 9h",
    location: "Marseille",
    image: "https://images.unsplash.com/photo-1567598508481-65985588e295?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Sophie Bernard",
    type: "Coach",
    bio: "Coach sportif spécialisée en fitness et perte de poids. Approche bienveillante et motivante.",
    diplomas: "BP JEPS, Nutrition Sportive",
    rating: 4.7,
    reviews: 21,
    price: 45,
    availability: "Lundi 14h, Mercredi 18h, Vendredi 10h",
    location: "Toulouse",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Thomas Dubois",
    type: "Kinésithérapeute",
    bio: "Expert en thérapie manuelle et rééducation fonctionnelle. 15 ans d'expérience.",
    diplomas: "DE Kiné, DU Thérapie Manuelle",
    rating: 4.9,
    reviews: 28,
    price: 65,
    availability: "Lundi 9h, Mercredi 15h, Jeudi 11h",
    location: "Nice",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Léa Rousseau",
    type: "Préparateur Physique",
    bio: "Préparation athlétique pour sports collectifs et individuels. Spécialiste de l'explosivité.",
    diplomas: "Master STAPS Préparation Physique",
    rating: 4.8,
    reviews: 19,
    price: 55,
    availability: "Mardi 10h, Jeudi 14h, Samedi 9h",
    location: "Bordeaux",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
  },
];
