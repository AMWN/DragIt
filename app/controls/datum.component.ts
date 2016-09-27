import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Veld } from './veld';

@Component({
    selector: 'datum',
    template: `
    <!--Datum control-->
    <div (keyup.escape)="toggleEdit($event)">
        <td>
            <button *ngIf="edit" (click)="deleteVeld(veld)" class="webbutton webbutton-image-only cursorpointer" style="white-space:nowrap;">
                <span class="webbuttonimagecontainer"><img class="webbutton-image" src="app/images/delete.png"></span>
            </button>
        </td>
        <td class="label" valign="top">
            <label *ngIf="!edit" (dblclick)="toggleEdit($event)" style="white-space:nowrap;">{{veld.label}}</label>
            <input *ngIf="edit"  class="control" [(ngModel)]="veld.label" type="text">
        </td>
        <td *ngIf="!edit && !pagina.edit" (dblclick)="toggleEdit($event)" class="value valuerows0" valign="top">
            <div>
                <span title="Instuurdatum">{{veld.waarde}}</span>
            </div>
        </td>
        <td *ngIf="edit || pagina.edit" (dblclick)="toggleEdit($event)" class="value valuerows0" valign="top">
            <div class="dateTimeControl">
                <table cellpadding="0" cellspacing="0">
                    <tbody>
                        <tr>
                            <td valign="middle"><input class="control" type="text" [(ngModel)]="veld.waarde" maxlength="10" style="width:85px;" [ngClass]="{'disabled' : veld.disabled && !edit && !veld.verplicht} "></td>
                            <td valign="middle">
                                <button title="Datum kiezen" class="webbutton webbutton-image-only cursorpointer"  switchable="0" pressed="0" style="white-space:nowrap;">
                                    <span class="webbuttonimagecontainer"><img class="webbutton-image" alt="Datum kiezen" src="app/images/Calendar.png"></span>
                                </button>
                            </td>
                            <td valign="middle" *ngIf="veld.verplicht">
                              <img class="validatoricon" src="images/Required.png" style="display:inline-block;">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
          <fa [name]="'save'" (click)="toggleEdit($event)" title="Escape"></fa>
        </td>
    </div>
    <!--Datum control-->
    `
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
