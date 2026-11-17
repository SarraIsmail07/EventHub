import { Evenement } from '../modeles/evenement';

export const EVENEMENTS_INITIAUX: Evenement[] = [
  {
    id: 1,
    titre: 'Atelier Angular 22',
    description: 'Découvrez les bases du développement web avec Angular 22.',
    categorie: 'atelier',
    club: 'Club Informatique',
    date: new Date('2026-12-15T14:00:00'),
    lieu: 'Salle B12',
    capacite: 20,
    placesReservees: 8,
    gratuit: true,
    image: '/evenement/atelier-angular.jpg'
  },
  {
    id: 2,
    titre: 'Conférence Intelligence Artificielle',
    description: 'Une conférence sur les applications de l’intelligence artificielle.',
    categorie: 'conference',
    club: 'Club IA',
    date: new Date('2026-12-18T10:00:00'),
    lieu: 'Amphithéâtre A',
    capacite: 100,
    placesReservees: 65,
    gratuit: true,
    image: '/evenement/conference-ia.jpg'
  },
  {
    id: 3,
    titre: 'Tournoi Gaming',
    description: 'Une compétition de jeux vidéo entre étudiants.',
    categorie: 'competition',
    club: 'Club Gaming',
    date: new Date('2026-12-20T13:00:00'),
    lieu: 'Salle multimédia',
    capacite: 32,
    placesReservees: 32,
    gratuit: false,
    image: '/evenement/tournoi-gaming.jpg'
  },
  {
    id: 4,
    titre: 'Sortie Culturelle à Dougga',
    description: 'Découvrez le patrimoine historique de Dougga.',
    categorie: 'sortie',
    club: 'Club Culture',
    date: new Date('2026-12-22T08:00:00'),
    lieu: 'Dougga',
    capacite: 40,
    placesReservees: 39,
    gratuit: false,
    image: '/evenement/sortie-culturelle.jpg'
  },
  {
    id: 5,
    titre: 'Atelier Robotique',
    description: 'Initiation à la programmation et à la conception de robots.',
    categorie: 'atelier',
    club: 'Club Robotique',
    date: new Date('2026-12-24T14:00:00'),
    lieu: 'Laboratoire Robotique',
    capacite: 25,
    placesReservees: 10,
    gratuit: true,
    image: '/evenement/atelier-robotique.jpg'
  },
  {
    id: 6,
    titre: 'Conférence Entrepreneuriat',
    description: 'Comment transformer une idée en projet entrepreneurial.',
    categorie: 'conference',
    club: 'Club Entrepreneuriat',
    date: new Date('2026-12-26T11:00:00'),
    lieu: 'Amphithéâtre B',
    capacite: 80,
    placesReservees: 45,
    gratuit: true,
    image: '/evenement/conference-entrepreneuriat.jpg'
  },
  {
    id: 7,
    titre: 'Tournoi Football',
    description: 'Une compétition sportive entre les équipes étudiantes.',
    categorie: 'competition',
    club: 'Club Sport',
    date: new Date('2026-12-27T09:00:00'),
    lieu: 'Terrain de sport',
    capacite: 50,
    placesReservees: 20,
    gratuit: true,
    image: '/evenement/tournoi-football.jpg'
  },
  {
    id: 8,
    titre: 'Atelier Développement Web',
    description: 'Un atelier pratique pour apprendre HTML, CSS et JavaScript.',
    categorie: 'atelier',
    club: 'Club Informatique',
    date: new Date('2026-10-20T14:00:00'),
    lieu: 'Salle B15',
    capacite: 30,
    placesReservees: 18,
    gratuit: true,
    image: '/evenement/atelier-web.jpg'
  }
];
