import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Veld } from './veld';

@Component({
    selector: 'tekst',
    template:
    `
    <!--Tekstregel control-->
    <div (keyup.escape)="toggleEdit($event)">
      <td>
          <button *ngIf="edit" (click)="deleteVeld(veld)" class="webbutton webbutton-image-only cursorpointer" style="white-space:nowrap;">
              <span class="webbuttonimagecontainer"><img class="webbutton-image" src="images/delete.png"></span>
          </button>
      </td>
      <td class="label" valign="top">
        <span *ngIf="!edit" (dblclick)="toggleEdit($event)" style="white-space:nowrap;">{{veld.label}}</span>
        <input *ngIf="edit" class="control" [(ngModel)]="veld.label" type="text" [disabled]="veld.disabled">
      </td>
      <td class="value" valign="top">
        <div class="readonlyMemo doWrap">
          <span *ngIf="!edit && !pagina.edit" (dblclick)="toggleEdit($event)" >{{veld.waarde}}</span>
          <input *ngIf="edit || pagina.edit"  (dblclick)="toggleEdit($event)" class="control" style="width: 54em;" [(ngModel)]="veld.waarde" type="text"  [ngClass]="{'disabled' : veld.disabled && !edit}">
        </div>
      </td>
      <td valign="middle" *ngIf="veld.verplicht">
        <img class="validatoricon" src="images/Required.png" style="display:inline-block;">
      </td>
      <td valign="middle" *ngIf="edit" >
        <input [(ngModel)]="veld.disabled" tabindex="-1" title="Vinkje" class="control checkbox" type="checkbox">
      </td>
      <td valign="middle" *ngIf="edit" >
          <label style="white-space:nowrap;">Disabled</label>
      </td>
      <td valign="middle" *ngIf="edit" >
        <input [(ngModel)]="veld.verplicht" tabindex="-1" title="Vinkje" class="control checkbox" type="checkbox">
      </td>
      <td valign="middle" *ngIf="edit" >
        <label style="white-space:nowrap;">Verplicht</label>
      </td>
      <td valign="middle" *ngIf="edit" >
        <fa [name]="'save'" (click)="toggleEdit($event)" title="escape"></fa>
      </td>
    </div><!--Tekstregel control-->

    `
})

export class tekstComponent {
    @Input() veld: Veld;
    @Input() pagina: Object;
    @Output() onDelete = new EventEmitter<Veld>();
    private edit: boolean;

    private toggleEdit() {
        this.edit = !this.edit;
    }
    deleteVeld(veld) {
        this.onDelete.emit(veld);
    }

}
