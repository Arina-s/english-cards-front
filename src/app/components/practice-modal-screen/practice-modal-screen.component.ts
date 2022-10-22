import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-practice-modal-screen',
  templateUrl: './practice-modal-screen.component.html',
  styleUrls: ['./practice-modal-screen.component.scss']
})
export class PracticeModalScreenComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PracticeModalScreenComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
