import {Component} from '@angular/core';
import {interval} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'MyRxJs';
  phones = ["iPhone 7", "LG G 5", "Honor 9", "Idol S4", "Nexus 6P"];
  phone$ = interval(1000).pipe(map( (i: number )=> this.phones[i]));
  // comment
}
