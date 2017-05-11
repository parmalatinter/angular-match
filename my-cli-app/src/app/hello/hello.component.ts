import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  providers:[MessageService],
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor(private service: MessageService, public dialog: MdDialog) { }

  message : string;
  selectedOption : string;

  ngOnInit() {
      this.message = this.service.getMessage();
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      height: '400px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog.html',
})
export class DialogOverviewExampleDialog {
    constructor(public dialogRef: MdDialogRef<DialogOverviewExampleDialog>) {}
}