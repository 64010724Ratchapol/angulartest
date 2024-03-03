import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessiComponent } from './messi/messi.component';
import { NeymarComponent } from './neymar/neymar.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'messi',component:MessiComponent},
  {path:'neymar',component:NeymarComponent},
  {path:'player',component:PlayerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
