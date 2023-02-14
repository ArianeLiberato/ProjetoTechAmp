import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../servico/authentication.service';

import { FirebaserService } from '../servico/firebaser.service';



@Component({
  selector: 'app-reparo',
  templateUrl: './reparo.page.html',
  styleUrls: ['./reparo.page.scss'],
})
export class ReparoPage implements OnInit {

  userId = localStorage.getItem('userId');
  reparoCollection: AngularFirestoreCollection
  public reparo!: string;
  user: any = {};
  constructor(
    private firebase: FirebaserService,
    private alertCtrl: AlertController,
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private af: AngularFirestore,
  private authentication : AuthenticationService
  ) { }

  ngOnInit() {
    /* this.reparo = this.activatedRoute.snapshot.paramMap.get('id') as string; */
    //console.log(this.userId)
  /*   this.firebase.consultaOne(localStorage.getItem('userId'))
    this.firebase.consultaOne(localStorage.getItem('userId')).subscribe(results => console.log(results)); 
    this.firebase.consultaOne('userId');  
    this.authentication.getAuth().user.subscribe(results => {
      localStorage.setItem('userId', results.uid );
    });   */
    //this.validaForm();
   this.firebase.consultaOne().subscribe(results => this.user = results );
    
    /* console.log(this.user.valueChanges); */
    
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