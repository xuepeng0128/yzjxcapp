import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from '../not-found/not-found.component';
import {UnitComponent} from './unit/unit.component';

const routes: Routes = [
  { path: 'unit', component: UnitComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DictionaryRoutingModule { }
