import {
  Component,
  inject,
  computed,
  input,
  EventEmitter,
  signal,
  Output,
} from '@angular/core';
import { CalculationService } from '../../calculation.service';

@Component({
  selector: 'app-result',
  standalone: false,
  templateUrl: './result.component.html',
  styleUrl: './result.component.css',
})
export class ResultComponent {
  calculationService = inject(CalculationService);
  @Output() close = new EventEmitter();
  isClose: boolean = false;

  enteredAmount = input.required<number | null>();
  selectedCurrency = input.required<string>();

  convertedAmount = this.calculationService.result;
  isShow = computed(() => this.convertedAmount() !== null);

  onClose() {
    this.close.emit(this.isClose);
  }
}
