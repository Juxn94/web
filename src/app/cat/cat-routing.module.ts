import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatCreateComponent } from './cat-create/cat-create.component';
import { CatEditComponent } from './cat-edit/cat-edit.component';

const routes: Routes = [
  {
    path: 'cats',
    children: [
      {
        path: 'cat-list',
        component: CatListComponent
      },
      {
        path: 'cat-create',
        component: CatCreateComponent
      },
      {
        path: 'cat-edit',
        component: CatEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatRoutingModule { }
