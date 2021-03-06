import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {GameComponent, GameDialogComponent, PlayersDialogComponent} from "./game/game.component";
import {LoginComponent} from "./auth/login/login.component";
import {GameFormComponent} from "./game/game-form/game-form.component";
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'game',  component: GameComponent },
  { path: 'login', component: LoginComponent },
  { path: 'game-form', component: GameFormComponent },
  { path: 'game-dialog', component: GameDialogComponent },
  { path: 'players-dialog', component: PlayersDialogComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
