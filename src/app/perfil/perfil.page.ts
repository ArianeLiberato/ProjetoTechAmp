import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
 
  form: FormGroup;  

  public perfil!: string;
  constructor(    
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder    
    ) {}

  ngOnInit() {
   this.perfil = this.activatedRoute.snapshot.paramMap.get('id') as string;   
    this.validForm();
  }

  validForm(){
    this.form = this.formBuilder.group({
      nome: [{value: '', disabled: true}],
      cpf: [{value: '', disabled: true}],
      celular: [''],
      unidade: [{value: '', disabled: true}],
      cursos: [{value: '', disabled: true}],
      turma: [{value: '', disabled: true}]

    })
  }
  
}
