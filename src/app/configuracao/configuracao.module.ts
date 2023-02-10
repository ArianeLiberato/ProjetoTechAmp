import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ConfiguracaoPageRoutingModule } from './configuracao-routing.module';
import { ConfiguracaoPage } from './configuracao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracaoPageRoutingModule,
    ReactiveFormsModule //Módulo que contem as ferrametas forgroup e formbuilder par uso em formularios
  ],
  declarations: [ConfiguracaoPage]
})
export class ConfiguracaoPageModule {}
