import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-me',
  templateUrl: './why-me.component.html',
  styleUrls: ['./why-me.component.scss']
})
export class WhyMeComponent implements OnInit {

  technologies = [
    {
      name: "HTML5"
    },
    {
      name: "CSS3"
    },
    {
      name: "JavaScript"
    },
    {
      name: "React"
    },
    {
      name: "Angular"
    },
    {
      name: "TypeScript"
    },
    {
      name: "Node.js"
    },
    {
      name: "Express.js"
    },
    {
      name: "MongoDB"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
