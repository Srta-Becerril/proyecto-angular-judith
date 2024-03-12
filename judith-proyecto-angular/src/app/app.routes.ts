// MÓDULOS IMPORTADOS
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { RouterModule, Routes } from '@angular/router'; // Importar RouterModule
import { HomeComponent } from './pages/home/home.component'; // Importar componente home
import { ClimaComponent } from './pages/clima/clima.component'; // Importar componente clima
import { githubComponent } from './pages/github/github.component'; // Importar componente GitHub
import { NasaComponent } from './pages/nasa/nasa.component'; // Importar componente NASA
import { NgModule } from '@angular/core'; // Importar NgModule
import { GestionArchivosComponent } from './components/gestion-archivos/gestion-archivos.component'; // Importar componente GestionArchivos
import { CameraComponent } from './components/camera/camera.component'; // Importar componente Camera
import { WindowComponent } from './components/window/window.component'; // Importar componente Window
import { CalculadoraComponent } from './components/calculadora/calculadora.component'; // Importar componente Calculadora
import { RelojMundialComponent } from './components/reloj/reloj.component'; // Importar componente Reloj
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { AddTutorialComponent } from './pages/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './pages/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './pages/tutorial-list/tutorial-list.component';
import { BrowserModule } from '@angular/platform-browser';

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
    { path: 'añadirNota', component:AddTutorialComponent, title: 'Añadir nota' }, // Ruta AñadirNota
    { path: 'tutorials/:id', component:TutorialDetailsComponent, title: 'Detalles' }, // Ruta Detalles
    { path: 'listadoNotas', component:TutorialsListComponent, title: 'Listado' }, // Ruta Listado
    { path: '**', redirectTo: '', pathMatch: 'full' } // Ruta por defecto
];

// COMPONENTE NgModule
@NgModule({
  declarations: [NasaComponent, GestionArchivosComponent, CameraComponent, WindowComponent, CalculadoraComponent, RelojMundialComponent], // Componentes declarados
  imports: [CommonModule, FormsModule, BrowserModule], // Módulos importados

})
export class OtroModulo { } // Exportar componente
