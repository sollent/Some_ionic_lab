import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MaddPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'mada',
})
export class MadaPipe implements PipeTransform {
  transform(value , args) {

    let wordCount = value.split(" ").length;
    let newValue = "";

    for (let i = 0; i < wordCount; i++) {
      newValue += "World\n";
    }
    return newValue;
  }
}

