import { Component } from '@angular/core';
import { veldenComponent} from './velden.component'


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
  `,
  directives: [veldenComponent]
})
export class webpartComponent {
}
