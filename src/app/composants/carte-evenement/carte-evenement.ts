import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Evenement } from '../../modeles/evenement';
import { BadgeCategorie } from '../badge-categorie/badge-categorie';

@Component({
  imports: [DatePipe, RouterLink, BadgeCategorie],
  selector: 'app-carte-evenement',
  styleUrl: './carte-evenement.css',
  templateUrl: './carte-evenement.html',
})
export class CarteEvenement {
    evenement = input.required<Evenement>();
    ajoutFavori = output<number>();
    readonly aujourdHui = new Date();
}
