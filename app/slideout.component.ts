import { Component, Input, EventEmitter } from '@angular/core';
import { Veld } from './controls/veld'
import { FaComponent } from 'angular2-fontawesome/components';
import { Webpart } from './controls/webpart';

const VELDEN: Veld[] = [
    { type: 'datum', label: "Datum", waarde: '15-01-1985', regels: 1, omschrijving: '', icon: 'calendar' },
    { type: 'tekst', label: "Tekst", waarde: 'Tekst veld', regels: 1, omschrijving: '', icon: 'align-justify' },
    { type: 'nummer', label: "Nummer", waarde: '1200,00', regels: 5, omschrijving: '' , icon: 'euro' },
    { type: 'memo', label: "Memo", waarde: 'Lorem Khaled Ipsum is a major key to success. Celebrate success right, the only way, apple. Another one. The other day the grass was brown, now it’s green because I ain’t give up. Never surrender. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? Fan luv. Mogul talk. Wraith talk.', regels: 3, omschrijving: '', icon: 'commenting'  },
    { type: 'url', label: "Link1", waarde: 'www.afas.nl', regels: 1, omschrijving: 'Omschrijving' ,icon: 'link' },
    { type: 'url2', label: "Link2", waarde: '1', regels: 1, omschrijving: 'Omschrijving', icon: 'unlink' },
    { type: 'bijlage', label: "Bijlage", waarde: 'Factuur 20160001.pdf', regels: 1, omschrijving: '' ,icon: 'file' },
    { type: 'janee', label: "Janee", waarde: '1', regels: 1, omschrijving: '', icon: 'check-square'  },
]

const WEBPARTS: Webpart[] = [
  {  omschrijving : "Algemeen",
      velden: [{
        type: "tekst",
        label: "Label",
        waarde: "Omschrijving",
        regels: 1,
        omschrijving: ""
      }],
      icon: 'wpforms'
}
]

@Component({
    selector: 'slideout',
    template: `
    <ul [dragula]='"bag-one"' [dragulaModel]='velden'>
      <li *ngFor="let veld of velden" class='copy-me'>
          <fa [name]="veld.icon"></fa>
      </li>
    </ul>

    <ul [dragula]='"bag-webpart"' [dragulaModel]='webparts'>
      <li *ngFor="let webpart of webparts" class='copy-me'>
          <fa [name]="webpart.icon"></fa>
      </li>
    </ul>

    <ul>
      <li>
          <input type="checkbox" name="edit" [(ngModel)]="pagina.edit">Edit modus<br>
      </li>
    </ul>
    `

})

export class slideoutComponent {
    @Input() pagina: Object;
    private velden = VELDEN;
    private webparts = WEBPARTS;


    public toggleEdit(){
      console.log('click')
      this.pagina['edit']  = !this.pagina['edit'];
    }
}
