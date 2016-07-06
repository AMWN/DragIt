import { Component, Input , Output, EventEmitter } from '@angular/core';
import { Dragula } from 'ng2-dragula/ng2-dragula';
import { Veld } from './veld';

@Component({
    selector: 'bijlage',
    templateUrl: 'app/controls/bijlage.component.html',
    directives: [Dragula]
})

export class bijlageComponent {
  @Input() veld: Veld
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
