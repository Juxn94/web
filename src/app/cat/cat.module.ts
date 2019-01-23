import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatRoutingModule } from './cat-routing.module';
import { CatCreateComponent } from './cat-create/cat-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CatEditComponent } from './cat-edit/cat-edit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CatListComponent,
    CatCreateComponent,
    CatEditComponent
  ],
  imports: [
    CommonModule,
    CatRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CatModule { }
