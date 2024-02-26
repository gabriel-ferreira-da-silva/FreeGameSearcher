import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListingComponent } from './movies-listing.component';

describe('MoviesListingComponent', () => {
  let component: MoviesListingComponent;
  let fixture: ComponentFixture<MoviesListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
