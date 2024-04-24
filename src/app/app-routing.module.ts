import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './shared/components/view/view.component';
import { AddComponent } from './shared/components/add/add.component';
import { UpdateComponent } from './shared/components/update/update.component';

const routes: Routes = [
  { 
    path: 'update', 
    component: UpdateComponent 
  },
  { 
    path: 'view', 
    component: ViewComponent 
  },
  { 
    path: 'add', 
    component: AddComponent 
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('../app/pages/auth/auth.module').then( m => m.AuthPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
