import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-area',
  templateUrl: './card-area.component.html',
  styleUrls: ['./card-area.component.scss']
})
export class CardAreaComponent implements OnInit {

  public cards: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void{
    this.getCars();
  }
  
  public getCars(): void{
    this.cardService.getCars().subscribe(
      (response: Card[]) => {
        this.cards = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
