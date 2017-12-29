import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes,group,query} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('animacionChula',[
      state('peque, void', style({transform : 'scale(1)',
                          color: 'pink', borderColor: 'pink'
                                })),
      state('grande, void',  style({transform : 'scale(2)',
                              color: 'green', borderColor: 'pink'})),
      transition('peque <=> grande',[
        style({transform : 'scale(1)'}),
        animate( '1.8s ease-in',style({
                          transform : 'scale(2)',
                          opacity: 50 
                          }))
      ]),
      // transition(':grande',[
      //   style({transform : 'scale(2)'}),
      //   animate( 1000,style({transform :'scale(1)'}))
      // ]),
      // transition(':increment', 
      //   group([
      //     query(':enter', [
      //       style({ color: 'blue', transform : 'scale(1)' }),
      //       animate('1000 ease-out', style({transform :'scale(2)'}))
      //     ]),
      //   ]),  
      // ),
    ]),
  ]
})
export class AppComponent {
  title = 'app';
  state : string = 'peque';
  animado(){
    this.state = (this.state === 'peque' ? 'grande' : 'peque');

  }
}
