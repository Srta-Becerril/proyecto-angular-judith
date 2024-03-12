// MÓDULOS IMPORTADOS
import { Routes } from '@angular/router'; // Importar RouterModule
import { HomeComponent } from './pages/home/home.component'; // Importar componente home
import { ClimaComponent } from './pages/clima/clima.component'; // Importar componente clima
import { githubComponent } from './pages/github/github.component'; // Importar componente GitHub
import { NasaComponent } from './pages/nasa/nasa.component'; // Importar componente NASA
import { NgModule } from '@angular/core'; // Importar NgModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { FullCalendarModule } from '@fullcalendar/angular'; // Importar FullCalendar
import { GestionArchivosComponent } from './components/gestion-archivos/gestion-archivos.component'; // Importar componente GestionArchivos
import { CameraComponent } from './components/camera/camera.component'; // Importar componente Camera
import { WindowComponent } from './components/window/window.component'; // Importar componente Window
import { CalculadoraComponent } from './components/calculadora/calculadora.component'; // Importar componente Calculadora
import { RelojMundialComponent } from './components/reloj/reloj.component'; // Importar componente Reloj

// RUTAS
export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Inicio' }, // Ruta inicial
    { path: 'clima', component: ClimaComponent, title: 'Clima' }, // Ruta clima
    { path: 'github', component: githubComponent, title: 'GitHub' }, // Ruta GitHub
    { path: 'apod', component: NasaComponent, title: 'APOD' }, // Ruta NASA
    { path: 'gestion-archivos', component: GestionArchivosComponent, title: 'Gestion de archivos' }, // Ruta GestionArchivos
    { path: 'camera', component: CameraComponent, title: 'Camera' }, // Ruta Camera
    { path: 'window', component: WindowComponent, title: 'Window' }, // Ruta Window
    { path: 'calculadora', component: CalculadoraComponent, title: 'Calculadora' }, // Ruta Calculadora
    { path: 'reloj', component: RelojMundialComponent, title: 'Reloj Mundial' }, // Ruta Reloj
    { path: '**', redirectTo: '', pathMatch: 'full' } // Ruta por defecto
];

// MODULO
import { CommonModule } from '@angular/common';

// COMPONENTE NgModule
@NgModule({
  declarations: [NasaComponent, GestionArchivosComponent, CameraComponent, WindowComponent, CalculadoraComponent, RelojMundialComponent], // Componentes declarados
  imports: [CommonModule, FormsModule, FullCalendarModule], // Módulos importados
})
export class OtroModulo { } // Exportar componente
