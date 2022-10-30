import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardGroup } from 'src/app/interfaces/card-group';
import { CardGroupService } from 'src/app/services/card-group.service';
import { CreateGroupModalScreenComponent } from '../create-group-modal-screen/create-group-modal-screen.component';

@Component({
  selector: 'app-card-group-area',
  templateUrl: './card-group-area.component.html',
  styleUrls: ['./card-group-area.component.scss']
})
export class CardGroupAreaComponent implements OnInit {

  cardGroupNames: string[] = [];

  constructor(private cardGroupService: CardGroupService, private dialog: MatDialog) {
    this.cardGroupService.getCardGroups().subscribe(request => this.cardGroupNames = request);
  }

  ngOnInit(): void {
  }

  openSubgroup(cardGroup: string) {
    localStorage.setItem("cardGroup", cardGroup);
    window.location.href="/card-subgroups";
  }

  openMainMenu() {
    window.location.href="/";
  }

  openCreateModel() {
    this.dialog.open(CreateGroupModalScreenComponent);
  }

}
