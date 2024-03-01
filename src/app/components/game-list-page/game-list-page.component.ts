import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatListModule} from "@angular/material/list"
import {Game,GameSave} from '../../../game'
import { NgModel } from '@angular/forms';
import { GameServicesService } from '../.././service/game-services.service';
import { GameStorageService } from '../../service/game-storage.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-game-list-page',
  templateUrl: './game-list-page.component.html',
  styleUrl: './game-list-page.component.scss'
})

export class GameListPageComponent {
  title = 'SelecaoVlab';
  apiURL = "http://localhost:4123/http://www.freetogame.com/api/games";

  nullGame : Game = {
    id: -1,
    title: "string",
    thumbnail: "string",
    short_description: "string;",
    game_url: "string;",
    genre: "string;",
    platform: "string",
    publisher: "string;",
    developer: "string;",
    release_date:"string;",
    freetogame_profile_url: "string;",
  }

  gamesave: GameSave={
    array:[this.nullGame],
  }

  gf: Game[]=[];
  fav: Game[]=[];
  favGames: Game[]=[];
  allFavGames: Game[]=[];
  platformFilter : string="";
  realese_dateFilter : string="";
  categoryFilter : string="";
  developerFilter : string=""; 

  favoriteGame(game: Game){
    const n = this.storageService.get("1");
    this.favGames = JSON.parse(n);
    this.favGames.push(game);
    this.allFavGames = this.favGames;
    this.storageService.set("1", JSON.stringify(this.favGames));
    console.log(this.favGames)
    alert(game.title + " added to favorites!");
  }

  unfavoriteGame(game: Game){
    const n = this.storageService.get("1");
    this.favGames = JSON.parse(n);
    const index = this.favGames.indexOf(game, 0);
    this.favGames.splice(index,1);
    this.allFavGames = this.favGames;
    this.storageService.set("1", JSON.stringify(this.favGames));
    console.log(this.favGames)
    alert(game.title + " removed from favorites!");
  }

  onSelect(op: string){
    console.log(op);
    if(op=="title"){
      this.gameList = this.gameList.sort((a,b)=>{ 
        if(a.title.localeCompare(b.title)>0){
          return 1;
        }else{
          return -1;
        }
      });

      this.favGames = this.favGames.sort((a,b)=>{ 
        if(a.title.localeCompare(b.title)>0){
          return 1;
        }else{
          return -1;
        }
      });

    }

    if(op=="date"){
      this.gameList = this.gameList.sort((a,b)=>{ 
        if(a.release_date.localeCompare(b.release_date)>0){
          return 1;
        }else{
          return -1;
        }
      });

      this.favGames = this.favGames.sort((a,b)=>{ 
        if(a.release_date.localeCompare(b.release_date)>0){
          return 1;
        }else{
          return -1;
        }
      });
      
    }


  }
  
  filterGames(){
    this.gf=[];
    this.fav=[];
    
    if(this.platformFilter != ""){
      for(var game of this.allGames){
        if(game.platform == this.platformFilter){
          this.gf.push(game);
        }
      }
      
      for(var game of this.allFavGames){
        if(game.platform == this.platformFilter){
          this.fav.push(game);
        }
      }

    }
    
    if(this.realese_dateFilter != ""){
      for(var game of this.allGames){
        if(game.release_date == this.realese_dateFilter && this.gf.indexOf(game)==-1){
          this.gf.push(game);
        }
      }
      
      for(var game of this.allFavGames){
        if(game.release_date == this.realese_dateFilter && this.fav.indexOf(game)==-1){
          this.fav.push(game);
        }
      }

    }

    if(this.categoryFilter != ""){
      for(var game of this.allGames){
        if(game.genre == this.categoryFilter && this.gf.indexOf(game)==-1){
          this.gf.push(game);
        }
      }
      for(var game of this.allFavGames){
        if(game.genre == this.categoryFilter && this.fav.indexOf(game)==-1){
          this.fav.push(game);
        }
      }      
    }

    if(this.developerFilter != ""){
      for(var game of this.allGames){
        if(game.developer == this.developerFilter && this.gf.indexOf(game)==-1){
          this.gf.push(game);
        }
      }
      for(var game of this.allFavGames){
        if(game.developer == this.developerFilter && this.fav.indexOf(game)==-1){
          this.fav.push(game);
        }
      }      
    }

    this.gameList = this.gf;
    this.favGames =this.fav;
    if(this.categoryFilter=="" && this.developerFilter=="" && this.realese_dateFilter=="" && this.platformFilter==""){
      this.gameList=this.allGames;
      this.favGames = this.allFavGames;
    }
  }


  gameList: Game[]=[this.nullGame];
  allGames: Game[]=[this.nullGame];

  constructor(private http:HttpClient, private storageService: GameStorageService, private gameService: GameServicesService){
    this.apiURL = "http://localhost:4123/http://www.freetogame.com/api/games";
  }

  ngOnInit(): void{
    
    const n = this.storageService.get("1");
    this.favGames = JSON.parse(n);
    this.allFavGames = this.favGames;

    console.log(this.favGames);

    this.gameService.getAllGames().subscribe(data => {
      this.gameList = data;
      this.allGames = this.gameList;
      //console.log(data);
    });
  }
}