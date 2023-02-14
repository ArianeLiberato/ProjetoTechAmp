import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public appPages = [
    { title: 'Início', url: '/inicio/inicio', icon: 'home' },
    { title: 'Perfil', url: '/perfil/perfil', icon: 'person' },
    { title: 'Sair', url: '/folder/Sair', icon: 'exit' }
  ];

  nameUser = localStorage.getItem('nome');
  
  constructor() {}


  ngOnInit(): void {   
  }
}

