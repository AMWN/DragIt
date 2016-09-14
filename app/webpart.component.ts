import { Component, Input } from '@angular/core';

@Component({
    selector: 'webpart',
    templateUrl: 'app/webpart.component.html',
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

}
