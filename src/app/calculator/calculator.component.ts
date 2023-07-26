import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  val1:number = 0;
  val2:number = 0;
  res:number = 0;

  somme(){
    this.res = this.val1 + this.val2;
  }
  onUpdateVal1(event:Event){
    this.val1 = parseFloat((<HTMLInputElement>event.target).value);
    this.somme();
  }
  onUpdateVal2(event:Event){
    this.val2 = parseFloat((<HTMLInputElement>event.target).value);
    this.somme();
  }
}
