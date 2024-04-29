import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Game} from '../../game'
import {GameLong} from '../../gamelong';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameServicesService {

  constructor(private http: HttpClient) { 
  }
  url:string =  "http://localhost:4123/games";
  
  getAllGames(){
    const req = this.http.get<Game[]>(this.url);
    req.subscribe(data =>{
      console.log(data);
    })
    return req;
  }

  getGame(id:string){
    return this.http.get<Game[]>(this.url+'/'+id);;
  }

}
