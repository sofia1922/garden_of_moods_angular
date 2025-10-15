import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodForm } from './mood-form';

describe('MoodForm', () => {
  let component: MoodForm;
  let fixture: ComponentFixture<MoodForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
