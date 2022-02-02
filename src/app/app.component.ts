import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Scuttles';

  public data: any;
  public form: FormGroup;
  public formBuilder: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      newGameName: [''],
      game: this.fb.group({
        playerName: ['']
      })
    });
  }

  public ngOnInit(): void {
  }

  public addGame(data: any): void {
    this.data = {
      games: [],
      newGameName: data.target.value
    };
    this.data.games.push({
      name: data.target.value,
      players: [],
      newPlayerName: '',
      betLog: [],
    });

    console.log(this.data.games);
  }

  public addPlayer(game: any): void {
    console.log(game);
    game.players.push({
        name: game.playerName,
        points: 1000,
        bet: {
          points: 0,
          win: null
        }
      }
    );
    game.playerName = '';
  }

  // public givePointsToPlayer(player: any, points: any): void {
  //   player.points = points;
  // }
  //
  // public bet(player: any, win: any): void {
  //   player.points -= 1;
  //   player.bet.points += 1;
  //   player.bet.win = win
  // }
  //
  // public cancelBet(player: any): void {
  //   player.points += player.bet.points;
  //   player.bet.points = 0;
  //   player.bet.win = null;
  // }
  //
  // public payOut(game: any, win: any): void {
  //   let lostBetting = 0;
  //   let wonBetting = 0;
  //   let log = '';
  //   for (let player of game.players) {
  //     if (player.bet.win !== win) {
  //       lostBetting += player.bet.points;
  //       log += player.name + ' lost ' + player.bet.points + ';';
  //     } else {
  //       wonBetting += player.bet.points;
  //       player.points += player.bet.points;
  //     }
  //   }
  //   for (let player of game.players) {
  //     if (player.bet.win === win) {
  //       let share = player.bet.points / wonBetting;
  //       player.points += share * lostBetting;
  //       log += player.name + ' won ' + (share * lostBetting) + ';';
  //     }
  //     player.bet.points = 0;
  //     player.bet.win = null;
  //   }
  //   game.betLog.push(log)
  // }
  //
  // public saveToLocalStorage(games: any): void {
  //   localStorage.setItem('edenBettingBackup', JSON.stringify(games));
  // }
  //
  // public loadFromLocalStorage(games: any): void {
  //   // let state = JSON.parse(localStorage.getItem('edenBettingBackup'));
  //   // for (let game of state) {
  //   //   games.push(game);
  //   // }
  // }
  //
  // public formatPoints(number: any): string {
  //   let formatter = new Intl.NumberFormat(`en-US`, {
  //     currency: `BTC`,
  //     style: 'currency',
  //   });
  //   return formatter.format(number);
  // }
}
