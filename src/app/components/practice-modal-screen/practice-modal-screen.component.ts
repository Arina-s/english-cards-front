import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Card } from 'src/app/interfaces/card';
import { CardService } from 'src/app/services/card.service';
import { PracticeTaskService } from 'src/app/services/practice-task.service';

@Component({
  selector: 'app-practice-modal-screen',
  templateUrl: './practice-modal-screen.component.html',
  styleUrls: ['./practice-modal-screen.component.scss']
})
export class PracticeModalScreenComponent implements OnInit {

  public cards: Card[] = [];
  public totalCards: number = 0;
  public defaultCardsNumber: number = 10;
  public checked = "startWithNewest";
  public defaultSort = "startWithNewest";

  constructor(private dialogRef: MatDialogRef<PracticeModalScreenComponent>, 
    private cardService: CardService, 
    private practiceTaskService: PracticeTaskService) { }

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

  startPractice(settingsForm: NgForm) {
    this.practiceTaskService.createTask(settingsForm.value);
    this.dialogRef.close();
    window.location.href = "/practice";
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
