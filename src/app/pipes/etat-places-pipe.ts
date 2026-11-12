import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'etatPlaces',
})
export class EtatPlacesPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
