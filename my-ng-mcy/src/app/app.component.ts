import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompOneComponent } from './comp-one/comp-one.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompOneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'my-ng-mcy';
}
