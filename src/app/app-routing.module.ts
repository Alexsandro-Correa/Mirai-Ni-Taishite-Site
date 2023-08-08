import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatagameComponent } from './datagame/datagame.component';

const routes: Routes = [{ path: 'datagame', component: DatagameComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
