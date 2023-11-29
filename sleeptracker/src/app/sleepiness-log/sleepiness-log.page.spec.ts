import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SleepinessLogPage } from './sleepiness-log.page';

describe('SleepinessLogPage', () => {
  let component: SleepinessLogPage;
  let fixture: ComponentFixture<SleepinessLogPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SleepinessLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
