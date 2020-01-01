import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
} )
export class HomeViewComponent implements OnInit {
  currentCalculation = '';
  currentCalculationArray = [];
  outputToDisplay;

  constructor() { }

  ngOnInit() {
  }

  appendToList( val ) {
    console.log( val );

    this.currentCalculationArray.push( val );
    this.concatOperation();
  }

  concatOperation() {
    this.currentCalculation = null;
    for ( const item of this.currentCalculationArray ) {
      if ( this.currentCalculation ) {
        this.currentCalculation = this.currentCalculation + item.toString();
      } else {
        this.currentCalculation = item;
      }
    }
  }

  clearOutput() {
    this.currentCalculationArray = [];
    this.concatOperation();
  }

  removeOne() {
    this.currentCalculationArray = this.currentCalculationArray.slice( 0, this.currentCalculationArray.length - 1 );
    this.concatOperation();
  }


  calculate() {
    let processingArray = this.currentCalculationArray;
    processingArray = [...this.mergeToWholeNumbers( processingArray )];
    const testArray = this.multiplyOrDivide( processingArray );
    console.log( 'test array', testArray );
    let lastOperator: string;
    const finalOutcome = testArray.reduce( ( prev, cur ) => {
      if ( typeof cur === 'string' ) {
        lastOperator = cur;
        return prev;
      }
      return lastOperator === '+' ? prev + cur : prev - cur;
    } );
    console.log( 'final outcome', finalOutcome );
    this.outputToDisplay = isNaN( finalOutcome ) ? 'NOT A NUMBER' : finalOutcome;

  }



  multiplyOrDivide( array: any[] ): any[] {
    const foundIndexPosition = array.findIndex( item => item === '*' || item === '/' );
    let tempArray = [...array];
    if ( foundIndexPosition >= 0 ) {
      let calNum;
      if ( array[foundIndexPosition] === '*' ) {
        calNum = array[foundIndexPosition - 1] * array[foundIndexPosition + 1];
      } else {
        calNum = array[foundIndexPosition - 1] / array[foundIndexPosition + 1];
      }
      const before = tempArray.slice( 0, foundIndexPosition - 1 );
      const after = tempArray.slice( foundIndexPosition + 2 );
      let appendingArrays = [];
      appendingArrays = [...before, calNum, ...after];
      tempArray = [...this.multiplyOrDivide( appendingArrays )];
    }

    return tempArray;
  }


  mergeToWholeNumbers( array: any[] ): any[] {
    let tempNumber: string;
    const tempArray = [];
    array.forEach( ( item, index ) => {

      if ( typeof item !== 'string' ) {
        tempNumber = tempNumber ? tempNumber + item.toString() : item.toString();
      } else {
        tempArray.push( parseInt( tempNumber, 10 ) );
        tempArray.push( item );
        tempNumber = null;
      }

      if ( index === array.length - 1 ) {
        console.log( 'last item', item );
        tempArray.push( parseInt( tempNumber, 10 ) );
      }

    } );
    console.log( tempArray );
    return tempArray;
  }


}
