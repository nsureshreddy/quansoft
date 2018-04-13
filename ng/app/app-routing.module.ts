import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlwaysAuthGuard } from './authguard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
