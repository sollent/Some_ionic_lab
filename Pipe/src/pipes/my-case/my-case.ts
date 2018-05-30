import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCasePipe',
  pure:false
})
export class MyCasePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, register?: string) {
    if (register=='upper') {
      for (let i = 0; i < value.length; i++) {
        value[i] = value[i].toUpperCase();
      }
    }
    else
      {
        for (let i = 0; i < value.length; i++) {
          value[i] = value[i].toLowerCase();
        }
      }
      return value;
    }
}
