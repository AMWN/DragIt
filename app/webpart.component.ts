import { Component, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';
import { datumComponent } from './controls/datum.component';
import { tekstComponent } from './controls/tekst.component';
import { nummerComponent } from './controls/nummer.component';
import { urlComponent } from './controls/url.component';
import { memoComponent } from './controls/memo.component';
import { bijlageComponent } from './controls/bijlage.component';
import { janeeComponent } from './controls/janee.component';

@Component({
    selector: 'webpart',
    templateUrl: 'app/webpart.component.html',
    directives: [datumComponent,
        tekstComponent,
        nummerComponent,
        urlComponent,
        memoComponent,
        bijlageComponent,
        janeeComponent,
        Dragula],
})

export class webpartComponent {
    @Input() webpart: any;
    @Input() pagina: any;
    private edit;

    private toggleEdit(){
      this.edit = !this.edit;
    }

    private eventDelete(velden, veld) {
        var index = velden.findIndex(x => x == veld)
        velden.splice(index, 1);
    }

    onDelete(veld) {
      console.log(veld);
      var index = this.webpart.velden.findIndex(x => x == veld)
      this.webpart.velden.splice(index, 1);
  }


    constructor(private dragulaService: DragulaService) {
    }
}
