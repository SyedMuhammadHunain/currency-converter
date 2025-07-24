import { CommonModule } from '@angular/common';

import { Component, inject, computed, input } from '@angular/core';
import { CalculationService } from '../../calculation.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css',
})
export class ResultComponent {
  calculationService = inject(CalculationService);

  enteredAmount = input.required<number | null>();
  selectedCurrency = input.required<string>();

  convertedAmount = this.calculationService.result;
  isShow = computed(() => this.convertedAmount() !== null);
}
