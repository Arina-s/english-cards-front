import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { CardFilter } from "../interfaces/card-filter";

@Injectable({providedIn: 'root'})
export class FilterDataService {
  private static emptyCatdFilter = {countCards: 0};
  private static cardFilterSource = new BehaviorSubject<CardFilter>(FilterDataService.emptyCatdFilter);
  
  currentCardFilter = FilterDataService.cardFilterSource.asObservable();

  constructor() {

   }

  setCardFilter(cardFilter: CardFilter) {
    FilterDataService.cardFilterSource.next(cardFilter);
    console.log(cardFilter);
  }

  // getCardFilter(): CardFilter {
  //   let cardFilter: CardFilter = this.emptyCatdFilter;
  //   this.cardFilterSource.asObservable().subscribe(value => {cardFilter = value});
  //   return cardFilter;
  // }
}