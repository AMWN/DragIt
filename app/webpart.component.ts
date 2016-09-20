import { Component, Input } from '@angular/core';
import { Webpart } from './controls/webpart';

@Component({
    selector: 'webpart',
    template: `
    <!--Part header-->
    <td>
        <button *ngIf="edit" (click)="deleteWebpart(webpart)" class="webbutton webbutton-image-only cursorpointer" style="white-space:nowrap;">
            <span class="webbuttonimagecontainer"><img class="webbutton-image" src="app/images/delete.png"></span>
        </button>
    </td>
    <td>
    <div  class="partheader" style="height:25px;white-space:nowrap;" >
        <h2 (dblclick)="toggleEdit($event)" *ngIf="!edit" class="headertext">
            {{webpart.omschrijving}}
        </h2>
        <input *ngIf="edit" (dblclick)="toggleEdit($event)" class="control" [(ngModel)]="webpart.omschrijving" type="text">
    </div>
    </td>

    <!--Part header-->
    <!--Begin webpart-->
    <div class="content">
        <table class="properties" width="100%" cellpadding="0" cellspacing="0">
            <tbody [dragula]='"bag-one"' [dragulaModel]='webpart.velden'>
                <tr *ngFor='let veld of webpart.velden'>
                    <datum *ngIf="veld.type === 'datum'" [veld]="veld" [pagina]="pagina" (onDelete)="onDelete($event)">></datum>
                    <tekst *ngIf="veld.type === 'tekst'" [veld]="veld" [pagina]="pagina" (onDelete)="onDelete($event)"></tekst>
                    <nummer *ngIf="veld.type === 'nummer'" [veld]="veld" [pagina]="pagina" (onDelete)="onDelete($event)"></nummer>
                    <url *ngIf="veld.type === 'url'" [veld]="veld" [pagina]="pagina" (onDelete)="onDelete($event)"></url>
                    <url2 *ngIf="veld.type === 'url2'" [veld]="veld" [pagina]="pagina" (onDelete)="onDelete($event)"></url2>
                    <memo *ngIf="veld.type === 'memo'" [veld]="veld" [pagina]="pagina" (onDelete)="onDelete($event)"></memo>
                    <bijlage *ngIf="veld.type === 'bijlage'" [veld]="veld" [pagina]="pagina" (onDelete)="onDelete($event)"></bijlage>
                    <janee *ngIf="veld.type === 'janee'" [veld]="veld" [pagina]="pagina" (onDelete)="onDelete($event)"></janee>
                </tr>
            </tbody>
        </table>
    </div>
    `
})

export class webpartComponent {
    @Input() webpart: Webpart;
    @Input() pagina: any;
    private edit: boolean = false;

    private toggleEdit() {
        this.edit = !this.edit;
    }

    deleteWebpart(webpart) {
        var index = this.pagina.webparts.findIndex(x => x == webpart)
        this.pagina.webparts.splice(index, 1);
    }

    onDelete(veld) {
        var index = this.webpart.velden.findIndex(x => x == veld)
        this.webpart.velden.splice(index, 1);
    }

}
