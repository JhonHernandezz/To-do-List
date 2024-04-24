import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './components/view/view.component';
import { AddComponent } from './components/add/add.component';



@NgModule({
  declarations: [HeaderComponent, InputComponent, ViewComponent, AddComponent],
  exports: [HeaderComponent, InputComponent, ReactiveFormsModule],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
