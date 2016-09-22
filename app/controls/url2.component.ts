import { Component, Input , Output, EventEmitter} from '@angular/core';
import { Veld } from './veld';

@Component({
    selector: 'url2',
    template: `
    <!--Link control-->
    <div (keyup.escape)="toggleEdit($event)">
        <td>
            <button *ngIf="edit" (click)="deleteVeld(veld)" class="webbutton webbutton-image-only cursorpointer" style="white-space:nowrap;">
                <span class="webbuttonimagecontainer"><img class="webbutton-image" src="app/images/delete.png"></span>
            </button>
        </td>
        <td class="label" valign="top">
            <label *ngIf="!edit" (dblclick)="toggleEdit($event)" style="white-space:nowrap;">{{veld.label}}</label>
            <input *ngIf="edit" class="control" [(ngModel)]="veld.label"  type="text" >
        </td>
        <td *ngIf="!pagina.edit && !edit" class="value valuerows0" valign="top">
            <div class="searchControl">
                <span class="description" *ngIf="!edit" (dblclick)="toggleEdit($event)">{{veld.omschrijving}}</span>
            </div>
        </td>
        <td *ngIf="edit || pagina.edit" (dblclick)="toggleEdit($event)" class="value valuerows0" valign="top">
            <div class="searchControl">
                <table cellpadding="0" cellspacing="0">
                    <tbody>
                        <tr>
                            <td valign="middle">
                                <input class="control control" type="text" [(ngModel)]="veld.waarde" style="width: 85px;" (dblclick)="toggleEdit($event)"  [ngClass]="{'disabled' : veld.disabled && !edit}" >
                            </td>
                            <td valign="middle">
                                <button title="Zoeken" class="webbutton webbutton-image-only cursorpointer" style="white-space:nowrap;">
                                    <span class="webbuttonimagecontainer">
                                      <img *ngIf="!veld.disabled" class="webbutton-image" alt="Zoeken" src="images/Search.png">
                                      <img *ngIf="veld.disabled" class="webbutton-image" alt="Zoeken" src="images/SearchDisabled.png">
                                    </span>
                                </button>
                            </td>
                            <td class="text" valign="middle">
                                <span class="description" *ngIf="!edit" (dblclick)="toggleEdit($event)">{{veld.omschrijving}}</span>
                                <input *ngIf="edit" [(ngModel)]="veld.omschrijving" (dblclick)="toggleEdit($event)" class="control" type="text" >
                            </td>
                          </tr>
                    </tbody>
                </table>
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
          <fa [name]="'save'" (click)="toggleEdit($event)" title="Escape"></fa>
        </td>
    </div>
    <!--Link control-->
    `
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
