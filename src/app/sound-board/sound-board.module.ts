import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoundBoardRoutingModule } from './sound-board-routing.module';
import { SoundBoardComponent } from './sound-board.component';


@NgModule({
  declarations: [
    SoundBoardComponent
  ],
  imports: [
    CommonModule,
    SoundBoardRoutingModule
  ]
})
export class SoundBoardModule { }
