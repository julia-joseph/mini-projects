import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoundBoardComponent } from './sound-board.component';

const routes: Routes = [{ path: '', component: SoundBoardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoundBoardRoutingModule {}
