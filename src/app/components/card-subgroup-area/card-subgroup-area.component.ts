import { Component, OnInit } from '@angular/core';
import { CardGroupService } from 'src/app/services/card-group.service';

@Component({
  selector: 'app-card-subgroup-area',
  templateUrl: './card-subgroup-area.component.html',
  styleUrls: ['./card-subgroup-area.component.scss']
})
export class CardSubgroupAreaComponent implements OnInit {

  cardSubgroupNames: string[] = [];

  constructor(private cardGroupService: CardGroupService) {
    this.cardGroupService.getCardSubgroupNames(localStorage.getItem("cardGroup") || "")
    .subscribe(request => this.cardSubgroupNames = request);
  }
  ngOnInit(): void {
    console.log();
  }

  openGroups() {
    window.location.href = "/card-groups";
  }

}
