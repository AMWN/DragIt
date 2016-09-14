import { Component, Input, EventEmitter } from '@angular/core';
import { Veld } from './controls/veld'
import { FaComponent } from 'angular2-fontawesome/components';
import { Webpart } from './controls/webpart';

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
},{
      omschrijving : "Algemeen",
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
    templateUrl: 'app/slideout.component.html'

})

export class slideoutComponent {
    @Input() pagina: Object;
    private velden = VELDEN;
    private webparts = WEBPARTS;

    // constructor(private dragulaService: DragulaService) {
    //
    //     dragulaService.setOptions('bag-one', {
    //       // moves: function(el, source, handle, sibling) {
    //       //    console.log('move one');
    //       //    console.log(el, source, handle, sibling);
    //       //    el.className === 'copy-me';;
    //       // },
    //         copy: function(el, source) {
    //             console.log('copy one');
    //             console.log(el)
    //             return el.className === 'copy-me';
    //         }
    //     })
    //
    //     dragulaService.setOptions('bag-webpart', {
    //         moves: function(el, source, handle, sibling) {
    //            console.log('move wp');
    //            console.log(el, source, handle, sibling);
    //            return handle.classList.contains('headertext') || el.className === 'copy-me';
    //         },
    //         copy: function(el, source) {
    //             console.log(el)
    //             return el.className === 'copy-me';
    //         }
    //     })
    //
    // }

    public toggleEdit(){
      console.log('click')
      this.pagina['edit']  = !this.pagina['edit'];
    }
}
