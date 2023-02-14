import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { FirebaserService } from '../servico/firebaser.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  userId = localStorage.getItem('userId');
  form: FormGroup;  
  user: any = {};
  public perfil!: string;

  constructor(    
    private activatedRoute: ActivatedRoute,
    private firebase: FirebaserService
    ) {}

  ngOnInit() {
   /* this.perfil = this.activatedRoute.snapshot.paramMap.get('id') as string;   
    /* this.validForm(); */
    /* this.firebase.consultaOne().subscribe(results => this.user = results );
    console.log('fora',this.user.valueChanges); */
    this.firebase.consultaOne().subscribe(results => this.user = results );
  }

 /*  validForm(){
    this.form = this.formBuilder.group({
      nome: [{value: '', disabled: true}],
      cpf: [{value: '', disabled: true}],
      celular: [''],
      unidade: [{value: '', disabled: true}],
      cursos: [{value: '', disabled: true}],
      turma: [{value: '', disabled: true}]

    })
  } */
  
}

export class Reparo{
  nome: string;
  cpf: string;
  celular: string;
  unidade_curso: string;
  curso_curso: string;
  turma: string;
}
