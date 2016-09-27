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
var datumComponent = (function () {
    function datumComponent() {
        this.onDelete = new core_1.EventEmitter();
    }
    datumComponent.prototype.deleteVeld = function (veld) {
        this.onDelete.emit(veld);
    };
    datumComponent.prototype.toggleEdit = function () {
        this.edit = !this.edit;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], datumComponent.prototype, "veld", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], datumComponent.prototype, "pagina", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], datumComponent.prototype, "onDelete", void 0);
    datumComponent = __decorate([
        core_1.Component({
            selector: 'datum',
            template: "\n    <!--Datum control-->\n    <div (keyup.escape)=\"toggleEdit($event)\">\n        <td>\n            <button *ngIf=\"edit\" (click)=\"deleteVeld(veld)\" class=\"webbutton webbutton-image-only cursorpointer\" style=\"white-space:nowrap;\">\n                <span class=\"webbuttonimagecontainer\"><img class=\"webbutton-image\" src=\"app/images/delete.png\"></span>\n            </button>\n        </td>\n        <td class=\"label\" valign=\"top\">\n            <label *ngIf=\"!edit\" (dblclick)=\"toggleEdit($event)\" style=\"white-space:nowrap;\">{{veld.label}}</label>\n            <input *ngIf=\"edit\"  class=\"control\" [(ngModel)]=\"veld.label\" type=\"text\">\n        </td>\n        <td *ngIf=\"!edit && !pagina.edit\" (dblclick)=\"toggleEdit($event)\" class=\"value valuerows0\" valign=\"top\">\n            <div>\n                <span title=\"Instuurdatum\">{{veld.waarde}}</span>\n            </div>\n        </td>\n        <td *ngIf=\"edit || pagina.edit\" (dblclick)=\"toggleEdit($event)\" class=\"value valuerows0\" valign=\"top\">\n            <div class=\"dateTimeControl\">\n                <table cellpadding=\"0\" cellspacing=\"0\">\n                    <tbody>\n                        <tr>\n                            <td valign=\"middle\"><input class=\"control\" type=\"text\" [(ngModel)]=\"veld.waarde\" maxlength=\"10\" style=\"width:85px;\" [ngClass]=\"{'disabled' : veld.disabled && !edit && !veld.verplicht} \"></td>\n                            <td valign=\"middle\">\n                                <button title=\"Datum kiezen\" class=\"webbutton webbutton-image-only cursorpointer\"  switchable=\"0\" pressed=\"0\" style=\"white-space:nowrap;\">\n                                    <span class=\"webbuttonimagecontainer\"><img class=\"webbutton-image\" alt=\"Datum kiezen\" src=\"app/images/Calendar.png\"></span>\n                                </button>\n                            </td>\n                            <td valign=\"middle\" *ngIf=\"veld.verplicht\">\n                              <img class=\"validatoricon\" src=\"images/Required.png\" style=\"display:inline-block;\">\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </td>\n        <td valign=\"middle\" *ngIf=\"edit\" >\n          <input [(ngModel)]=\"veld.disabled\" tabindex=\"-1\" title=\"Vinkje\" class=\"control checkbox\" type=\"checkbox\">\n        </td>\n        <td valign=\"middle\" *ngIf=\"edit\" >\n            <label style=\"white-space:nowrap;\">Disabled</label>\n        </td>\n        <td valign=\"middle\" *ngIf=\"edit\" >\n          <input [(ngModel)]=\"veld.verplicht\" tabindex=\"-1\" title=\"Vinkje\" class=\"control checkbox\" type=\"checkbox\">\n        </td>\n        <td valign=\"middle\" *ngIf=\"edit\" >\n          <label style=\"white-space:nowrap;\">Verplicht</label>\n        </td>\n        <td valign=\"middle\" *ngIf=\"edit\" >\n          <fa [name]=\"'save'\" (click)=\"toggleEdit($event)\" title=\"Escape\"></fa>\n        </td>\n    </div>\n    <!--Datum control-->\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], datumComponent);
    return datumComponent;
}());
exports.datumComponent = datumComponent;
//# sourceMappingURL=datum.component.js.map