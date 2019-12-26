import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
} )
export class HomeViewComponent implements OnInit {
  currentCalculation: string;

  constructor() { }

  ngOnInit() {
  }

  concatOperation( val ) {
    if ( this.currentCalculation ) {
      this.currentCalculation = this.currentCalculation + val;
    } else {
      this.currentCalculation = val;
    }
  }

}
