import { Component, OnInit } from '@angular/core';
import { Chess, ChessInstance } from 'chess.js';
import { Logger } from '@shared';

const log = new Logger('BoardComponent');

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  private board?: ChessInstance;

  constructor() {}

  ngOnInit(): void {
    this.initialize();
  }

  /**
   * Arrange pieces on board for new/existing game
   * @param {string} [config] - Board configuration in Forsyth-Edwards Notation
   */
  initialize(config?: string) {
    this.board = new Chess(config);
  }
}
