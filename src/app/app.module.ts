import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardAreaComponent } from './components/card-area/card-area.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PracticeModalScreenComponent } from './components/practice-modal-screen/practice-modal-screen.component';
import { PracticeModeComponent } from './components/practice-mode/practice-mode.component';
import { CardGroupAreaComponent } from './components/card-group-area/card-group-area.component';
import { CardSubgroupAreaComponent } from './components/card-subgroup-area/card-subgroup-area.component';
import { CreateGroupModalScreenComponent } from './components/create-group-modal-screen/create-group-modal-screen.component';
import { DeleteGroupModalScreenComponent } from './components/delete-group-modal-screen/delete-group-modal-screen.component';
import { EditGroupModalScreenComponent } from './components/edit-group-modal-screen/edit-group-modal-screen.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'cards', component: CardAreaComponent},
  { path: 'practice', component: PracticeModeComponent},
  { path: 'card-groups', component: CardGroupAreaComponent},
  { path: 'card-subgroups', component: CardSubgroupAreaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardAreaComponent,
    CardComponent,
    MainMenuComponent,
    PracticeModalScreenComponent,
    PracticeModeComponent,
    CardGroupAreaComponent,
    CardSubgroupAreaComponent,
    CreateGroupModalScreenComponent,
    DeleteGroupModalScreenComponent,
    EditGroupModalScreenComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
