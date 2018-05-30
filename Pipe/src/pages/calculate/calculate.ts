import { Component } from '@angular/core';
import {NavController} from "ionic-angular";


@Component({
  selector: 'calculate-page',
  templateUrl: 'calculate.html'
})

export class CalculatePage {

  // result = '';
  // btnClicked(btn) {
  //   if (btn == 'C') {
  //     this.result = '';
  //   }
  //   else if (btn == '=') {
  //     this.result = eval(this.result);
  //   }
  //   else {
  //     this.result += btn;
  //   }
  // }
  constructor(public navCtrl: NavController) {

  }
}
