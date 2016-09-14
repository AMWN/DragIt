import { Component, Input , Output, EventEmitter} from '@angular/core';
import { Veld } from './veld';

@Component({
    selector: 'url',
    templateUrl: 'app/controls/url.component.html'
})

export class urlComponent {
  @Input() veld: Veld;
  @Input() pagina: Object;
  @Output() onDelete = new EventEmitter<Veld>();
  private edit;

  private toggleEdit(){
    this.edit = !this.edit;
  }

  deleteVeld(veld) {
    this.onDelete.emit(veld);
  }

}
