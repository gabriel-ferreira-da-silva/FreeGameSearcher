import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListPageComponent } from './game-list-page.component';

describe('GameListPageComponent', () => {
  let component: GameListPageComponent;
  let fixture: ComponentFixture<GameListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
