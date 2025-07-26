import { Component, signal, inject, output } from '@angular/core';

import { CalculationService } from '../calculation.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredAmount = '';
  selectedCurrency = '';

  visibility = signal<boolean>(true);

  amount = signal<number | null>(null);
  currency = signal<string>('');

  private calculationService = inject(CalculationService);

  setCurrency(currency: string) {
    this.selectedCurrency = currency;
  }

  onKeydownEnter() {
    if (this.enteredAmount && this.selectedCurrency) {
      this.calculationService.convertCurrency(
        parseFloat(this.enteredAmount),
        this.selectedCurrency
      );
      this.amount.set(parseFloat(this.enteredAmount));
      this.currency.set(this.selectedCurrency);

      this.visibility.set(true);
    } else {
      console.warn('Please select a currency and enter an amount');
    }
  }

  onCloseForm(isVisible: boolean) {
    this.visibility.set(isVisible);
  }
}
