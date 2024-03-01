import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Game } from '../../../game';
import { GameServicesService } from '../../service/game-services.service';
import { GameLong } from '../../../gamelong';
import { GameStorageService } from '../../service/game-storage.service';
@Component({
  selector: 'app-game-detail-page',
  templateUrl: './game-detail-page.component.html',
  styleUrl: './game-detail-page.component.scss'
})
export class GameDetailPageComponent {
  
  game?: GameLong;/*= {
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
  }*/
  favGames: Game[]=[];

  
  favoriteGame(game: Game){
    const n = this.storageService.get("1");
    this.favGames = JSON.parse(n);
    this.favGames.push(game);
    this.storageService.set("1", JSON.stringify(this.favGames));
    console.log(this.favGames)
    alert(game.title + " added to favorites!");
  }

  gameList: Game[]=[];
  constructor(private storageService: GameStorageService ,private gameService: GameServicesService,private route: ActivatedRoute, private router: Router){
    this.getGame();
  }

  ngOninit(){
    this.getGame();
  }

  getGame(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.gameService.getGame(id).subscribe(data => {
      this.game= data;
      //console.log(data);
    });

    console.log(this.game);
  }

}
