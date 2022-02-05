import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.css']
})
export class BetsComponent implements OnInit {

  @Input() public playerName = 'Test';
  @Input() public points = 1000;
  @Input() public status = 'win';

  constructor() { }

  public ngOnInit(): void {
  }

}
