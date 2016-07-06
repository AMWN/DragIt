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
require('rxjs/Rx');
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var datum_component_1 = require('./controls/datum.component');
var tekst_component_1 = require('./controls/tekst.component');
var nummer_component_1 = require('./controls/nummer.component');
var url_component_1 = require('./controls/url.component');
var memo_component_1 = require('./controls/memo.component');
var bijlage_component_1 = require('./controls/bijlage.component');
var janee_component_1 = require('./controls/janee.component');
var webpartComponent = (function () {
    function webpartComponent(dragulaService) {
        this.dragulaService = dragulaService;
    }
    webpartComponent.prototype.toggleEdit = function () {
        this.edit = !this.edit;
    };
    webpartComponent.prototype.eventDelete = function (velden, veld) {
        var index = velden.findIndex(function (x) { return x == veld; });
        velden.splice(index, 1);
    };
    webpartComponent.prototype.onDelete = function (veld) {
        console.log(veld);
        var index = this.webpart.velden.findIndex(function (x) { return x == veld; });
        this.webpart.velden.splice(index, 1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], webpartComponent.prototype, "webpart", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], webpartComponent.prototype, "pagina", void 0);
    webpartComponent = __decorate([
        core_1.Component({
            selector: 'webpart',
            templateUrl: 'app/webpart.component.html',
            directives: [datum_component_1.datumComponent,
                tekst_component_1.tekstComponent,
                nummer_component_1.nummerComponent,
                url_component_1.urlComponent,
                memo_component_1.memoComponent,
                bijlage_component_1.bijlageComponent,
                janee_component_1.janeeComponent,
                ng2_dragula_1.Dragula],
        }), 
        __metadata('design:paramtypes', [ng2_dragula_1.DragulaService])
    ], webpartComponent);
    return webpartComponent;
}());
exports.webpartComponent = webpartComponent;
//# sourceMappingURL=webpart.component.js.map