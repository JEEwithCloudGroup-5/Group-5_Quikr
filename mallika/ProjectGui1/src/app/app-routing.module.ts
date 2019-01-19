import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {BodyComponent} from './body/body.component';
import {ProductComponent} from './product/product.component';

const routes: Routes = [
  {
    path:"reg",
    component:RegistrationComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"body",
    component:BodyComponent
  },
  {
    path:"product",
    component:ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
