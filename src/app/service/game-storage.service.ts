import { Injectable } from '@angular/core';
import { Game } from '../../game';
@Injectable({
  providedIn: 'root'
})
export class GameStorageService {
  private storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }

  set( games: any){
    if(this.storage){
      this.storage.setItem("games", JSON.stringify(games));
      return true;
    }
    return false;
  }
  
  get(){
    if(this.storage){
      const r = this.storage.getItem("games");
      return JSON.parse(r? r: "[]");

    }
    return [];
  }

  clear(){
    this.storage.clear();
  }
  
}
