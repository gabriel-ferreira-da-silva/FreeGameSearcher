import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Game} from '../../game'
import {GameLong} from '../../gamelong';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameServicesService {

  constructor(private http: HttpClient) { }

  getAllGames():Observable<Game[]>{
    var headers = new HttpHeaders({
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      'x-rapidapi-key': '4d7047e447mshb4eb170f47a3a8ep1f91bejsn6f5328071e08'
    });

    return this.http.get<Game[]>('https://free-to-play-games-database.p.rapidapi.com/api/games', {
        headers: headers
      });
  }

  getGame(id:number):Observable<GameLong>{
    var headers = new HttpHeaders({
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      'x-rapidapi-key': '4d7047e447mshb4eb170f47a3a8ep1f91bejsn6f5328071e08'
    });
    var link = "https://free-to-play-games-database.p.rapidapi.com/api/game?id=" + String(id);
    console.log(link);
    return this.http.get<GameLong>(link, {
        headers: headers
      });
  }

}
