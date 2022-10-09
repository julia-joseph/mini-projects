import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentPlaceholderComponent } from './content-placeholder.component';

const routes: Routes = [
  {
    path: '',
    component: ContentPlaceholderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentPlaceholderRoutingModule {}
