import { Routes } from '@angular/router';
import { PhotoMainComponent } from './photo/photo-main/photo-main.component';

export const AppRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'photo' },
    { path: 'photo', component: PhotoMainComponent }
];
