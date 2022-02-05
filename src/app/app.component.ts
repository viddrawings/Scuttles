import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Scuttles';

  public data: any;

  public form: FormGroup;
  public submitted = false;

  public gameName: any;

  public betButtons = [
    'first-blood',
    'drake',
  ];
  public roles = [
    {
      name: 'top',
      url: './assets/Top_icon.png'
    },
    {
      name: 'mid',
      url: './assets/Middle_icon.png'
    },
    {
      name: 'adc',
      url: './assets/Bottom_icon.png'
    },
    {
      name: 'supp',
      url: './assets/Support_icon.png'
    },
    {
      name: 'jungle',
      url: './assets/Jungle_icon.png'
    }
  ];

//   win/ losses (also known as red/ blue) no limit
//   kda> 3.0 (100) (evens), kdx<3.0 (100) (evens), kda=3.0 (push so return 50)                            (options: >3.0, <3.0)
//   (supports excluded) cs>100/15mins (100) (evens), cs<100/15 (100) (evens), if exactly 100 then push (so return 50)                      (options: >100, <100)
//   First blood (50) (evens)                                    (options: red/blue)
//   Pentakill (30)  (1/100)                                   (options: red/blue)
//   Chemtech map (20) (payout is 1/6)                     (options:bet)
//   Hextech map (20) (payout is 1/6)                  (options:bet)
//   Ocean map (20) (payout is 1/6)              (options:bet)
//   Cloud map (20) (payout is 1/6)          (options:bet)
//   Infernal map (20) (payout is 1/6)                       (options:bet)
//   Mountain map (20) (payout is 1/6)              (options:bet)
//   First baron (50) (evens)                           (options:bet)
//   First tower (50) (evens)                            (options:bet)
//   death>5 (100) (evens), death<5 (100) (evens), death=5 (push so return 50)                            (options: >5, <5)

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      gameName: ['', Validators.required],
      playersBlueTeam: new FormArray([]),
      playersRedTeam: new FormArray([])
    });
  }

  get formControls() { return this.form.controls; }
  get playersBlueTeamFormControls() { return this.formControls['playersBlueTeam'] as FormArray; }
  get playersBlueTeam() { return this.playersBlueTeamFormControls.controls as FormGroup[]; }

  get playersRedTeamFormControls() { return this.formControls['playersRedTeam'] as FormArray; }
  get playersRedTeam() { return this.playersRedTeamFormControls.controls as FormGroup[]; }

  public onGameName(event: any): void {
    const gameName = event.target.value;
    this.gameName = gameName;

    for (let i = this.playersBlueTeamFormControls.length; i < 5; i++) {
      this.playersBlueTeamFormControls.push(this.formBuilder.group({
        playerName: [''],
        playerGivePoints: [''],
      }));
    }

    for (let i = this.playersRedTeamFormControls.length; i < 5; i++) {
      this.playersRedTeamFormControls.push(this.formBuilder.group({
        playerName: [''],
        playerGivePoints: [''],
      }));
    }
  }

  public disableUnusedPlayers(playerTeam: any): void {
   playerTeam.forEach((player: any) => {
     // todo: disable player row, when no playername filled in
     if(player.controls.playerName.value) {
       console.log('empty!!');
     }
   });
  }

  public playerWin(player: any): void {
    // todo: player.controls.playerGivePoints.value
  }

  public playerLose(player: any): void {
  // todo: player.controls.playerGivePoints.value
  }

  public clearPlayer(player: any): void {
    player.controls.playerGivePoints.reset();
    player.controls.playerName.reset();
  }

  public betButtonClicked(button: any): void {
    if (button === 'drake') {
    //  todo
    }
  }

  public onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    // display form values on success
    // alert(JSON.stringify(this.form.value, null, 4));
  }

  public saveGame(): void {
  //   todo: connect to firebase
  }
}
