import { Component, OnInit } from '@angular/core';
import { CardFilter } from 'src/app/interfaces/card-filter';
import { FilterDataService } from 'src/app/services/filter-data.service';

@Component({
  selector: 'app-practice-mode',
  templateUrl: './practice-mode.component.html',
  styleUrls: ['./practice-mode.component.scss']
})
export class PracticeModeComponent implements OnInit {

  public cardFilter: CardFilter = { countCards: 0};

  constructor(private filterDataService: FilterDataService) {
    //filterDataService.currentCardFilter.subscribe((value: CardFilter) => this.cardFilter = value);
    //this.cardFilter = filterDataService.getCardFilter();
    let str = localStorage.getItem('currentFilter');
    this.cardFilter = JSON.parse(localStorage.getItem('currentFilter') || '');
  }

  ngOnInit(): void {
  }

}
