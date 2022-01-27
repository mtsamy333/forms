import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RdfComponent } from './rdf/rdf.component';
import { TdfComponent } from './tdf/tdf.component';

const routes: Routes = [
  {
    path: 'tdf',
    component:TdfComponent
  },
  {
    path: 'rdf',
    component: RdfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
