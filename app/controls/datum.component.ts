import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Veld } from './veld';

@Component({
    selector: 'datum',
    template: `
    <!--Datum control-->
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
                            <td valign="middle"><input class="control" type="text" [(ngModel)]="veld.waarde" maxlength="10" style="width:85px;" _anta_event="36"></td>
                            <td valign="middle">
                                <button title="Datum kiezen" class="webbutton webbutton-image-only cursorpointer" switchable="0" pressed="0" style="white-space:nowrap;" _anta_event="34">
                                    <span class="webbuttonimagecontainer"><img class="webbutton-image" alt="Datum kiezen" src="app/images/Calendar.png" _anta_event="35"></span>
                                </button>
                            </td>
                            <td valign="middle"><img id="P_C_W_1E6CCAB049866C5348E57B0021A8F4EE_Cm_For_T101_DaSt_ValidatorIcon" class="validatoricon" alt="Fout" src="app/images/Error.png" style="display:inline-block;visibility:hidden;" _anta_event="37"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
