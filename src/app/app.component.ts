import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectionArr = [
    {'active': false, 'name': 'DEV'},
    {'active': false, 'name': 'ST'},
    {'active': false, 'name': 'UAT'}
  ];

  showSelectArr(arr: object[]) {
    arr.forEach(it => console.log(it));
  }
}
