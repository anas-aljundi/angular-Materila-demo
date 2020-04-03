import { Component } from '@angular/core';
import { Food} from '../app/_models/food';
import { Category} from '../app/_models/category';
import { Observable, timer } from 'rxjs';
import { MatDialog } from '@angular/material';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  categories: Category[] = [
    {id: 0, name: 'Steak', selected: true},
    {id: 1, name: 'Pizza', selected: false},
    {id: 2, name: 'Tacos', selected: false}
  ];
  minDate = new Date(2020, 3, 1);
  maxDate = new Date(2020, 7, 1);
  progress = 0;
  timer; isLoading = false;

  constructor(private dialog: MatDialog) {
    this.timer = setInterval(() => {
      this.progress++;
      if (this.progress === 100) {clearInterval(this.timer); }
    }, 20);
    this.isLoading = true;
    this.getCourse().subscribe(x => this.isLoading = false );
  }

  selectCategory(category) {
    this.categories.
         filter(c => c !== category).
         forEach(c => c.selected = false);
    category.selected = !category.selected;
  }

  getCourse() {
    return timer(2000);
  }

  openDialog() {
    this.dialog.open(EditDialogComponent, {
      data: { counter: 1 }
    })
    .afterClosed().subscribe(result => console.log(result));
  }
}
