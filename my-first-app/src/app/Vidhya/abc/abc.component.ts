import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {
  
      name:string
      age:number
      email:string
      address:Address
      hobbies:String[]


      constructor(){
        this.name="vidhya"
        this.age=22
        this.email="vidhyemail"
        this.address={
          city:"bang",
          state:"ka"
        }
        this.hobbies=["writing","eating","seeing"]

      }
      
      ngOnInit(): void {
          console.log("ngOnInit")   
      }
      onClick(){
        this.hobbies.push("calling")
        this.name="MALLIKA"
      }

      onAdd(hobby){
        this.hobbies.unshift(hobby)
        return false
      }
      onDelete(hobby){
          for(let i=this.hobbies.length;i>=0;i--){
            console.log(this.hobbies.length)
            if(this.hobbies[i]==hobby){
              this.hobbies.splice(i,1)
              
            }
              
          }
      }
}
interface Address{
  city:string
  state:string
}