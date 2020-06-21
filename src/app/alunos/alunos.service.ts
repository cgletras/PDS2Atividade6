import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    {id: '1', nome: 'Carlos Gustavo', email: 'cgletras@gmail.com'},
    {id: '2', nome: 'Kal El', email: 'kalel@krypton.com.kr'},
    {id: '3', nome: 'Bruce Wayne', email: 'bwayne1939@waynetech.com'},
    {id: '4', nome: 'Hall Jordan', email: 'gl2814@oa.com'},
    {id: '5', nome: 'Diana Prince', email: 'ww1984@themyceria.com.tr'},
  ];

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: String) {
    for (let i = 0; i < this.alunos.length; i++) {
      let aluno = this.alunos[i];
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }

  constructor() { }
}
