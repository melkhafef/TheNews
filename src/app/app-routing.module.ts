import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeadlineComponent} from './headline/headline.component';
import {SearchComponent} from './search/search.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: 'headline',
    component : HeadlineComponent
  },
  {
    path:'search',
    component : SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
