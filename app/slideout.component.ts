import { Component, Input, EventEmitter } from '@angular/core';
import { Dragula, DragulaService } from 'ng2-dragula/ng2-dragula';
import { Veld } from './controls/veld.ts'
import { FaComponent } from 'angular2-fontawesome/components';

const VELDEN: Veld[] = [
    { type: 'datum', label: "Datum", waarde: '15-01-1985', regels: 1, omschrijving: '', icon: 'calendar' },
    { type: 'tekst', label: "Tekst", waarde: 'Tekst veld', regels: 1, omschrijving: '', icon: 'align-justify' },
    { type: 'nummer', label: "Nummer", waarde: '1200,00', regels: 5, omschrijving: '' , icon: 'euro' },
    { type: 'memo', label: "Memo", waarde: 'Memo velde sfjsdkljfsdkl', regels: 1, omschrijving: '', icon: 'commenting'  },
    { type: 'url', label: "Link1", waarde: 'www.afas.nl', regels: 1, omschrijving: 'Omschrijving' ,icon: 'link' },
    { type: 'url2', label: "Link2", waarde: '1', regels: 1, omschrijving: 'Omschrijving', icon: 'unlink' },
    { type: 'bijlage', label: "Bijlage", waarde: 'Factuur 20160001.pdf', regels: 1, omschrijving: '' ,icon: 'file' },
    { type: 'janee', label: "Janee", waarde: '1', regels: 1, omschrijving: '', icon: 'check-square'  },
]

@Component({
    selector: 'slideout',
    templateUrl: 'app/slideout.component.html',
    directives: [Dragula, FaComponent]
})

export class slideoutComponent {
    @Input() pagina: Object;
    velden = VELDEN;
    public trash: Object;

    constructor(private dragulaService: DragulaService) {
        dragulaService.setOptions('bag-one', {
            copy: function(el, source) {
                return el.className === 'copy-me';
            }
        })
    }

    public toggleEdit(){
      console.log('click')
      this.pagina['edit']  = !this.pagina['edit'];
    }
}
