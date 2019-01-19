import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  searchText:string;  
  movies=[{
    movieName:"100%love",
    actor:"nagachaithnya",
    actoress:"thammanna",
    genre:"romantic"

    },
    {  movieName:"jodha akbatr",
    actor:"hrithik",
    actoress:"ishu",
    genre:"romantic"},
    
    {  movieName:"%current thega",
    actor:"vishnu",
    actoress:"rakul",
    genre:"romantis"},
    
    {  movieName:"fidha",
    actor:"varun",
    actoress:"sai",
    genre:"romantis"}]
  constructor() { }

  ngOnInit() {
  }

}
