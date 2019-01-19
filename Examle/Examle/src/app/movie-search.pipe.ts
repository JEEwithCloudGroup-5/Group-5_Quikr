import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieSearch'
})
export class MovieSearchPipe implements PipeTransform {

  transform(moviesList: any, searchText: string): any {
    
    if(searchText){
    /*   return moviesList.filter(x=>{x.movieName.}) */
      return moviesList.filter(x => x.movieName.toLowerCase().startsWith(searchText.toLowerCase())); 
    }
    
    return moviesList;
  }

}

/* if (searchText)  
    return studentList.filter(x => x.Name.toLowerCase().startsWith(searchText.toLowerCase());  
15.	              
16.	        return studentList;  
 */
