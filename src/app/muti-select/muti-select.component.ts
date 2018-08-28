import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RebirthNGModule } from 'rebirth-ng';

@Component({
  selector: 'app-muti-select',
  templateUrl: './muti-select.component.html',
  styleUrls: ['./muti-select.component.css']
})
export class MutiSelectComponent implements OnInit {

  @Input() options;
  @Output() valueChange = new EventEmitter<any>();
  value: any[] = [];
  showOptions = false;
  private onChange = (_: any) => null;
  private onTouched = () => null;


  constructor() {}

  ngOnInit() {
  }

  clickSelect() {
    this.showOptions = !this.showOptions;
  }

  onCheckBoxChange(item: any, checkbox) {
    this.onTouched();
    this.value = this.value || [];
    const value = item.name;
    if (checkbox.checked) {
      this.value = [...this.value, value];
    } else {
      this.value = this.value.filter((valueItem) => valueItem !== value);
    }
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  isChecked(item: any) {
    return this.value.indexOf(item.name) !== -1;
  }

  removeOption(item: string) {
    this.value = this.value.filter(it => it !== item);
  }
}
