import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bottom',
  imports: [],
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.css',
  encapsulation: ViewEncapsulation.ShadowDom //if i kept the p color in top because it is view encapsulation none, it should have acepted it but it will not accept global css. In encapculation the component is capsulated and it will not take any outer css
})
export class BottomComponent {

}
