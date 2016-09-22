import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Veld } from './veld';

@Component({
    selector: 'bijlage',
    template:
    `
    <!--Bijlage control-->
    <div (keyup.escape)="toggleEdit($event)">
        <td>
            <button *ngIf="edit" (click)="deleteVeld(veld)" class="webbutton webbutton-image-only cursorpointer" [ngClass]="{'disabled': veld.disabled }" style="white-space:nowrap;">
                <span class="webbuttonimagecontainer"><img class="webbutton-image" src="app/images/delete.png"></span>
            </button>
        </td>
        <td class="label" valign="top">
            <label *ngIf="!edit" (dblclick)="toggleEdit($event)" style="white-space:nowrap;">{{veld.label}}</label>
            <input *ngIf="edit" class="control" [(ngModel)]="veld.label" type="text">
        </td>
        <td class="value valuerows0" valign="top">
            <div class="filecontrol">
                <table *ngIf="edit || pagina.edit">
                    <tbody>
                        <tr>
                            <td valign="middle">
                                <form style="margin:0px;display:inline-block;">
                                    <button class="webbutton webbutton-text-only cursorpointer" style="white-space: nowrap;">
                                        <span class="webbutton-text" style="white-space:nowrap" [ngClass]="{'disabled' : veld.disabled && !edit}" >Bestand kiezen</span>
                                    </button>
                                    <div class="fileDropZone">
                                        <span style="white-space:nowrap;">Of
                                        </span>
                                        <input class="fileDropZoneInput disabled" type="text" value="Plak afbeelding" readonly="readonly">
                                    </div>
                                    <input type="hidden" name="filesourcetype">
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <a *ngIf="!edit && !pagina.edit" title="Bijlage" class="linkcontrol" href="#">{{veld.waarde}}</a>
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
          <fa [name]="'save'" (click)="toggleEdit($event)"></fa>
        </td>
    </div>
    <!--Bijlage control-->
    `
})

export class bijlageComponent {
    @Input() veld: Veld
    @Input() pagina: Object;
    @Output() onDelete = new EventEmitter<Veld>();

    private edit;

    private toggleEdit() {
        this.edit = !this.edit;
    }

    deleteVeld(veld) {
        this.onDelete.emit(veld);
    }
}
