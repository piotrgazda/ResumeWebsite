import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from "@angular/animations";
@Component({
  selector: "app-hobbys-table",
  templateUrl: "./hobbys-table.component.html",
  styleUrls: ["./hobbys-table.component.css"],
  animations: [
    trigger("fadeInOutList", [
      state(
        "shown",
        style({
          opacity: 1,
        })
      ),
      state(
        "hidden",
        style({
          opacity: 0.0,
        })
      ),
      transition("shown => hidden", [animate("300ms")]),
      transition("hidden => shown", [animate("1000ms")]),
    ]),
    trigger("fadeInOutDescription", [
      state(
        "shown",
        style({
          opacity: 1,
        })
      ),
      state(
        "hidden",
        style({
          opacity: 0.0,
        })
      ),
      transition("shown => hidden", [animate("300ms")]),
      transition("hidden => shown", [animate("1000ms")]),
    ]),
  ],
})
export class HobbysTableComponent implements OnInit {
  constructor() {}
  isListShown = true;
  detailsName = null;
  contentToogle = false;
  clickedHobby = null;
  hobbys = [
    {
      id: "0",
      name: "speedsolving",
      description:
        "Speedsolving is a discipline involving solving logical puzzles as quickly as possible. The most famous puzzle is 3x3x3 Rubik's Cube, " +
        "but there are also competitions using variety of different puzzles for example using sizes of cubes " +
        "from 2x2x2 to 7x7x7, or other shapes like Pyraminx, Megaminx or Square-1. I'm mostly interested in solving classic 3x3x3 Rubik's Cube using different methods " +
        "including CFOP and Roux. I achieve average times under 20 seconds and currently training to get comfortable using Roux method.",
    },
    {
      id: "1",
      name: "chess",
      description:
        "Chess is two-player strategy board game. History of the game can be tracked down to the ancient Indian game Chaturanga, which is theorized " +
        "to be common ancestor of Chess,  Japanese Shogi and Chinese Xiangqi. I'm mostly playing the game in rapid time controls on lichess.org, where I achieve " +
        "peak rankings over 2200 points. I'm also following computer chess championships, which is great combination of chess and computer science. " +
        "In this field I'm especially interested in machine learning methods that are used in currently the best chess engines like Leela Chess Zero and Stockfish. ",
    },
    {
      id: "2",
      name: "maths",
      description:
        "Maths is hobby that I've had since primary school. My favourite thing in mathematics is art of solving unique interesting problems, " +
        'which mostly can be found on different national and international competitions like <a href="https://om.mimuw.edu.pl/" target="_blank" rel="noopener noreferrer">Polish Mathematical Olympiad</a>. ' +
        "I participated in those competitions when I was high school student and I follow next editions since that time. ",
    },
  ];
  ngOnInit() {}
  showDetails(hobby) {
    this.isListShown = false;
    this.clickedHobby = hobby;
  }
  hideDetails() {
    this.isListShown = true;
  }
  onFinishedFadingListEvent($event) {
    if (!this.isListShown) {
      this.contentToogle = true;
    }
  }
  onFinishedFadingDescriptionEvent($event) {
    if (this.isListShown) {
      this.contentToogle = false;
    }
  }
}
