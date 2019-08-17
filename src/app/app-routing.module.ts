import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListaCarrosComponent } from './home/lista-carros/lista-carros.component';
import { AcessoriosCarroComponent } from './home/acessorios-carro/acessorios-carro.component';
import { ListaCarrosModule } from './home/lista-carros/lista-carros.module';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'lista-carros', component: ListaCarrosComponent },
  { path: 'lista-acessorios/:carro', component: AcessoriosCarroComponent, loadChildren: () => import('./home/lista-carros/lista-carros.module').then(m => m.ListaCarrosModule) }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
