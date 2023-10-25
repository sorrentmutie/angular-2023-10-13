import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    const x = changes['localInput'].currentValue as number;
    this.calculatedInput = x * x;
  }
  @Input() localInput: number | undefined;
  calculatedInput = 0;


}
