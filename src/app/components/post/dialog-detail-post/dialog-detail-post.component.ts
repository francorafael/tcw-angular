import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-detail-post',
  templateUrl: './dialog-detail-post.component.html',
  styleUrls: ['./dialog-detail-post.component.css']
})
export class DialogDetailPostComponent implements OnInit {

  /**
    * @var dialogRef
    */
  public dialogRef: MatDialogRef<DialogDetailPostComponent>;

  /**
  * @var data
  */
  public data: any;


  constructor(
    dialogRef: MatDialogRef<DialogDetailPostComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.dialogRef = dialogRef
    this.data = data;
  }

  ngOnInit() {
  }

}
