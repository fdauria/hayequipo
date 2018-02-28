import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Game} from "../game.model";
import {DatePipe} from "@angular/common";
import {Observable} from "rxjs/Observable";
import {isNullOrUndefined} from "util";
import Api from "../../service/api.util";

@Injectable()
export class GameService {

  private addUrl = "/games/add";
  private findUrl = "/games/find";

  constructor(private http: HttpClient) {}

  findByDate(date: Date) : Observable<any>{
    const pipe = new DatePipe('en-US');
    const dateParam = isNullOrUndefined(date) ? "": "date="+pipe.transform(date,"yyyy-MM-dd");
    let requestUrl = Api.request(this.findUrl, dateParam);
    return this.http.get<Game>(requestUrl);
  }

  addNewGame(game: Game) : Observable<any>{
    game.dateTime.utc(true); //fixes utc time
    if(isNullOrUndefined(game)) throw new Error("addNewGame - Game cannot be: "+game);
    let requestUrl = Api.request(this.addUrl, "");
    return this.http.post<Game>(requestUrl, game);
  }

  joinGame(gameId: Number) : Observable<any>{
    const userJoinUrl = `/games/${gameId}/join`;
    const requestUrl = Api.request(userJoinUrl,"");
    return this.http.get<Game>(requestUrl);
  }

  exitGame(gameId: Number) : Observable<any>{
    const userRemoveUrl = `/games/${gameId}/remove`;
    const requestUrl = Api.request(userRemoveUrl,"");
    return this.http.get<Game>(requestUrl);
  }

  findById(gameId: Number) : Observable<any>{
    const findUrl = `/games/${gameId}`;
    let requestUrl = Api.request(findUrl, "");
    return this.http.get<Game>(requestUrl);
  }
}
