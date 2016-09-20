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
var webpartComponent = (function () {
    function webpartComponent() {
        this.edit = false;
    }
    webpartComponent.prototype.toggleEdit = function () {
        this.edit = !this.edit;
    };
    webpartComponent.prototype.deleteWebpart = function (webpart) {
        var index = this.pagina.webparts.findIndex(function (x) { return x == webpart; });
        this.pagina.webparts.splice(index, 1);
    };
    webpartComponent.prototype.onDelete = function (veld) {
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
            template: "\n    <!--Part header-->\n    <td>\n        <button *ngIf=\"edit\" (click)=\"deleteWebpart(webpart)\" class=\"webbutton webbutton-image-only cursorpointer\" style=\"white-space:nowrap;\">\n            <span class=\"webbuttonimagecontainer\"><img class=\"webbutton-image\" src=\"app/images/delete.png\"></span>\n        </button>\n    </td>\n    <td>\n    <div  class=\"partheader\" style=\"height:25px;white-space:nowrap;\" >\n        <h2 (dblclick)=\"toggleEdit($event)\" *ngIf=\"!edit\" class=\"headertext\">\n            {{webpart.omschrijving}}\n        </h2>\n        <input *ngIf=\"edit\" (dblclick)=\"toggleEdit($event)\" class=\"control\" [(ngModel)]=\"webpart.omschrijving\" type=\"text\">\n    </div>\n    </td>\n\n    <!--Part header-->\n    <!--Begin webpart-->\n    <div class=\"content\">\n        <table class=\"properties\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\n            <tbody [dragula]='\"bag-one\"' [dragulaModel]='webpart.velden'>\n                <tr *ngFor='let veld of webpart.velden'>\n                    <datum *ngIf=\"veld.type === 'datum'\" [veld]=\"veld\" [pagina]=\"pagina\" (onDelete)=\"onDelete($event)\">></datum>\n                    <tekst *ngIf=\"veld.type === 'tekst'\" [veld]=\"veld\" [pagina]=\"pagina\" (onDelete)=\"onDelete($event)\"></tekst>\n                    <nummer *ngIf=\"veld.type === 'nummer'\" [veld]=\"veld\" [pagina]=\"pagina\" (onDelete)=\"onDelete($event)\"></nummer>\n                    <url *ngIf=\"veld.type === 'url'\" [veld]=\"veld\" [pagina]=\"pagina\" (onDelete)=\"onDelete($event)\"></url>\n                    <url2 *ngIf=\"veld.type === 'url2'\" [veld]=\"veld\" [pagina]=\"pagina\" (onDelete)=\"onDelete($event)\"></url2>\n                    <memo *ngIf=\"veld.type === 'memo'\" [veld]=\"veld\" [pagina]=\"pagina\" (onDelete)=\"onDelete($event)\"></memo>\n                    <bijlage *ngIf=\"veld.type === 'bijlage'\" [veld]=\"veld\" [pagina]=\"pagina\" (onDelete)=\"onDelete($event)\"></bijlage>\n                    <janee *ngIf=\"veld.type === 'janee'\" [veld]=\"veld\" [pagina]=\"pagina\" (onDelete)=\"onDelete($event)\"></janee>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], webpartComponent);
    return webpartComponent;
}());
exports.webpartComponent = webpartComponent;
//# sourceMappingURL=webpart.component.js.map