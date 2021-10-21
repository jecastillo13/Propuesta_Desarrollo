import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarclientComponent } from './editarclient.component';

describe('EditarclientComponent', () => {
  let component: EditarclientComponent;
  let fixture: ComponentFixture<EditarclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
