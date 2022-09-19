import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})


export class DisplayDetailsComponent implements OnInit {

  display_details: boolean = false;
  color_toggle: boolean = false;
  password: string = 'tunafish123'
  click_log: Array<number> = []

  constructor() {
  }

  onBtnClick() {
    this.display_details = true;
    this.color_toggle = !this.color_toggle;
    this.click_log.push(this.click_log.length);
  }

  getColor(): Record<string, string> {
    if (this.click_log.length >= 5) {
      return {
        'backgroundColor': 'blue',
        'color': 'white'
      }
    }
    else {
      this.color_toggle = !this.color_toggle;
      let color: string = this.color_toggle ? 'red' : 'turquoise';
      return {
        'color': color,
      }
    }

  }

  ngOnInit(): void {
  }
}
