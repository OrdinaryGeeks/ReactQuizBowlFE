export interface GameState {
  gameName: string;
  id: number;
  status: string;
  scoreToWin: number;
  maxPlayers: number;
  questionIndex: number;
  playerCreatorID: number;
}
