import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dragula } from 'ng2-dragula/ng2-dragula';
import { Veld } from './veld';

@Component({
    selector: 'datum',
    templateUrl: 'app/controls/datum.component.html',
    directives: [Dragula]
})

export class datumComponent {
  @Input() veld: Veld;
  @Input() pagina: Object;
  @Output() onDelete = new EventEmitter<Veld>();

  private edit;

  deleteVeld(veld) {
    this.onDelete.emit(veld);
  }

  private toggleEdit(){
    this.edit = !this.edit;
  }
}
