import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { PracticeTaskService } from 'src/app/services/practice-task.service';

@Component({
  selector: 'app-practice-mode',
  templateUrl: './practice-mode.component.html',
  styleUrls: ['./practice-mode.component.scss']
})
export class PracticeModeComponent implements OnInit {

  currentCardsForPractice: Card[] = [];
  currentCard!: Card;
  isQuestion = true;
  isFinish = false;
  index = 0;

  constructor(private practiceTaskService: PracticeTaskService) {
    practiceTaskService.getCardsForPracticeTask().subscribe(
      (response: Card[]) => {
        this.currentCardsForPractice = response;
        this.currentCard = this.currentCardsForPractice[this.index];
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  ngOnInit(): void {
  }

  flipCard() {
    this.isQuestion = !this.isQuestion;
  }

  nextCard() {
    if (this.index + 1 < this.currentCardsForPractice.length) {
      this.index++;
      this.currentCard = this.currentCardsForPractice[this.index];
      this.isQuestion = true;
    }
    if (this.index + 1 == this.currentCardsForPractice.length) {
      this.isFinish = true;
    }
  }

  previousCard() {
    if (this.index > 0) {
      this.index--;
      this.currentCard = this.currentCardsForPractice[this.index];
      this.isQuestion = true;
    }
  }

  goMainMenu() {
    window.location.href = "/";
  }

}
