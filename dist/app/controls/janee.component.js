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
var janeeComponent = (function () {
    function janeeComponent() {
        this.onDelete = new core_1.EventEmitter();
    }
    janeeComponent.prototype.deleteVeld = function (veld) {
        this.onDelete.emit(veld);
    };
    janeeComponent.prototype.toggleEdit = function () {
        this.edit = !this.edit;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], janeeComponent.prototype, "veld", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], janeeComponent.prototype, "pagina", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], janeeComponent.prototype, "onDelete", void 0);
    janeeComponent = __decorate([
        core_1.Component({
            selector: 'janee',
            template: "\n    <!--Ja/nee control-->\n    <tr>\n        <td class=\"label\" valign=\"top\"></td>\n        <td class=\"value valuerows0\" valign=\"top\">\n            <div>\n                <table class=\"checkboxControl\" cellpadding=\"0\" cellspacing=\"0\">\n                    <tbody>\n                        <tr>\n                            <td>\n                                <button *ngIf=\"edit\" (click)=\"deleteVeld(veld)\" class=\"webbutton webbutton-image-only cursorpointer\" style=\"white-space:nowrap;\">\n                                    <span class=\"webbuttonimagecontainer\"><img class=\"webbutton-image\" src=\"app/images/delete.png\"></span>\n                                </button>\n                            </td>\n                            <td valign=\"middle\">\n                                <input *ngIf=\"!edit && !pagina.edit\" [(ngModel)]=\"veld.waarde\" tabindex=\"-1\" title=\"Vinkje\" class=\"control checkbox disabled\" type=\"checkbox\" autocomplete=\"off\" disabled=\"disabled\">\n                                <input *ngIf=\"edit || pagina.edit\" [(ngModel)]=\"veld.waarde\" tabindex=\"-1\" title=\"Vinkje\" class=\"control checkbox\" type=\"checkbox\" autocomplete=\"off\">\n                            </td>\n                            <td valign=\"middle\">\n                                <label *ngIf=\"!edit\" (dblclick)=\"toggleEdit($event)\" style=\"white-space:nowrap;\">{{veld.label}}</label>\n                                <input *ngIf=\"edit\" (dblclick)=\"toggleEdit($event)\" class=\"control\" [(ngModel)]=\"veld.label\" type=\"text\">\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </td>\n    </tr>\n    <!--Ja/nee control-->\n\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], janeeComponent);
    return janeeComponent;
}());
exports.janeeComponent = janeeComponent;
//# sourceMappingURL=janee.component.js.map