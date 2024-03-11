import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClimaComponent } from './pages/clima/clima.component';
import { githubComponent } from './pages/github/github.component';
import { NasaComponent } from './pages/nasa/nasa.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Inicio' },
    { path: 'clima', component: ClimaComponent, title: 'Clima' },
    { path: 'github', component: githubComponent, title: 'GitHub' },
    { path: 'apod', component: NasaComponent, title: 'APOD' },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NasaComponent],
  imports: [CommonModule, FormsModule],
})
export class TuOtroModulo { }
