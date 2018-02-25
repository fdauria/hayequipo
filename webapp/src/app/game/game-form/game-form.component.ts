import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Game} from "../game.model";
import {isNullOrUndefined, isUndefined} from "util";
import {GameService} from "../service/game.service";

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {

  title = "Partido";

  descriptionLabel = "Descripción";
  dateLabel = "Fecha";
  timeLabel = "Hora";
  locationDescLabel = "Lugar";
  locationAddrLabel = "Dirección";


  @Input() game : Game;
  @Output() onSaved = new EventEmitter<boolean>();

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    if(isUndefined(this.game)) this.game = new Game()
  }

  saveGame() {
    if(isNullOrUndefined(this.game.id)) this.addNewGame();
  }

  addNewGame(){
    this.gameService.addNewGame(this.game).subscribe(
      // data => this.game = data
      data => {this.onSaved.emit(!isNullOrUndefined(data))}
    );

  }

  setTime(event){
    let time = event;
    this.game.dateTime.hours(isNullOrUndefined(time) ? 0 : event.substring(0,2));
    this.game.dateTime.minutes(isNullOrUndefined(time) ? 0 : event.substring(3,5));
    this.game.dateTime.seconds(0);
    this.game.dateTime.milliseconds(0);
  }

  getGameTime(){
    return isNullOrUndefined(this.game.dateTime) ? this.game.dateTime : this.game.dateTime.format("HH:mm")
  }

}