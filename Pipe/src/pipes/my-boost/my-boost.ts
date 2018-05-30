import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MyBoostPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'myBoost'
})
export class MyBoostPipe implements PipeTransform {
  power = 5;
  factor = null;
  transform(value: number, exponent: number): number {
    this.power = value;
    this.factor = exponent;
    let sum=+exponent;
    let sum1=+value;
    return sum+sum1;
  }
}
