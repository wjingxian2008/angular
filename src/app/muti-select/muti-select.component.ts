import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-muti-select',
  templateUrl: './muti-select.component.html',
  styleUrls: ['./muti-select.component.css']
})
export class MutiSelectComponent implements OnInit {

  @Input() values;
  @Output() childEvent = new EventEmitter<any>();

  showSelection = false;

  selectedArr: object[];

  constructor() {}

  ngOnInit() {
  }

  clickSelect() {
    this.showSelection = !this.showSelection;
    console.log(this.showSelection);
  }

  isSelected(i: number) {
    this.values[i].active = !this.values[i].active;
    this.selectedArr = this.values.filter(it => it.active === true);
    this.childEvent.emit(this.selectedArr);
  }
}
