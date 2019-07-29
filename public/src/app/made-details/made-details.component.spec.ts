import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadeDetailsComponent } from './made-details.component';

describe('MadeDetailsComponent', () => {
  let component: MadeDetailsComponent;
  let fixture: ComponentFixture<MadeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
