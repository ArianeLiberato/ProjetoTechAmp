import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { FirebaserService } from '../servico/firebaser.service';


@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  form!: FormGroup;

  constructor(
    private firebase: FirebaserService,

    private formBuilder: FormBuilder,
    private alertCtrl: AlertController

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

export class Configuracao{
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
  windows: "windows",
  office : "office"
}];
descricao: string;
}