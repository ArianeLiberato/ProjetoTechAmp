import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { FirebaserService } from '../servico/firebaser.service';



@Component({
  selector: 'app-reparo',
  templateUrl: './reparo.page.html',
  styleUrls: ['./reparo.page.scss'],
})
export class ReparoPage implements OnInit {

  
  user: any = {};
  constructor(
    private firebase: FirebaserService,
    private alertCtrl: AlertController,
    private router: Router

  ) { }

  ngOnInit() {
    //console.log(this.userId)
    this.firebase.consultaOne().subscribe(results => this.user = results );
    console.log('fora',this.user.valueChanges);
    //this.validaForm();
   
   
    //console.log(this.user);
  }


  /* this.firebase.cadastro(item); */

  /* validaForm(){
    this.form = this.formBuilder.group({
      nome: ['Maria', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      estado: ['', [Validators.required]],
      regiao: ['', [Validators.required]],
      unidade: ['', [Validators.required]],
      curso: ['', [Validators.required]],
      sala: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
      problema: ['', [Validators.required]],
      descricao: ['', [Validators.required]]
      
    }) */
  


  cadastrar(form):void{
    this.firebase.atualizar(form.value);
    console.log(form.value);
  }
  async alert(){
    const alert = this.alertCtrl.create({
      mode:'ios',
      header: 'Chamado cadastrado com sucesso!',
      buttons: [
        {
          text: 'Inicio',
          role: 'null',
          handler: () => {

        },
      }
      ]
    });

    (await alert).present();



}
}
  export class Reparo{
    nome: string;
    cpf: string;
    estado: [{
      rj : "rj"
    }
    ];
    unidade: [{
      angradosreis : "angradosreis",
      barradopirai : "barradopirai",
      barramansa : "barramansa",

    }
    ];
    curso : [{
      administracao : "administracao"
    }
  ];
  sala: string;
  
  problema : [{
    defeito : "defeito"
  }];
  descricao: string;

}