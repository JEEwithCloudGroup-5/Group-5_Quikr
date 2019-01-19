import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
	import { FormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { AddtwonumbersComponent } from './addtwonumbers/addtwonumbers.component';
import { NgifComponent } from './ngif/ngif.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgforComponent } from './ngfor/ngfor.component';
import { MovieSearchPipe } from './movie-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AddtwonumbersComponent,
    NgifComponent,
    NgforComponent,
    MovieSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
