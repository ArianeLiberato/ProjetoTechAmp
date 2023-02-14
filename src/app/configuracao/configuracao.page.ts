import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertController } from '@ionic/angular';
import { FirebaserService } from '../servico/firebaser.service';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  userId = localStorage.getItem('userId');
  reparoCollection: AngularFirestoreCollection
  public configuracao!: string;
  user: any = {};
  constructor(
    private firebase: FirebaserService,

    private formBuilder: FormBuilder,
    private alertCtrl: AlertController

  ) { }

  ngOnInit() {
   /*  this.validaForm(); */
    this.firebase.consultaOne().subscribe(results => this.user = results );
  }


  /* this.firebase.cadastro(item); */

 /*  validaForm(){
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
 */

  cadastrar(form):any{
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
  export class Configuracao{
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

    }];
    curso : [{
      administracao : "administracao"
    }];
  sala: string;
  patrimonio: string;
  problema : [{
    defeito : "defeito"
  }];
  descricao: string;

}