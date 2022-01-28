import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RickandmortyComponent } from './rickandmorty/rickandmorty.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'rickandmorty', component: RickandmortyComponent
  },
  {
    path: '**', component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
