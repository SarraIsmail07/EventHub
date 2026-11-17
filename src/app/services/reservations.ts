import { Service, signal } from '@angular/core';
import { Reservation } from '../modeles/reservation';

@Service()
export class Reservations {
  private reservationsSignal = signal< Reservation[] > ([]);
  readonly reservations = this.reservationsSignal.asReadonly();
}
