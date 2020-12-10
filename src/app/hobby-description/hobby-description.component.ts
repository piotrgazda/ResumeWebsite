import { Input, EventEmitter,Component, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-hobby-description",
  templateUrl: "./hobby-description.component.html",
  styleUrls: ["./hobby-description.component.css"],
})
export class HobbyDescriptionComponent implements OnInit {
  constructor() {}

  @Input("hobby") hobby;
  @Output() finished = new EventEmitter<boolean>();
  ngOnInit() {}
  onClick(){
    this.finished.emit();
    
  }
}
