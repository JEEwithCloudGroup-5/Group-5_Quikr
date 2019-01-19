import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtwonumbers',
  templateUrl: './addtwonumbers.component.html',
  styleUrls: ['./addtwonumbers.component.css']
})
export class AddtwonumbersComponent implements OnInit {
number1:number;
number2:number;
ans:number=0;
  constructor() { }

  ngOnInit() {
  }
add(){
  this.ans=this.number1+this.number2;
}
sub(){
  this.ans=this.number1-this.number2;
}
mul(){
  this.ans=this.number1*this.number2;
}
div(){
  this.ans=this.number1/this.number2;
}
}
