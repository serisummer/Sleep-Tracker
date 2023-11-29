import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'overnight-sleep',
    loadChildren: () => import('./overnight-sleep/overnight-sleep.module').then( m => m.OvernightSleepPageModule)
  },
  {
    path: 'sleepiness',
    loadChildren: () => import('./sleepiness/sleepiness.module').then( m => m.SleepinessPageModule)
  },
  {
    path: 'sleepiness-log',
    loadChildren: () => import('./sleepiness-log/sleepiness-log.module').then( m => m.SleepinessLogPageModule)
  },
  {
    path: 'overnight-sleep-log',
    loadChildren: () => import('./overnight-sleep-log/overnight-sleep-log.module').then( m => m.OvernightSleepLogPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
