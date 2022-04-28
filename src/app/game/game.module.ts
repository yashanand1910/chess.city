import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [GameComponent, BoardComponent],
  imports: [CommonModule, GameRoutingModule, IonicModule, SharedModule]
})
export class GameModule {}
