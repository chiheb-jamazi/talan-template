import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALLUsersComponent } from './allusers.component';

describe('AllusersComponent', () => {
  let component: ALLUsersComponent;
  let fixture: ComponentFixture<ALLUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ALLUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ALLUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
