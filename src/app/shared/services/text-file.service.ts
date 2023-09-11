import { Injectable } from '@angular/core';
import { Question } from 'src/app/exam/exam.component';

@Injectable({
  providedIn: 'root',
})
export class TextFileService {
  generateTextFile(questions: Question[]): void {
    const textToWrite = this.formatQuestionsToText(questions);
    const fileName = 'prova.txt';

    const blob = new Blob([textToWrite], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    a.click();
  }

  private formatQuestionsToText(questions: Question[]): string {
    let text = '';

    questions.forEach((question, index) => {
      text += 'Nome:\n';
      text + 'Data:\n\n';
      text += `Questão ${index + 1}:\n`;
      text += `Texto: ${question.text}\n`;

      if (question.options) {
        text += 'Opções:\n';
        question.options.forEach((option: string, optionIndex: number) => {
          text += `${String.fromCharCode(97 + optionIndex)}. ${option}\n`;
        });
      }
    });

    return text;
  }
}
