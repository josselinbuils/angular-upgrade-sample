import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  constructor(@Inject('visualizationApi') visualizationApi: any) {
    this.title = visualizationApi.getHello();
  }
}
