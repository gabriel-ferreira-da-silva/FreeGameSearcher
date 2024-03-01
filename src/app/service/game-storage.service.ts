import { Injectable } from '@angular/core';
import { Game } from '../../game';
@Injectable({
  providedIn: 'root'
})
export class GameStorageService {
  private storage :Storage;
  constructor() {
    this.storage = window.localStorage;
  }

  set(key:string, value: string){
    this.storage.setItem(key,value);
  }

  get(key:string): string{
    const r = this.storage.getItem(key);
    if(r ==null){
      return "";
    }else{
      return r;
    }
  }


}
