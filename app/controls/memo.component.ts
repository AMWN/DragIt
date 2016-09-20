import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Veld } from './veld';

@Component({
    selector: 'memo',
    template: `
    <!--Tekstblok control-->
    <div>
      <td>
          <button *ngIf="edit" (click)="deleteVeld(veld)" class="webbutton webbutton-image-only cursorpointer" style="white-space:nowrap;">
              <span class="webbuttonimagecontainer"><img class="webbutton-image" src="app/images/delete.png"></span>
          </button>
      </td>
      <td class="label" valign="top">
        <label *ngIf="!edit" (dblclick)="toggleEdit($event)" style="white-space:nowrap;">{{veld.label}}</label>
        <input *ngIf="edit" (dblclick)="toggleEdit($event)" class="control" [(ngModel)]="veld.label" type="text">
      </td>
      <td class="value valuerows{{veld.regels}}" valign="top">
        <div>
          <table cellpadding="0" cellspacing="0">
            <tbody>
              <tr>
                <td valign="top">
                  <div *ngIf="!edit && !pagina.edit" (dblclick)="toggleEdit($event)" style="width: 66%" class="readonlyMemo doWrap fixedHeight memoRows{{veld.regels}}">
                    <span  >{{veld.waarde}}</span>
                  </div>
                  <textarea *ngIf="edit || pagina.edit"  (dblclick)="toggleEdit($event)"  [(ngModel)]="veld.waarde"  cols="100"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </div><!--Tekstblok control-->
`
})

export class memoComponent {
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
