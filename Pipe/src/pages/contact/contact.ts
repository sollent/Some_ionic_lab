import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  data:any;
  comment: any;
  constructor(public navCtrl: NavController, public http: Http) {
    this.loadData();
  }

  loadData(){
    this.http.get("http://timetable.sbmt.by/android/test/test3.json")
      .map(res=>res.json())
      .subscribe(
        Array => {
          this.data = Array.dishes;
          console.log(this.data);
        }
      );
  }

}
