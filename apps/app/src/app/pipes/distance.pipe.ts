import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {
  transform(value: string | number): string {
    const distance = typeof value === 'string' ? parseFloat(value) : value;
    if (distance < 750) {
      return distance.toLocaleString('en-US', { maximumFractionDigits: 0 }) + ' m';
    } else {
      const distanceInKm = distance / 1000;
      const formattedDistanceInKm = distanceInKm.toLocaleString('en-US', { maximumFractionDigits: 2 });
      return formattedDistanceInKm + ' km';
    }
  }
}

/* parseFloat() to funkcja wbudowana w JavaScript, 
która zamienia podany argument na liczbę zmiennoprzecinkową (typ float). 
Funkcja ta interpretuje argument jako łańcuch znaków i zwraca liczbę, którą reprezentuje.
Jeśli podany łańcuch znaków nie może zostać zinterpretowany jako liczba, to funkcja parseFloat() zwróci wartość NaN (Not a Number).

ToLocaleString z opcją maximumFractionDigits, funkcja która pozwala na ustawienie maksymalnej 
liczby miejsc po przecinku. W przypadku dystansu poniżej 750 metrów, 
formatuję liczbę bez miejsc po przecinku, a w przypadku dystansu powyżej 750 metrów formatuję liczbę z maksymalnie dwoma miejscami po przecinku

Lokalizacja jest ustawiona na en-Us bo zawsze zwraca separator "." zamiast ","
*/