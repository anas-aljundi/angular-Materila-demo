import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

// export const DIALOG_DATA  = new InjectionToken('DIALOG_DATA');

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  // constructor(@Inject(DIALOG_DATA) data: any) { console.log(data); }
  constructor(@Inject(MAT_DIALOG_DATA) data: any) { console.log(data); }

  ngOnInit() {
  }

}
