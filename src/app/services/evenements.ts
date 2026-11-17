import { Service, signal } from '@angular/core';
import { Evenement } from '../modeles/evenement';
import { EVENEMENTS_INITIAUX } from '../donnees/evenements';

@Service()
export class Evenements {
  private evenementsSignal = signal<Evenement[]> ([...EVENEMENTS_INITIAUX]);
  readonly evenements = this.evenementsSignal.asReadonly();

  obtenirTous(): Evenement[] {
    return this.evenements();
  }

  obtenirParId(id: number): Evenement | undefined {
    return this.evenements().find(e => e.id === id);
  }

}
