// MÓDULOS IMPORTADOS
import { Routes } from '@angular/router'; // Importar RouterModule
import { HomeComponent } from './pages/home/home.component'; // Importar componente home
import { ClimaComponent } from './pages/clima/clima.component'; // Importar componente clima
import { githubComponent } from './pages/github/github.component'; // Importar componente GitHub
import { NasaComponent } from './pages/nasa/nasa.component'; // Importar componente NASA
import { NgModule } from '@angular/core'; // Importar NgModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { GestionArchivosComponent } from './components/gestion-archivos/gestion-archivos.component';
import { CameraComponent } from './components/camera/camera.component';

// RUTAS
export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Inicio' }, // Ruta inicial
    { path: 'clima', component: ClimaComponent, title: 'Clima' }, // Ruta clima
    { path: 'github', component: githubComponent, title: 'GitHub' }, // Ruta GitHub
    { path: 'apod', component: NasaComponent, title: 'APOD' }, // Ruta NASA
    { path: 'gestion-archivos', component: GestionArchivosComponent, title: 'Gestion de archivos' },
    { path: 'camera', component: CameraComponent, title: 'Camera' },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Ruta por defecto
];

// MODULO
import { CommonModule } from '@angular/common';

// COMPONENTE NgModule
@NgModule({
  declarations: [NasaComponent, GestionArchivosComponent], // Componentes declarados
  imports: [CommonModule, FormsModule], // Módulos importados
})
export class OtroModulo { } // Exportar componente
