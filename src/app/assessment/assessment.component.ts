import { Component } from '@angular/core';

interface Questao {
  id: number;
  pergunta: string;
  disciplina: string;
}

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css'],
})
export class AssessmentComponent {
  prova: Questao[] = [];
  questoes: Questao[] = [
    { id: 1, pergunta: 'Qual é a capital da França?', disciplina: 'Geografia' },
    {
      id: 2,
      pergunta: 'Quem escreveu "Romeu e Julieta"?',
      disciplina: 'Literatura',
    },
  ];

  termoBusca: string = '';
  disciplinas: string[] = [
    'Geografia',
    'Literatura',
    'Matemática',
    'História',
    'Ciências',
  ];
  disciplinaSelecionada: string = '';
  questoesFiltradas: Questao[] = [];

  adicionarQuestaoAProva(questao: Questao) {
    // Lógica para adicionar questão à prova
  }

  removerQuestaoDaProva(index: number) {
    // Lógica para remover questão da prova
  }

  filtrarQuestoes() {
    this.questoesFiltradas = this.questoes.filter(
      (questao) =>
        questao.disciplina
          .toLowerCase()
          .includes(this.termoBusca.toLowerCase()) &&
        (this.disciplinaSelecionada === '' ||
          questao.disciplina === this.disciplinaSelecionada)
    );
  }
}
