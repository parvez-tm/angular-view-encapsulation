import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-top',
  imports: [],
  templateUrl: './top.component.html',
  styleUrl: './top.component.css',
  encapsulation: ViewEncapsulation.None // Makes the css globally available
})
export class TopComponent {

}
