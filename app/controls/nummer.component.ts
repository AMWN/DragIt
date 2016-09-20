import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Veld } from './veld';

@Component({
    selector: 'nummer',
    template: `
    <!--Cijfer control-->
    <div>
      <td>
          <button *ngIf="edit" (click)="deleteVeld(veld)" class="webbutton webbutton-image-only cursorpointer" style="white-space:nowrap;">
              <span class="webbuttonimagecontainer"><img class="webbutton-image" src="app/images/delete.png"></span>
          </button>
      </td>
      <td class="label" valign="top">
        <label *ngIf="!edit" style="white-space:nowrap;">{{veld.label}}</label>
        <input *ngIf="edit" (dblclick)="toggleEdit($event)" class="control" [(ngModel)]="veld.label" type="text">
      </td>
      <td class="value valuerows0" valign="top">
        <div>
          <span *ngIf="!edit && !pagina.edit" (dblclick)="toggleEdit($event)"  title="Nummer">{{veld.waarde}}</span>
          <input *ngIf="edit || pagina.edit" (dblclick)="toggleEdit($event)" class="control" [(ngModel)]="veld.waarde" type="text">
        </div>
      </td>
    </div><!--Cijfer control-->

    `
})

export class nummerComponent {
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
