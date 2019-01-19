import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  firstName:string;
  lastName:string;
  gender:string;
  qualification:string;


  constructor() { }

  ngOnInit() {
    this.firstName="mallika";
    this.lastName="kamma";
    this.gender="F"
    this.qualification="b.tech"
  }
  onClick(): void {  
            console.log('you clicked me!!');  
            
	    }  
    
}
