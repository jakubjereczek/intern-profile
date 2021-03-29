import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  descriptions: string[] = [
    "Miło, że tutaj jesteś:)",
    "Aplikuje na staż programistyczny!",
    "Poniżej przedstawie Ci projekty, które wyróżniłem w swoim portfolio"

  ]
  textIndex: number;
  letterIndex: number;
  text: string = ""

  isCursorHidden = false;

  constructor() {
    this.textIndex = 0;
    this.letterIndex = 0;
  }

  ngOnInit(): void {
    this.changeLetters();
    this.changeCursorVisibility();
  }

  changeLetters() {
    if (this.textIndex < this.descriptions.length) {
      if (this.letterIndex === this.descriptions[this.textIndex].length) {
        this.letterIndex = 0;
        this.textIndex++;
        setTimeout(() => {
          this.text = " "
          this.changeLetters();
        }, 2000)
        return;
      }
      this.text += this.descriptions[this.textIndex][this.letterIndex];
      this.letterIndex++;
    } else {
      this.textIndex = 0;
    }
    setTimeout(() => this.changeLetters(), 100);
  }

  changeCursorVisibility() {
    this.isCursorHidden = !this.isCursorHidden;
    setTimeout(() => this.changeCursorVisibility(), 400);
  }


}
