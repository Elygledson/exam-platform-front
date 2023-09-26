import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamGeneratorComponent } from './exam-generator.component';

describe('ExamGeneratorComponent', () => {
  let component: ExamGeneratorComponent;
  let fixture: ComponentFixture<ExamGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamGeneratorComponent],
    });
    fixture = TestBed.createComponent(ExamGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
