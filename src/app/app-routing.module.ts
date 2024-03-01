import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GameDetailPageComponent } from './components/game-detail-page/game-detail-page.component';
import { GameListPageComponent } from './components/game-list-page/game-list-page.component';
const routes: Routes = [
  {path:'', component: GameListPageComponent},
  {path:'detail/:id', component: GameDetailPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
