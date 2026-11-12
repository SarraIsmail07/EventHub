import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'triEvenements',
})
export class TriEvenementsPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
