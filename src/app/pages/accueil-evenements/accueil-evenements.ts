import { Component, inject, signal, computed } from '@angular/core';
import { Evenements } from '../../services/evenements';
import { CarteEvenement } from '../../composants/carte-evenement/carte-evenement';

@Component({
  imports: [CarteEvenement],
  selector: 'app-accueil-evenements',
  styleUrl: './accueil-evenements.css',
  templateUrl: './accueil-evenements.html',
})
export class AccueilEvenements {
  readonly serviceEvenements = inject(Evenements);
  readonly favoris = signal<number[]> ([]);

  readonly nombreFavoris = computed(() =>
    this.favoris().length
  );

  basculerFavori(id: number): void {
    this.favoris.update(liste =>
      liste.includes(id) ? liste.filter(f => f !== id) : [...liste, id]
    );
  }

}
