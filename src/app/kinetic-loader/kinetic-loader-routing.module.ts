import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KineticLoaderComponent } from './kinetic-loader.component';

const routes: Routes = [{ path: '', component: KineticLoaderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KineticLoaderRoutingModule {}
