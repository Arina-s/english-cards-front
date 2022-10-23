import { JsonPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Card } from 'src/app/interfaces/card';
import { CardFilter } from 'src/app/interfaces/card-filter';
import { CardService } from 'src/app/services/card.service';
import { FilterDataService } from 'src/app/services/filter-data.service';

@Component({
  selector: 'app-practice-modal-screen',
  templateUrl: './practice-modal-screen.component.html',
  styleUrls: ['./practice-modal-screen.component.scss']
})
export class PracticeModalScreenComponent implements OnInit {

  public cards: Card[] = [];
  public totalCards: number = 0;

  constructor(private dialogRef: MatDialogRef<PracticeModalScreenComponent>, 
    private cardService: CardService, 
    private filterDataService: FilterDataService) { }

  ngOnInit(): void {
    this.getCars();
  }

  public getCars(): void{
    this.cardService.getCars().subscribe(
      (response: Card[]) => {
        this.cards = response;
        this.totalCards = this.cards.length;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  startPractice(addForm: NgForm) {
    localStorage.setItem('currentFilter', JSON.stringify(addForm.value));
    this.filterDataService.setCardFilter(addForm.value);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
