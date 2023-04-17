import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {
  transform(sizeInBytes: number): string {
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
    const i = Math.floor(Math.log(sizeInBytes) / Math.log(1024));
    const size = sizeInBytes / Math.pow(1024, i);
    if (Number.isInteger(size)) {
      return `${size} ${sizes[i]}`;
    } else {
      return `${size.toFixed(1)} ${sizes[i]}`;
    }
  }
}

/* W tablicy sizes definiujemy nazwy jednostek, które będziemy używać: bajty, kilobajty, megabajty itd.

Zmienna i oblicza indeks w tablicy sizes, który odpowiada najbliższej jednostce wielkości pliku. Używamy funkcji Math.floor() do zaokrąglania wyniku w dół.

Zmienna size oblicza wartość pliku w wybranej jednostce. Dzielimy rozmiar pliku przez Math.pow(1024, i), aby przeliczyć go na wybraną jednostkę. Na przykład, gdy i wynosi 2 (co odpowiada megabajtom), dzielimy rozmiar pliku przez 1024^2, aby przeliczyć go na megabajty.

Warunek if (Number.isInteger(size)) sprawdza, czy wartość pliku jest liczbą całkowitą. Jeśli tak, zwracamy wartość bez zer po przecinku, używając szablonu łańcuchów znaków. W przeciwnym razie zwracamy wartość z jednym miejscem po przecinku, zaokrąglając wynik przy użyciu metody toFixed(1).

Dzięki tym zmianom, teraz FileSizePipe zwróci wynik bez zera po przecinku, kiedy wartość pliku jest liczbą całkowitą, a z jednym miejscem po przecinku w innym przypadku. */