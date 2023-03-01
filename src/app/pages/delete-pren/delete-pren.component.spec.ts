import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePrenComponent } from './delete-pren.component';

describe('DeletePrenComponent', () => {
  let component: DeletePrenComponent;
  let fixture: ComponentFixture<DeletePrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
