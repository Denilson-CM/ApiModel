import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rickandmortyFilter'
})
export class RickandmortyPipe implements PipeTransform {

  transform(value?: Array<any>, query?: string): any {
    let val = value;
    if(query !== undefined && query.trim().length > 0){
      val = value?.filter(x => x.name.includes(query.charAt(0).toUpperCase() + query.slice(1)));
    }
    // else{
    //   console.log("no se encontro");
    // }
    return val;
  }

}
