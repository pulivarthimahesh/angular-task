import { Directive, HostListener, Input } from '@angular/core';
import { MatInput } from '@angular/material/input';

@Directive({
  selector: '[appAlphabetOnly]'
})
export class AlphabetOnlyDirective {
  @Input() OnlyNumber: boolean;
  constructor(private matInput: MatInput) { }
  key;
  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    this.key = event.keyCode;
    console.log(this.key);
    if ((this.key >= 15 && this.key <= 64) || (this.key >= 123) || (this.key >= 96 && this.key <= 105)) {
      event.preventDefault();
    }
  }
}
