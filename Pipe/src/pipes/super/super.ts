import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SuperPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'superPipe',
  pure: false
})
export class SuperPipe implements PipeTransform {
  transform(data:any[],term: string){
    return data.filter((item)=>{
      return (item.toLowerCase().indexOf(term.toLowerCase())==0)
    })
  }
}
