import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  submitted = false;
  constructor(private userService: UserService) { }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }
 

  ngOnInit() {
  }

  save() {
    console.log("save");
    
    this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }
 
  onSubmit(){
    console.log("onsubmit")
    this.submitted = true;
    this.save();
    console.log("onsubmit1")
    console.log(this.submitted)
  }

}
