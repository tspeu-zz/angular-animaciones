import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('animacionChula',[
      state('pequeño', style({transform : 'scale(1)'})),
      state('grande',  style({transform : 'scale(2)'})),
    ]),
    transition('pequeño => grande', animate('100ms ease-in')),
  ]
})
export class AppComponent {
  title = 'app';
  state : string = 'pequeño';
  animado(){
    this.state = (this.state === 'pequeño' ? 'grande' : 'pequeño');
  }
}
