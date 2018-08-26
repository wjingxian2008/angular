import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutiSelectComponent } from './muti-select.component';

describe('MutiSelectComponent', () => {
  let component: MutiSelectComponent;
  let fixture: ComponentFixture<MutiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutiSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
