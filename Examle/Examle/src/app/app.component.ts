import { Component } from '@angular/core';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 

/* 
	@Component({  
	  
  	    selector: 'app-root',  
	    template: `  
	                <div>  
	                <h1>{{title}}Mallika</h1>  
  	                </div>  
  	                  
  	  
                     <app-student></app-student> 
                  ` 
  	  
  	})  */ 
  
export class AppComponent {
  title = 'Examle';
}
