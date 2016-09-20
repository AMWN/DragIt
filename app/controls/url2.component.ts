import { Component, Input , Output, EventEmitter} from '@angular/core';
import { Veld } from './veld';

@Component({
    selector: 'url2',
    template: `
    <!--Link control-->
    <div >
        <td>
            <button *ngIf="edit" (click)="deleteVeld(veld)" class="webbutton webbutton-image-only cursorpointer" style="white-space:nowrap;">
                <span class="webbuttonimagecontainer"><img class="webbutton-image" src="app/images/delete.png"></span>
            </button>
        </td>
        <td class="label" valign="top">
            <label *ngIf="!edit" (dblclick)="toggleEdit($event)" style="white-space:nowrap;">{{veld.label}}</label>
            <input *ngIf="edit" (dblclick)="toggleEdit($event)" class="control" [(ngModel)]="veld.label" type="text">
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
                                <input class="control control" type="text" [(ngModel)]="veld.waarde" style="width: 85px;">
                            </td>
                            <td valign="middle">
                                <button title="Zoeken" class="webbutton webbutton-image-only cursorpointer" style="white-space:nowrap;">
                                    <span class="webbuttonimagecontainer">
                                        <img class="webbutton-image" alt="Zoeken" src="app/images/Search.png">
                                    </span>
                                </button>
                            </td>
                            <td class="text" valign="middle">
                                <span class="description" *ngIf="!edit" (dblclick)="toggleEdit($event)">{{veld.omschrijving}}</span>
                                <input *ngIf="edit" (dblclick)="toggleEdit($event)" [(ngModel)]="veld.omschrijving" class="control" type="text">
                            </td>
                            <td valign="middle">
                                <img class="validatoricon" alt="Fout" src="app/images/Error.png" style="display:inline-block;visibility:hidden;">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
