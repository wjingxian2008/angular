import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-muti-select',
  templateUrl: './muti-select.component.html',
  styleUrls: ['./muti-select.component.css']
})
export class MutiSelectComponent implements OnInit {

  showSelection = false;
  selectionArr = [
    {'active': false, 'name': 'DEV'},
    {'active': false, 'name': 'ST'},
    {'active': false, 'name': 'UAT'}
  ];

  selectedArr: object[];

  constructor() {}

  ngOnInit() {
  }

  clickSelect() {
    this.showSelection = !this.showSelection;
    console.log(this.showSelection);
  }

  isSelected(i: number) {
    this.selectionArr[i].active = !this.selectionArr[i].active;
    this.selectedArr = this.selectionArr.filter(it => it.active === true);
  }
}
