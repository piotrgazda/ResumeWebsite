import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects-table",
  templateUrl: "./projects-table.component.html",
  styleUrls: ["./projects-table.component.css"],
})
export class ProjectsTableComponent implements OnInit {
  constructor() {}
  projects = [
    {
      id: "0",
      name: "stylegan",
      description: "",
    },
  ];
  ngOnInit() {}
}
