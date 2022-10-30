import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CardGroupService } from 'src/app/services/card-group.service';

@Component({
  selector: 'app-create-group-modal-screen',
  templateUrl: './create-group-modal-screen.component.html',
  styleUrls: ['./create-group-modal-screen.component.scss']
})
export class CreateGroupModalScreenComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CreateGroupModalScreenComponent>, private cardGroupService: CardGroupService) { }

  ngOnInit(): void {
  }

  addCardGroup(addCardGroupForm: any) {
    this.cardGroupService.createCardGroup(addCardGroupForm.value.name);
    this.dialogRef.close();
    window.location.reload();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
