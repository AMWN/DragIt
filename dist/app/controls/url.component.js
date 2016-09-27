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
var urlComponent = (function () {
    function urlComponent() {
        this.onDelete = new core_1.EventEmitter();
    }
    urlComponent.prototype.toggleEdit = function () {
        this.edit = !this.edit;
    };
    urlComponent.prototype.deleteVeld = function (veld) {
        this.onDelete.emit(veld);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], urlComponent.prototype, "veld", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], urlComponent.prototype, "pagina", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], urlComponent.prototype, "onDelete", void 0);
    urlComponent = __decorate([
        core_1.Component({
            selector: 'url',
            template: "\n    <!--Link control-->\n    <div (keyup.escape)=\"toggleEdit($event)\">\n        <td>\n            <button *ngIf=\"edit\" (click)=\"deleteVeld(veld)\" class=\"webbutton webbutton-image-only cursorpointer\" style=\"white-space:nowrap;\">\n                <span class=\"webbuttonimagecontainer\"><img class=\"webbutton-image\" src=\"images/delete.png\"></span>\n            </button>\n        </td>\n        <td class=\"label\" valign=\"top\"><label *ngIf=\"!edit\" (dblclick)=\"toggleEdit($event)\" style=\"white-space:nowrap;\">{{veld.label}}</label>\n        <input *ngIf=\"edit\" class=\"control\" [(ngModel)]=\"veld.label\" type=\"text\" >\n    </td>\n    <td *ngIf=\"!pagina.edit && !edit\" class=\"value valuerows0\" valign=\"top\">\n        <div class=\"searchControl\">\n            <a title=\"Link\" class=\"linkcontrol control\" href=\"#\">{{veld.omschrijving}}</a>\n        </div>\n    </td>\n    <td *ngIf=\"edit || pagina.edit\" (dblclick)=\"toggleEdit($event)\" class=\"value valuerows0\" valign=\"top\">\n        <div class=\"searchControl\">\n            <table cellpadding=\"0\" cellspacing=\"0\">\n                <tbody>\n                    <tr>\n                        <td valign=\"middle\">\n                            <input class=\"control control\" type=\"text\" [(ngModel)]=\"veld.waarde\" style=\"width: 85px;\" (dblclick)=\"toggleEdit($event)\"  [ngClass]=\"{'disabled' : veld.disabled && !veld.verplicht}\">\n                        </td>\n                        <td valign=\"middle\">\n                            <button title=\"Zoeken\" class=\"webbutton webbutton-image-only cursorpointer\" style=\"white-space:nowrap;\">\n                                <span class=\"webbuttonimagecontainer\">\n                                    <img *ngIf=\"!veld.disabled\" class=\"webbutton-image\" alt=\"Zoeken\" src=\"images/Search.png\">\n                                    <img *ngIf=\"veld.disabled\" class=\"webbutton-image\" alt=\"Zoeken\" src=\"images/SearchDisabled.png\">\n                                </span>\n                            </button>\n                        </td>\n                        <td class=\"text\" valign=\"middle\">\n                            <a *ngIf=\"!edit\" (dblclick)=\"toggleEdit($event)\" class=\"linkcontrol description\" href=\"#\" linktype=\"5\">{{veld.omschrijving}}</a>\n                            <input *ngIf=\"edit\" [(ngModel)]=\"veld.omschrijving\" (dblclick)=\"toggleEdit($event)\" class=\"control\" type=\"text\" [disabled]=\"veld.disabled\" >\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </td>\n    <td valign=\"middle\" *ngIf=\"veld.verplicht\">\n      <img class=\"validatoricon\" src=\"images/Required.png\" style=\"display:inline-block;\">\n    </td>\n    <td valign=\"middle\" *ngIf=\"edit\" >\n      <input [(ngModel)]=\"veld.disabled\" tabindex=\"-1\" title=\"Vinkje\" class=\"control checkbox\" type=\"checkbox\">\n    </td>\n    <td valign=\"middle\" *ngIf=\"edit\" >\n        <label style=\"white-space:nowrap;\">Disabled</label>\n    </td>\n    <td valign=\"middle\" *ngIf=\"edit\" >\n      <input [(ngModel)]=\"veld.verplicht\" tabindex=\"-1\" title=\"Vinkje\" class=\"control checkbox\" type=\"checkbox\">\n    </td>\n    <td valign=\"middle\" *ngIf=\"edit\" >\n      <label style=\"white-space:nowrap;\">Verplicht</label>\n    </td>\n    <td valign=\"middle\" *ngIf=\"edit\" >\n      <fa [name]=\"'save'\" (click)=\"toggleEdit($event)\" title=\"Escape\"></fa>\n    </td>\n    </div>\n    <!--Link control-->\n"
        }), 
        __metadata('design:paramtypes', [])
    ], urlComponent);
    return urlComponent;
}());
exports.urlComponent = urlComponent;
//# sourceMappingURL=url.component.js.map