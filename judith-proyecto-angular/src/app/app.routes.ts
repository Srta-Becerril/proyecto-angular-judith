import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClimaComponent } from './pages/clima/clima.component';

export const routes: Routes = [

    {path: '', component:HomeComponent, title :'Inicio'},
    {path: 'clima', component:ClimaComponent, title :'Clima'},
    {path: '**',redirectTo: '',pathMatch:'full' },
];

