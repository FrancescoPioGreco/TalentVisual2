import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerApiRestComponent } from './player-api-rest.component';

describe('PlayerApiRestComponent', () => {
  let component: PlayerApiRestComponent;
  let fixture: ComponentFixture<PlayerApiRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerApiRestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerApiRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
