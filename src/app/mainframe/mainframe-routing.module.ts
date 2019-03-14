import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrameComponent} from './frame/frame.component';
import {AuthGuardService} from '../shared/service/baseapi/auth-guard.service';
import {HomeComponent} from './home/home.component';

const routes: Routes = [{
  path: '', component: FrameComponent,
  canActivate: [AuthGuardService],
  children: [
    { path : '' , redirectTo : 'homeComponent', pathMatch: 'full'},
    { path: 'homeComponent', component: HomeComponent }, // 首页
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainframeRoutingModule { }
