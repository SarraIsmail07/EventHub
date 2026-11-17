import { Service, signal, computed } from '@angular/core';
import { Utilisateur } from '../modeles/utilisateur';

@Service()
export class Session {
  private utilisateurSignal = signal< Utilisateur | null > (null);
  readonly utilisateur = this.utilisateurSignal.asReadonly();
  readonly estConnecte = computed(() => this.utilisateur() !== null);

  readonly estOrganisateur = computed(() => this.utilisateur()?.role === 'organisateur');

  connecter(email: string, motDePasse: string): boolean {
    if (email === 'etudiant@iset.tn' && motDePasse === 'etudiant123') {
      this.utilisateurSignal.set({
        email: email,
        nom: 'Étudiant',
        role: 'etudiant'
      });
      return true;
    }

    if (email === 'club@iset.tn' && motDePasse === 'club123') {
      this.utilisateurSignal.set({
        email: email,
        nom: 'Organisateur',
        role: 'organisateur'
      });
      return true;
    }

    return false;
  }

  deconnecter(): void { 
    this.utilisateurSignal.set(null);
  }
}
