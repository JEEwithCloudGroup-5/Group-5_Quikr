import { Component, OnInit } from '@angular/core';
import { IEmployee }    from  '../iemployee'
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {


  employess:IEmployee[]=[{
    empId:"164131",
    name:"mallika",
    email:"mallika.kamma@gmail.com",
    phone:9912597821,
    salary:45000,
    appraisalRating:4

  },{
    empId:"164132",
    name:"santhi",
    email:"sanrhi.kamma@gmail.com",
    phone:9912597821,
    salary:67890,
    appraisalRating:9

  }]
  constructor() { }

  ngOnInit() {
  }

}
