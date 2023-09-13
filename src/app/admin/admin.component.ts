import { Component } from '@angular/core';
import { Difficulty, Question } from '../exam/exam.component';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
export interface Exam {
  author: string;
  name: string;
  questions: Question[];
  createdAt: Date;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  examsDone: number = 10; // Exemplo: número de provas feitas
  examsProgress: number = 15; // Exemplo: número de provas em andamento
  totalExams: number = 30; // Exemplo: número total de provas cadastradas
  totalQuestions: number = 300; // Exemplo: número total de questões

  examsToDo: Exam[] = [
    {
      author: 'Elygledson',
      name: 'Exame de Introdução à Programação',
      questions: [
        {
          id: 1,
          text: 'Qual é o termo usado para se referir a um espaço de armazenamento de dados em um computador?',
          options: ['Bit', 'Byte', 'Disco Rígido', 'Memória RAM'],
          correctAnswer: 'Byte',
          difficulty: Difficulty.EASY,
          category: 'Ciência da Computação',
          score: 10,
          author: {
            id: 1,
            name: 'Prof. John Doe',
          },
        },
        {
          id: 2,
          text: 'Qual das seguintes linguagens de programação é uma linguagem de alto nível?',
          options: ['Assembly', 'C', 'Java', 'Binary'],
          correctAnswer: 'Java',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 15,
          author: {
            id: 1,
            name: 'Prof. John Doe',
          },
        },
      ],
      createdAt: new Date('2022-01-15'),
    },
    {
      author: 'Elygledson',
      name: 'Exame de Estruturas de Dados',
      questions: [
        {
          id: 3,
          text: 'Qual das seguintes estruturas de dados é usada para representar relacionamentos muitos-para-muitos?',
          options: ['Árvore Binária', 'Lista Encadeada', 'Grafo', 'Fila'],
          correctAnswer: 'Grafo',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 2,
            name: 'Prof. Jane Smith',
          },
        },
        {
          id: 4,
          text: 'O que é uma pilha (stack) em estruturas de dados?',
          options: [
            'Uma estrutura que segue o princípio "o último a entrar é o primeiro a sair"',
            'Um tipo de árvore',
            'Uma lista linear',
            'Uma matriz bidimensional',
          ],
          correctAnswer:
            'Uma estrutura que segue o princípio "o último a entrar é o primeiro a sair"',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 2,
            name: 'Prof. Jane Smith',
          },
        },
      ],
      createdAt: new Date('2022-02-20'),
    },
  ];
  examsInProgress: Exam[] = [
    {
      author: 'Elygledson',
      name: 'Exame de Introdução à Programação',
      questions: [
        {
          id: 1,
          text: 'Qual é o termo usado para se referir a um espaço de armazenamento de dados em um computador?',
          options: ['Bit', 'Byte', 'Disco Rígido', 'Memória RAM'],
          correctAnswer: 'Byte',
          difficulty: Difficulty.EASY,
          category: 'Ciência da Computação',
          score: 10,
          author: {
            id: 1,
            name: 'Prof. John Doe',
          },
        },
        {
          id: 2,
          text: 'Qual das seguintes linguagens de programação é uma linguagem de alto nível?',
          options: ['Assembly', 'C', 'Java', 'Binary'],
          correctAnswer: 'Java',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 15,
          author: {
            id: 1,
            name: 'Prof. John Doe',
          },
        },
      ],
      createdAt: new Date('2022-01-15'),
    },
    {
      author: 'Elygledson',
      name: 'Exame de Estruturas de Dados',
      questions: [
        {
          id: 3,
          text: 'Qual das seguintes estruturas de dados é usada para representar relacionamentos muitos-para-muitos?',
          options: ['Árvore Binária', 'Lista Encadeada', 'Grafo', 'Fila'],
          correctAnswer: 'Grafo',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 2,
            name: 'Prof. Jane Smith',
          },
        },
        {
          id: 4,
          text: 'O que é uma pilha (stack) em estruturas de dados?',
          options: [
            'Uma estrutura que segue o princípio "o último a entrar é o primeiro a sair"',
            'Um tipo de árvore',
            'Uma lista linear',
            'Uma matriz bidimensional',
          ],
          correctAnswer:
            'Uma estrutura que segue o princípio "o último a entrar é o primeiro a sair"',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 2,
            name: 'Prof. Jane Smith',
          },
        },
      ],
      createdAt: new Date('2022-02-20'),
    },
    {
      author: 'Elygledson',
      name: 'Exame de Redes de Computadores',
      questions: [
        {
          id: 5,
          text: 'O que é um endereço IP?',
          options: [
            'Um número de telefone',
            'Um identificador único para um dispositivo em uma rede',
            'Um endereço de e-mail',
            'Um endereço de casa',
          ],
          correctAnswer:
            'Um identificador único para um dispositivo em uma rede',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 3,
            name: 'Prof. Robert Johnson',
          },
        },
        {
          id: 6,
          text: 'O que é um firewall?',
          options: [
            'Um dispositivo de rede sem fio',
            'Um sistema de segurança que controla o tráfego de rede',
            'Um tipo de vírus de computador',
            'Uma impressora',
          ],
          correctAnswer:
            'Um sistema de segurança que controla o tráfego de rede',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 3,
            name: 'Prof. Robert Johnson',
          },
        },
      ],
      createdAt: new Date('2022-03-10'),
    },
    {
      author: 'Elygledson',
      name: 'Exame de Inteligência Artificial',
      questions: [
        {
          id: 7,
          text: 'O que é um algoritmo de aprendizado de máquina?',
          options: [
            'Um programa de computador que joga xadrez',
            'Um tipo de impressora',
            'Um conjunto de instruções para um microprocessador',
            'Um programa que permite que um computador aprenda com dados',
          ],
          correctAnswer:
            'Um programa que permite que um computador aprenda com dados',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 4,
            name: 'Prof. Maria Silva',
          },
        },
        {
          id: 8,
          text: 'Qual é o objetivo principal da visão computacional?',
          options: [
            'Analisar dados financeiros',
            'Reconhecer objetos em imagens e vídeos',
            'Calcular números primos',
            'Gerar texto automaticamente',
          ],
          correctAnswer: 'Reconhecer objetos em imagens e vídeos',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 4,
            name: 'Prof. Maria Silva',
          },
        },
      ],
      createdAt: new Date('2022-04-05'),
    },
    {
      author: 'Elygledson',
      name: 'Exame de Sistemas Operacionais',
      questions: [
        {
          id: 9,
          text: 'O que é um sistema de arquivos?',
          options: [
            'Uma pasta no computador',
            'Uma ferramenta de edição de texto',
            'Uma estrutura que organiza e armazena dados em dispositivos de armazenamento',
            'Um aplicativo de email',
          ],
          correctAnswer:
            'Uma estrutura que organiza e armazena dados em dispositivos de armazenamento',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 5,
            name: 'Prof. Carlos Mendes',
          },
        },
        {
          id: 10,
          text: 'O que é multitarefa em sistemas operacionais?',
          options: [
            'Execução de várias tarefas ao mesmo tempo',
            'Execução de uma única tarefa por vez',
            'Um tipo de mouse',
            'Um componente de hardware',
          ],
          correctAnswer: 'Execução de várias tarefas ao mesmo tempo',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 5,
            name: 'Prof. Carlos Mendes',
          },
        },
      ],
      createdAt: new Date('2022-05-20'),
    },
  ];
  concludedExams: Exam[] = [
    {
      author: 'Elygledson',
      name: 'Exame de Introdução à Programação',
      questions: [
        {
          id: 1,
          text: 'Qual é o termo usado para se referir a um espaço de armazenamento de dados em um computador?',
          options: ['Bit', 'Byte', 'Disco Rígido', 'Memória RAM'],
          correctAnswer: 'Byte',
          difficulty: Difficulty.EASY,
          category: 'Ciência da Computação',
          score: 10,
          author: {
            id: 1,
            name: 'Prof. John Doe',
          },
        },
        {
          id: 2,
          text: 'Qual das seguintes linguagens de programação é uma linguagem de alto nível?',
          options: ['Assembly', 'C', 'Java', 'Binary'],
          correctAnswer: 'Java',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 15,
          author: {
            id: 1,
            name: 'Prof. John Doe',
          },
        },
      ],
      createdAt: new Date('2022-01-15'),
    },
    {
      author: 'Elygledson',
      name: 'Exame de Estruturas de Dados',
      questions: [
        {
          id: 3,
          text: 'Qual das seguintes estruturas de dados é usada para representar relacionamentos muitos-para-muitos?',
          options: ['Árvore Binária', 'Lista Encadeada', 'Grafo', 'Fila'],
          correctAnswer: 'Grafo',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 2,
            name: 'Prof. Jane Smith',
          },
        },
        {
          id: 4,
          text: 'O que é uma pilha (stack) em estruturas de dados?',
          options: [
            'Uma estrutura que segue o princípio "o último a entrar é o primeiro a sair"',
            'Um tipo de árvore',
            'Uma lista linear',
            'Uma matriz bidimensional',
          ],
          correctAnswer:
            'Uma estrutura que segue o princípio "o último a entrar é o primeiro a sair"',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 2,
            name: 'Prof. Jane Smith',
          },
        },
      ],
      createdAt: new Date('2022-02-20'),
    },
    {
      author: 'Elygledson',
      name: 'Exame de Redes de Computadores',
      questions: [
        {
          id: 5,
          text: 'O que é um endereço IP?',
          options: [
            'Um número de telefone',
            'Um identificador único para um dispositivo em uma rede',
            'Um endereço de e-mail',
            'Um endereço de casa',
          ],
          correctAnswer:
            'Um identificador único para um dispositivo em uma rede',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 3,
            name: 'Prof. Robert Johnson',
          },
        },
        {
          id: 6,
          text: 'O que é um firewall?',
          options: [
            'Um dispositivo de rede sem fio',
            'Um sistema de segurança que controla o tráfego de rede',
            'Um tipo de vírus de computador',
            'Uma impressora',
          ],
          correctAnswer:
            'Um sistema de segurança que controla o tráfego de rede',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 3,
            name: 'Prof. Robert Johnson',
          },
        },
      ],
      createdAt: new Date('2022-03-10'),
    },
    {
      author: 'Elygledson',
      name: 'Exame de Inteligência Artificial',
      questions: [
        {
          id: 7,
          text: 'O que é um algoritmo de aprendizado de máquina?',
          options: [
            'Um programa de computador que joga xadrez',
            'Um tipo de impressora',
            'Um conjunto de instruções para um microprocessador',
            'Um programa que permite que um computador aprenda com dados',
          ],
          correctAnswer:
            'Um programa que permite que um computador aprenda com dados',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 4,
            name: 'Prof. Maria Silva',
          },
        },
        {
          id: 8,
          text: 'Qual é o objetivo principal da visão computacional?',
          options: [
            'Analisar dados financeiros',
            'Reconhecer objetos em imagens e vídeos',
            'Calcular números primos',
            'Gerar texto automaticamente',
          ],
          correctAnswer: 'Reconhecer objetos em imagens e vídeos',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 4,
            name: 'Prof. Maria Silva',
          },
        },
      ],
      createdAt: new Date('2022-04-05'),
    },
    {
      author: 'Elygledson',
      name: 'Exame de Sistemas Operacionais',
      questions: [
        {
          id: 9,
          text: 'O que é um sistema de arquivos?',
          options: [
            'Uma pasta no computador',
            'Uma ferramenta de edição de texto',
            'Uma estrutura que organiza e armazena dados em dispositivos de armazenamento',
            'Um aplicativo de email',
          ],
          correctAnswer:
            'Uma estrutura que organiza e armazena dados em dispositivos de armazenamento',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 5,
            name: 'Prof. Carlos Mendes',
          },
        },
        {
          id: 10,
          text: 'O que é multitarefa em sistemas operacionais?',
          options: [
            'Execução de várias tarefas ao mesmo tempo',
            'Execução de uma única tarefa por vez',
            'Um tipo de mouse',
            'Um componente de hardware',
          ],
          correctAnswer: 'Execução de várias tarefas ao mesmo tempo',
          difficulty: Difficulty.MEDIUM,
          category: 'Ciência da Computação',
          score: 20,
          author: {
            id: 5,
            name: 'Prof. Carlos Mendes',
          },
        },
      ],
      createdAt: new Date('2022-05-20'),
    },
  ];

  constructor(private router: Router) {}

  navigateToCreateExam(): void {
    this.router.navigate(['/create-exam']); // Substitua 'caminho-da-rota' pelo caminho correto da rota
  }

  drop(event: CdkDragDrop<Exam[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
