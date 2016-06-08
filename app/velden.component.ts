import { Component , Input } from '@angular/core';


@Component({
  selector: 'velden',
  templateUrl : 'app/velden.show.html'
})

export class veldenComponent {
  @Input() veld: Object;
}
