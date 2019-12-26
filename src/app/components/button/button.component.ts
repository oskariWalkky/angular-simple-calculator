import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component( {
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
} )
export class ButtonComponent implements OnInit {
  @Input() symbol?: string;
  @Output() outputVale = new EventEmitter();
  test = 'test';

  constructor() { }

  ngOnInit() {
  }

  clicked( val ) {
    this.outputVale.emit( val );
  }
}
