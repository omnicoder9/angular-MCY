import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-comp-one',
  imports: [MatSlideToggleModule],
  templateUrl: './comp-one.component.html',
  styleUrl: './comp-one.component.less'
})
export class CompOneComponent {
  message = 'This is a message from the component!';

}
