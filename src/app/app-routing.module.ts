import {Route} from "@angular/router";

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('src/app/modules/login/login.module').then(m => m.LoginModule)},
  { path: 'register', loadChildren: () => import('src/app/modules/register/register.module').then(m => m.RegisterModule)},
  { path: 'calculator', loadChildren: () => import('src/app/modules/calculator/calculator.module').then(m => m.CalculatorModule)},
  { path: 'schedule', loadChildren: () => import('src/app/modules/schedule/schedule.module').then(m => m.ScheduleModule)}
];
