import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const AppRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'studio64' },
    { path: 'studio64', component: AppComponent }
];
