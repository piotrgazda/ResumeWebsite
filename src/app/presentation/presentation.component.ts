import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  constructor() { }
  my_presentation_text = 'My name is Piotr Gazda. I\'m software developer with Masters degree in computer science.'
                         + ' I graduated Silesian University of Technology. I like solving logical puzzles and looking for solutions to  complex problems. '
                         + 'This website is built as an extended version of my resume. '

  ngOnInit() {
  }

}
