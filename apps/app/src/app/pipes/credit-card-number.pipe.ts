import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'creditCardNumber' })
export class CreditCardNumberPipe implements PipeTransform {
  transform(value: string): string {
    if (typeof value !== 'string') {
      throw new Error('Incorrect input type. It must be a string.');
    }
     const cleanNumber = value.replace(/[^\d]/g,'');

     if (cleanNumber.length !== 16) {
      throw new Error (`Invalid card number string: ${value}`)
     }
     const formattedNumber = cleanNumber.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4')
     return formattedNumber
  }
}
/* /[^\d]/g to wyrażenie regularne, które oznacza, że chcemy znaleźć wszystkie znaki, które nie są cyframi (oznaczone przez symbol \d).
 Jest to wykorzystywane w cleanNumber, aby usunąć z tekstu wszystkie znaki, które nie są cyframi.

'' to pusty ciąg znaków, który jest przekazywany jako drugi argument do metody replace(), aby usunąć wszystkie znalezione znaki.

/(\d{4})(\d{4})(\d{4})(\d{4})/ to wyrażenie regularne, które oznacza, że chcemy znaleźć cztery grupy po cztery cyfry.
 Symbol () oznacza grupę, a \d{4} oznacza, że chcemy znaleźć dokładnie cztery cyfry.

'$1 $2 $3 $4' to drugi argument przekazywany do metody replace(). $1, $2, $3 i $4 oznaczają kolejne znalezione grupy z wyrażenia regularnego 
(w tym przypadku cztery czterocyfrowe grupy), a spacje między nimi to ciągi znaków, które zostaną wstawione między każdą grupą. Dzięki temu, gdy metoda replace() 
jest wywoływana z wyrażeniem regularnym /(\d{4})(\d{4})(\d{4})(\d{4})/ i drugim argumentem '$1 $2 $3 $4', 
wynikowy ciąg znaków będzie składał się z czterech czterocyfrowych grup, rozdzielonych spacjami. Na przykład,
 1234567890123456 zostanie przetworzone na 1234 5678 9012 3456. */