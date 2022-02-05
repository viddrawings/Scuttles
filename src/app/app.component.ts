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

  constructor(private formBuilder: FormBuilder) {
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
        playerNameBlueTeam: [''],
        playerGivePointsBlueTeam: [''],
      }));
    }

    for (let i = this.playersRedTeamFormControls.length; i < 5; i++) {
      this.playersRedTeamFormControls.push(this.formBuilder.group({
        playerNameRedTeam: [''],
        playerGivePointsRedTeam: [''],
      }));
    }
  }

  public playerWin(player: any): void {
  //   todo
  }

  public playerLose(player: any): void {
  // todo
  }

  public clearPlayer(player: any): void {
  // todo
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

  }
}
