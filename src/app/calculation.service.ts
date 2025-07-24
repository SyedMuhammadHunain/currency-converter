import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  result = signal<number | null>(null);

  convertCurrency(enteredAmount: number, currency: string) {
    let converted: number;
    if (currency === 'usd') {
      converted = enteredAmount * 300;
    } else if (currency === 'euro') {
      converted = enteredAmount * 305;
    } else {
      converted = 0;
    }
    this.result.set(converted);
  }
}
