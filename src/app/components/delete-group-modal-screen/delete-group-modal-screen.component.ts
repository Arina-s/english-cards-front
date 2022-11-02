import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardGroupService } from 'src/app/services/card-group.service';

@Component({
  selector: 'app-delete-group-modal-screen',
  templateUrl: './delete-group-modal-screen.component.html',
  styleUrls: ['./delete-group-modal-screen.component.scss']
})
export class DeleteGroupModalScreenComponent implements OnInit {

  name: string;

  constructor(private dialogRef: MatDialogRef<DeleteGroupModalScreenComponent>, @Inject(MAT_DIALOG_DATA) data: any, private cardGroupService: CardGroupService) {
    this.name = data.cardGroupName;
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  deleteGroup(): void {
    this.cardGroupService.deleteCardGroup(this.name);
    window.location.reload();
  }

}
