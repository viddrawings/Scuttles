import {Component, OnInit} from '@angular/core';
import {GameData} from "./model/gameData.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Scuttles';

  public data: GameData = {
    games: [],
    newGameName: ''
  };

  public ngOnInit(): void {
    this.addGame(this.data);
  }

  public addGame(data: any): void {
    console.log(data);
    this.data.games.push({
      name: data.newGameName,
      players: [],
      newPlayerName: '',
      betLog: [],
    });
  }

  public addPlayer(game: any): void {
    game.players.push({
        name: game.newPlayerName,
        points: 1000,
        bet: {
          points: 0,
          win: null
        }
      }
    );
    game.newPlayerName = '';
  }

  public givePointsToPlayer(player: any, points: any): void {
    player.points = points;
  }

  public bet(player: any, win: any): void {
    player.points -= 1;
    player.bet.points += 1;
    player.bet.win = win
  }

  public cancelBet(player: any): void {
    player.points += player.bet.points;
    player.bet.points = 0;
    player.bet.win = null;
  }

  public payOut(game: any, win: any): void {
    let lostBetting = 0;
    let wonBetting = 0;
    let log = '';
    for (let player of game.players) {
      if (player.bet.win !== win) {
        lostBetting += player.bet.points;
        log += player.name + ' lost ' + player.bet.points + ';';
      } else {
        wonBetting += player.bet.points;
        player.points += player.bet.points;
      }
    }
    for (let player of game.players) {
      if (player.bet.win === win) {
        let share = player.bet.points / wonBetting;
        player.points += share * lostBetting;
        log += player.name + ' won ' + (share * lostBetting) + ';';
      }
      player.bet.points = 0;
      player.bet.win = null;
    }
    game.betLog.push(log)
  }

  public saveToLocalStorage(games: any): void {
    localStorage.setItem('edenBettingBackup', JSON.stringify(games));
  }

  public loadFromLocalStorage(games: any): void {
    // let state = JSON.parse(localStorage.getItem('edenBettingBackup'));
    // for (let game of state) {
    //   games.push(game);
    // }
  }

  public formatPoints(number: any): string {
    let formatter = new Intl.NumberFormat(`en-US`, {
      currency: `BTC`,
      style: 'currency',
    });
    return formatter.format(number);
  }
}
