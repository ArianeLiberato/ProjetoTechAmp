import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { FirebaseService } from '../servico/firebasec.service';
import { FirebaserService } from '../servico/firebaser.service';
import { InicioPage } from '../inicio/inicio.page';

@Component({
  selector: 'app-reparo',
  templateUrl: './reparo.page.html',
  styleUrls: ['./reparo.page.scss'],
})
export class ReparoPage implements OnInit {

  form!: FormGroup;

  constructor(
    private firebase: FirebaserService,

    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private router: Router

  ) { }

  ngOnInit() {
    this.validaForm();
  }


  /* this.firebase.cadastro(item); */

  validaForm(){
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      estado: ['', [Validators.required]],
      regiao: ['', [Validators.required]],
      unidade: ['', [Validators.required]],
      curso: ['', [Validators.required]],
      sala: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
      problema: ['', [Validators.required]],
      descricao: ['', [Validators.required]]
      
    })
  }


  cadastrar():void{
    this.firebase.cadastro(this.form.value);
    //console.log(this.form.value);
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
    regiao:  [{
      interior : "interior",
      rio_granderio : "rio_granderio"
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
