"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var velden_component_1 = require('./velden.component');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var webpartComponent = (function () {
    function webpartComponent(http) {
        var _this = this;
        this.pagina = {};
        http.get('app/pagina.json')
            .map(function (res) { return _this.pagina = res.json(); });
    }
    webpartComponent = __decorate([
        core_1.Component({
            selector: 'webpart',
            template: "\n  <!--Part header-->\n  <div class=\"partheader\" style=\"height:25px;white-space:nowrap;\">\n    <h2 class=\"headertext\">\n      Paginatitel\n    </h2>\n  </div><!--Part header-->\n  <!--Begin webpart-->\n  <div class=\"content\">\n    <table class=\"properties\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\n      <tbody>\n        <velden></velden>\n      </tbody>\n    </table>\n  </div>\n  <pre>{{pagina | json}}</pre>\n  ",
            directives: [velden_component_1.veldenComponent]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], webpartComponent);
    return webpartComponent;
}());
exports.webpartComponent = webpartComponent;
//# sourceMappingURL=webpart.component.js.map