import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateclientComponent } from './createclient.component';

describe('CreateclientComponent', () => {
  let component: CreateclientComponent;
  let fixture: ComponentFixture<CreateclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
