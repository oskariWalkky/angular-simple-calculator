import { Component, Input } from '@angular/core';

@Component( {
  selector: 'app-display-output',
  templateUrl: './display-output.component.html',
  styleUrls: ['./display-output.component.scss']
} )
export class DisplayOutputComponent {
  @Input() currentCalculation: string;
  @Input() outPut: string;

  constructor() { }

}
