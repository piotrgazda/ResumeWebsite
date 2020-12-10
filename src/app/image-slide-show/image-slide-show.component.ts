import { Component, OnInit, Input } from "@angular/core";
import { trigger, transition, useAnimation } from "@angular/animations";
import { style, animate, animation } from "@angular/animations";

export const slideIn = animation([
  style({ opacity: 0, transform: "scale(0.5)" }), // start state
  animate(
    "{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    style({ opacity: 1, transform: "scale(1)" })
  ),
]);

export const slideOut = animation([
  animate(
    "{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    style({ opacity: 0, transform: "scale(0.5)" })
  ),
]);
@Component({
  selector: "app-image-slide-show",
  templateUrl: "./image-slide-show.component.html",
  styleUrls: ["./image-slide-show.component.css"],
  providers: [],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => *", [
        useAnimation(slideIn, { params: { time: "500ms" } }),
      ]),
      transition("* => void", [
        useAnimation(slideOut, { params: { time: "500ms" } }),
      ]),
    ]),
  ],
})
export class ImageSlideShowComponent implements OnInit {
  imageIdx = 0;
  @Input() imagesSources: string[];
  @Input() captionText: string;

  ngOnInit() {}

  onClick() {}
  onPrevious() {
    this.imageIdx =
      (this.imageIdx - 1 + this.imagesSources.length) %
      this.imagesSources.length;
  }
  onNext() {
    this.imageIdx = (this.imageIdx + 1) % this.imagesSources.length;
  }

  constructor() {}
}
