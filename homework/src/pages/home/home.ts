import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { LoadingController } from "ionic-angular";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private todo: FormGroup;
  items:any[];
  key:string='items';
  url:string='https://my-json-server.typicode.com/arkiseliov/dataExhibition/exhibid';
  Data: any;
  constructor(public navCtrl: NavController,
              private store: Storage, public http: Http, public loadingCtrl: LoadingController, public formBuilder: FormBuilder) {
    this.todo = this.formBuilder.group({
      name: ['']
    });
  }

  save(){
    //Создаем окно загрузки
    let loadingPopup = this.loadingCtrl.create({
      content: ''
    });

    //Показываем окно загрузки
    loadingPopup.present();
    this.store.set("text", this.todo.value.name);
    console.log("Данные успешно сохранены");
    loadingPopup.dismiss();
  }
  getPost(){
    //Создаем окно загрузки
    let loadingPopup = this.loadingCtrl.create({
      content: ''
    });

    //Показываем окно загрузки
    loadingPopup.present();
    this.store.get("text").then((val)=>{
      if(val!=null&&val!=undefined){
        this.Data = val;
        loadingPopup.dismiss();
      } else{
        loadingPopup.dismiss();
        console.log("Нет данных");
      }
    });
  }

  Remove(){
    //Создаем окно загрузки
    let loadingPopup = this.loadingCtrl.create({
      content: ''
    });

    //Показываем окно загрузки
    loadingPopup.present();
    this.store.remove("text");
    console.log("Данные удалены");
    loadingPopup.dismiss();
  }



  getData(){

    //Создаем окно загрузки
    let loadingPopup = this.loadingCtrl.create({
      content: ''
    });

    //Показываем окно загрузки
    loadingPopup.present();

    let data:Observable<any> = this.http.get(this.url);
    data.map(res => res.json()).subscribe(result=>{

      this.items=result;
      loadingPopup.dismiss();
    });
  }

  saveData(){
    //Создаем окно загрузки
    let loadingPopup = this.loadingCtrl.create({
      content: ''
    });

    //Показываем окно загрузки
    loadingPopup.present();
    this.store.set(this.key,JSON.stringify(this.items));
    loadingPopup.dismiss();
  }

  loadData(){
    //Создаем окно загрузки
    let loadingPopup = this.loadingCtrl.create({
      content: ''
    });

    //Показываем окно загрузки
    loadingPopup.present();
    this.store.get(this.key).then((val)=>{
      if(val!=null && val!=undefined){
        this.items = JSON.parse(val);
        loadingPopup.dismiss();
      } else {
        loadingPopup.dismiss();
      }
    });
  }

  deleteData(){


    this.store.remove(this.key).then((val)=>{
      if(val!=null && val!=undefined){
        this.items = null;
      }
    });
  }

}
