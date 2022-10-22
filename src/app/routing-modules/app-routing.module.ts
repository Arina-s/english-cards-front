import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardAreaComponent } from '../components/card-area/card-area.component';
import { MainMenuComponent } from '../components/main-menu/main-menu.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'cards', component: CardAreaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }