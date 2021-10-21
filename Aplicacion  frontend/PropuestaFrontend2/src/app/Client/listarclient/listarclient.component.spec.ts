import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarclientComponent } from './listarclient.component';

describe('ListarclientComponent', () => {
  let component: ListarclientComponent;
  let fixture: ComponentFixture<ListarclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
