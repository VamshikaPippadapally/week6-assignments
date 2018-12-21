import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OthersComponent } from './others/others.component';

const routes: Routes = [
  {
    path: '',
    component: OthersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherserviesRoutingModule { }
