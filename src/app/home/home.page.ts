import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public items:Array<any>=[
    "ideia tem acento?",
    "bem vindo tem hifen?",
    "bau tem acento?",
    "jiboia tem acento?",
    "Aurelio tem acento?"
  ]

  constructor() {}

  reordenarItems(indexes:any):void {
    let element =this.items[indexes.from];
    this.items.splice(indexes.from,1);
    this.items.splice(indexes.to,0,element)
  }
 btn(id:any):void {
  alert("Você respondeu:" + id)
}

}


