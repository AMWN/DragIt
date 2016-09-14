import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Veld } from './veld';

@Component({
    selector: 'janee',
    templateUrl: 'app/controls/janee.component.html'
})

export class janeeComponent {
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
