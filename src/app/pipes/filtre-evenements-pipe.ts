import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtreEvenements',
})
export class FiltreEvenementsPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
