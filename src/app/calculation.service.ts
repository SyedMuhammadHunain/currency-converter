import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  result = signal<number | null>(null);

  convertCurrency(enteredAmount: number, currency: string) {
    let converted: number;
    if (currency === 'USD') {
      converted = enteredAmount * 278.50; // More realistic PKR rate
    } else if (currency === 'EUR') {
      converted = enteredAmount * 302.75; // More realistic PKR rate
    } else {
      converted = 0;
    }
    this.result.set(converted);
  }
}
