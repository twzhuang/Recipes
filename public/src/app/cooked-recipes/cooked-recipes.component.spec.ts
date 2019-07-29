import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookedRecipesComponent } from './cooked-recipes.component';

describe('CookedRecipesComponent', () => {
  let component: CookedRecipesComponent;
  let fixture: ComponentFixture<CookedRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookedRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookedRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
