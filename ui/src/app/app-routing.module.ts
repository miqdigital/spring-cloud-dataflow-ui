import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevGuard } from './shared/support/dev.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'streams/list'
  },
  {
    path: 'dev',
    loadChildren: () => import('./dev/dev.module').then(m => m.DevModule),
    canLoad: [DevGuard]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
