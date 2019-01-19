import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string
  age:number
  constructor(){
    this.name="mallika"
    this.age=34
  }
}
