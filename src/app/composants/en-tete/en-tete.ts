import { Component, inject, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Session } from '../../services/session';
import { Reservations } from '../../services/reservations';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-en-tete',
  templateUrl: './en-tete.html',
  styleUrl: './en-tete.css'
})

export class EnTete {
  readonly session = inject(Session);
  private readonly reservationsService = inject(Reservations);
  readonly nombreReservations = computed(() => {
    const email = this.session.utilisateur()?.email;

    if (!email) {
      return 0;
    }

    return this.reservationsService.reservations().filter(r => r.email === email).length;
  });

  deconnecter(): void {
    this.session.deconnecter();
  }
}
