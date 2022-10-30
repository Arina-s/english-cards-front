import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PracticeModalScreenComponent } from '../practice-modal-screen/practice-modal-screen.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPracticeModalScreen() {
    this.dialog.open(PracticeModalScreenComponent);
  }

  openLink(url: string) {
    window.location.href = url;
  }

}
