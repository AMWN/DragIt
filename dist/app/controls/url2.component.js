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
var url2Component = (function () {
    function url2Component() {
        this.onDelete = new core_1.EventEmitter();
    }
    url2Component.prototype.toggleEdit = function () {
        this.edit = !this.edit;
    };
    url2Component.prototype.deleteVeld = function (veld) {
        this.onDelete.emit(veld);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], url2Component.prototype, "veld", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], url2Component.prototype, "pagina", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], url2Component.prototype, "onDelete", void 0);
    url2Component = __decorate([
        core_1.Component({
            selector: 'url2',
            template: "\n    <!--Link control-->\n    <div >\n        <td>\n            <button *ngIf=\"edit\" (click)=\"deleteVeld(veld)\" class=\"webbutton webbutton-image-only cursorpointer\" style=\"white-space:nowrap;\">\n                <span class=\"webbuttonimagecontainer\"><img class=\"webbutton-image\" src=\"app/images/delete.png\"></span>\n            </button>\n        </td>\n        <td class=\"label\" valign=\"top\">\n            <label *ngIf=\"!edit\" (dblclick)=\"toggleEdit($event)\" style=\"white-space:nowrap;\">{{veld.label}}</label>\n            <input *ngIf=\"edit\" (dblclick)=\"toggleEdit($event)\" class=\"control\" [(ngModel)]=\"veld.label\" type=\"text\">\n        </td>\n        <td *ngIf=\"!pagina.edit && !edit\" class=\"value valuerows0\" valign=\"top\">\n            <div class=\"searchControl\">\n                <span class=\"description\" *ngIf=\"!edit\" (dblclick)=\"toggleEdit($event)\">{{veld.omschrijving}}</span>\n\n            </div>\n        </td>\n        <td *ngIf=\"edit || pagina.edit\" (dblclick)=\"toggleEdit($event)\" class=\"value valuerows0\" valign=\"top\">\n            <div class=\"searchControl\">\n                <table cellpadding=\"0\" cellspacing=\"0\">\n                    <tbody>\n                        <tr>\n                            <td valign=\"middle\">\n                                <input class=\"control control\" type=\"text\" [(ngModel)]=\"veld.waarde\" style=\"width: 85px;\">\n                            </td>\n                            <td valign=\"middle\">\n                                <button title=\"Zoeken\" class=\"webbutton webbutton-image-only cursorpointer\" style=\"white-space:nowrap;\">\n                                    <span class=\"webbuttonimagecontainer\">\n                                        <img class=\"webbutton-image\" alt=\"Zoeken\" src=\"app/images/Search.png\">\n                                    </span>\n                                </button>\n                            </td>\n                            <td class=\"text\" valign=\"middle\">\n                                <span class=\"description\" *ngIf=\"!edit\" (dblclick)=\"toggleEdit($event)\">{{veld.omschrijving}}</span>\n                                <input *ngIf=\"edit\" (dblclick)=\"toggleEdit($event)\" [(ngModel)]=\"veld.omschrijving\" class=\"control\" type=\"text\">\n                            </td>\n                            <td valign=\"middle\">\n                                <img class=\"validatoricon\" alt=\"Fout\" src=\"app/images/Error.png\" style=\"display:inline-block;visibility:hidden;\">\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </td>\n    </div>\n    <!--Link control-->\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], url2Component);
    return url2Component;
}());
exports.url2Component = url2Component;
//# sourceMappingURL=url2.component.js.map