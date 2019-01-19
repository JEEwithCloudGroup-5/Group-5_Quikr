import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  showdiv:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  ngiFF(){
    this.showdiv=!this.showdiv;
  }
}
