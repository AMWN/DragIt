import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Veld } from './veld';

@Component({
    selector: 'janee',
    template: `
    <!--Ja/nee control-->
    <tr>
        <td class="label" valign="top"></td>
        <td class="value valuerows0" valign="top">
            <div>
                <table class="checkboxControl" cellpadding="0" cellspacing="0">
                    <tbody>
                        <tr>
                            <td>
                                <button *ngIf="edit" (click)="deleteVeld(veld)" class="webbutton webbutton-image-only cursorpointer" style="white-space:nowrap;">
                                    <span class="webbuttonimagecontainer"><img class="webbutton-image" src="app/images/delete.png"></span>
                                </button>
                            </td>
                            <td valign="middle">
                                <input *ngIf="!edit && !pagina.edit" [(ngModel)]="veld.waarde" tabindex="-1" title="Vinkje" class="control checkbox disabled" type="checkbox" autocomplete="off" disabled="disabled">
                                <input *ngIf="edit || pagina.edit" [(ngModel)]="veld.waarde" tabindex="-1" title="Vinkje" class="control checkbox" type="checkbox" autocomplete="off">
                            </td>
                            <td valign="middle">
                                <label *ngIf="!edit" (dblclick)="toggleEdit($event)" style="white-space:nowrap;">{{veld.label}}</label>
                                <input *ngIf="edit" (dblclick)="toggleEdit($event)" class="control" [(ngModel)]="veld.label" type="text">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </td>
    </tr>
    <!--Ja/nee control-->

    `
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
