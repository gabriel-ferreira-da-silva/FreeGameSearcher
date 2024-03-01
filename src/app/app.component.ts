import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatListModule} from "@angular/material/list"
import {Game} from '../game'
import { GameServicesService } from './service/game-services.service';
import { GameDetailPageComponent } from './components/game-detail-page/game-detail-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})


export class AppComponent {
  title = 'SelecaoVlab';
  apiURL = "http://localhost:4123/http://www.freetogame.com/api/games";

  nullGame : Game = {
    id: 0,
    title: "string",
    thumbnail: "string",
    short_description: "string;",
    game_url: "string;",
    genre: "string;",
    platform: "sd",
    publisher: "string;",
    developer: "string;",
    release_date:"string;",
    freetogame_profile_url: "string;",
  }

  gameList: Game[]=[this.nullGame];

  constructor(private http:HttpClient, private gameService: GameServicesService){
    this.apiURL = "http://localhost:4123/http://www.freetogame.com/api/games";
  }

  ngOnInit(): void{

    /*let headers = new HttpHeaders({
			'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
			'x-rapidapi-key': '4d7047e447mshb4eb170f47a3a8ep1f91bejsn6f5328071e08'
		});

		this.http
			.get<Game[]>('https://free-to-play-games-database.p.rapidapi.com/api/games', {
				headers: headers
			})

			*//*
      this.gameService.getAllGames().subscribe(data => {
        this.gameList = data;
				//console.log(data);
			});*/
  }
}




