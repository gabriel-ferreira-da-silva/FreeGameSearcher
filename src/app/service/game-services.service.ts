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
  url:string =  "http://localhost:4123/";
  
  getAllGames(){
    const req = this.http.get<Game[]>(this.url+"games");
    
    return req;
  }

  getGame(gameid:number){
    const req= this.http.get<GameLong>(this.url+"game/516");
    console.log("morra demonio")
    req.subscribe(data =>{
      console.log("morra demonion");
      console.log(data);
    })
    return req;
  }

}
