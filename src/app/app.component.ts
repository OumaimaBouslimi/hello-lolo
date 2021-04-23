import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-lolo';
  med='the best one';
  ouma=[1,2,3,4];
  bonjour(name){
    console.log(name);
    return name;
  }
}
