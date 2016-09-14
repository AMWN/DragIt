import { Component, Input , Output, EventEmitter} from '@angular/core';
import { Veld } from './veld';

@Component({
    selector: 'url2',
    templateUrl: 'app/controls/url2.component.html'
})

export class url2Component {
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
