import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerServerStatsComponent } from './player-server-stats.component';

describe('PlayerServerStatsComponent', () => {
  let component: PlayerServerStatsComponent;
  let fixture: ComponentFixture<PlayerServerStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerServerStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerServerStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
