import { Component , Input } from '@angular/core';
import { Veld } from './veld';


@Component({
  selector: 'velden',
  templateUrl : 'app/velden.show.html'
})

export class veldenComponent {
  @Input() veld: Veld;
}
