import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  imports: [MatCardModule],
  styleUrls: ['./dashboard-container.component.scss'],
  standalone: true
})
export class DashboardContainerComponent {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

}
