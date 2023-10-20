import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exam-submission',
  templateUrl: './exam-submission.component.html',
  styleUrls: ['./exam-submission.component.css']
})
export class ExamSubmissionComponent {
  filter: string = '';
  @Input() id!: number;

  getStarArray(numStars: number): any[] {
    return [1]
  }
  getStarArray1(): void {
    
  }
  applyFilter(): void {
    
  }

}
