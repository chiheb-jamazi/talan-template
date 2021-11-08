import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedcinComponent } from './add-medcin.component';

describe('AddMedcinComponent', () => {
  let component: AddMedcinComponent;
  let fixture: ComponentFixture<AddMedcinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedcinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedcinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
