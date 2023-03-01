import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePrenComponent } from './update-pren.component';

describe('UpdatePrenComponent', () => {
  let component: UpdatePrenComponent;
  let fixture: ComponentFixture<UpdatePrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
