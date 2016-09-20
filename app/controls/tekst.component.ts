import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Veld } from './veld';

@Component({
    selector: 'tekst',
    template:
    `
    <!--Tekstregel control-->
    <div>
      <td>
          <button *ngIf="edit" (click)="deleteVeld(veld)" class="webbutton webbutton-image-only cursorpointer" style="white-space:nowrap;">
              <span class="webbuttonimagecontainer"><img class="webbutton-image" src="app/images/delete.png"></span>
          </button>
      </td>
      <td class="label" valign="top">
        <span *ngIf="!edit" (dblclick)="toggleEdit($event)" style="white-space:nowrap;">{{veld.label}}</span>
        <input *ngIf="edit" (dblclick)="toggleEdit($event)" class="control" [(ngModel)]="veld.label" type="text">
      </td>
      <td class="value" valign="top">
        <div class="readonlyMemo doWrap">
          <span *ngIf="!edit && !pagina.edit" (dblclick)="toggleEdit($event)" >{{veld.waarde}}</span>
          <input *ngIf="edit || pagina.edit"  (dblclick)="toggleEdit($event)" class="control" style="width: 54em;" [(ngModel)]="veld.waarde" type="text">
        </div>
      </td>
    </div><!--Tekstregel control-->

    `
})

export class tekstComponent {
  @Input() veld: Veld;
  @Input() pagina: Object;
  @Output() onDelete = new EventEmitter<Veld>();
  private edit: boolean;

  private toggleEdit(){
    this.edit = !this.edit;
  }
  deleteVeld(veld) {
    this.onDelete.emit(veld);
  }

}
