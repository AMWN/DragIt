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
var bijlageComponent = (function () {
    function bijlageComponent() {
        this.onDelete = new core_1.EventEmitter();
    }
    bijlageComponent.prototype.toggleEdit = function () {
        this.edit = !this.edit;
    };
    bijlageComponent.prototype.deleteVeld = function (veld) {
        this.onDelete.emit(veld);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], bijlageComponent.prototype, "veld", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], bijlageComponent.prototype, "pagina", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], bijlageComponent.prototype, "onDelete", void 0);
    bijlageComponent = __decorate([
        core_1.Component({
            selector: 'bijlage',
            template: "\n    <!--Bijlage control-->\n    <div (keyup.escape)=\"toggleEdit($event)\">\n        <td>\n            <button *ngIf=\"edit\" (click)=\"deleteVeld(veld)\" class=\"webbutton webbutton-image-only cursorpointer\" [ngClass]=\"{'disabled': veld.disabled }\" style=\"white-space:nowrap;\">\n                <span class=\"webbuttonimagecontainer\"><img class=\"webbutton-image\" src=\"app/images/delete.png\"></span>\n            </button>\n        </td>\n        <td class=\"label\" valign=\"top\">\n            <label *ngIf=\"!edit\" (dblclick)=\"toggleEdit($event)\" style=\"white-space:nowrap;\">{{veld.label}}</label>\n            <input *ngIf=\"edit\" class=\"control\" [(ngModel)]=\"veld.label\" type=\"text\">\n        </td>\n        <td class=\"value valuerows0\" valign=\"top\">\n            <div class=\"filecontrol\">\n                <table *ngIf=\"edit || pagina.edit\">\n                    <tbody>\n                        <tr>\n                            <td valign=\"middle\">\n                                <form style=\"margin:0px;display:inline-block;\">\n                                    <button class=\"webbutton webbutton-text-only cursorpointer\" style=\"white-space: nowrap;\">\n                                        <span class=\"webbutton-text\" style=\"white-space:nowrap\" [ngClass]=\"{'disabled' : veld.disabled && !edit}\" >Bestand kiezen</span>\n                                    </button>\n                                    <div class=\"fileDropZone\">\n                                        <span style=\"white-space:nowrap;\">Of\n                                        </span>\n                                        <input class=\"fileDropZoneInput disabled\" type=\"text\" value=\"Plak afbeelding\" readonly=\"readonly\">\n                                    </div>\n                                    <input type=\"hidden\" name=\"filesourcetype\">\n                                </form>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <a *ngIf=\"!edit && !pagina.edit\" title=\"Bijlage\" class=\"linkcontrol\" href=\"#\">{{veld.waarde}}</a>\n            </div>\n        </td>\n        <td valign=\"middle\" *ngIf=\"veld.verplicht\">\n          <img class=\"validatoricon\" src=\"images/Required.png\" style=\"display:inline-block;\">\n        </td>\n        <td valign=\"middle\" *ngIf=\"edit\" >\n          <input [(ngModel)]=\"veld.disabled\" tabindex=\"-1\" title=\"Vinkje\" class=\"control checkbox\" type=\"checkbox\">\n        </td>\n        <td valign=\"middle\" *ngIf=\"edit\" >\n            <label style=\"white-space:nowrap;\">Disabled</label>\n        </td>\n        <td valign=\"middle\" *ngIf=\"edit\" >\n          <input [(ngModel)]=\"veld.verplicht\" tabindex=\"-1\" title=\"Vinkje\" class=\"control checkbox\" type=\"checkbox\">\n        </td>\n        <td valign=\"middle\" *ngIf=\"edit\" >\n          <label style=\"white-space:nowrap;\">Verplicht</label>\n        </td>\n        <td valign=\"middle\" *ngIf=\"edit\" >\n          <fa [name]=\"'save'\" (click)=\"toggleEdit($event)\" title=\"escape\"></fa>\n        </td>\n    </div>\n    <!--Bijlage control-->\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], bijlageComponent);
    return bijlageComponent;
}());
exports.bijlageComponent = bijlageComponent;
//# sourceMappingURL=bijlage.component.js.map