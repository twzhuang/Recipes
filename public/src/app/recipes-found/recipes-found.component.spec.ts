import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesFoundComponent } from './recipes-found.component';

describe('RecipesFoundComponent', () => {
  let component: RecipesFoundComponent;
  let fixture: ComponentFixture<RecipesFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
