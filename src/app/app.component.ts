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
    const gamesName = event.target.value;

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

  public onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    // display form values on success
    // alert(JSON.stringify(this.form.value, null, 4));
  }
}
