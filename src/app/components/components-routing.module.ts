import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { DynamicComponent } from './dynamic/dynamic.component';

const routes: Routes = [
  {
    path: '', component: ComponentsComponent, children: [
      { path: 'dynamic', component: DynamicComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
