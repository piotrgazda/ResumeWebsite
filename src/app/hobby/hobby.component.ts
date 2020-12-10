import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-hobby",
  templateUrl: "./hobby.component.html",
  styleUrls: ["./hobby.component.css"],
})
export class HobbyComponent implements OnInit {
  constructor() {}
  @Input("hobby") hobby;
  ngOnInit() {}
}