import { Component } from '@angular/core';
import { veldenComponent} from './velden.component'
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Component({
    selector: 'webpart',
    template: `
  <!--Part header-->
  <div class="partheader" style="height:25px;white-space:nowrap;">
    <h2 class="headertext">
      Paginatitel
    </h2>
  </div><!--Part header-->
  <!--Begin webpart-->
  <div class="content">
    <table class="properties" width="100%" cellpadding="0" cellspacing="0">
      <tbody>
        <velden></velden>
      </tbody>
    </table>
  </div>
  <pre>{{pagina | json}}</pre>
  `,
  directives: [veldenComponent]
})

export class webpartComponent {


}
