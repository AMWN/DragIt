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
var memoComponent = (function () {
    function memoComponent() {
        this.onDelete = new core_1.EventEmitter();
    }
    memoComponent.prototype.toggleEdit = function () {
        this.edit = !this.edit;
    };
    memoComponent.prototype.deleteVeld = function (veld) {
        this.onDelete.emit(veld);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], memoComponent.prototype, "veld", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], memoComponent.prototype, "pagina", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], memoComponent.prototype, "onDelete", void 0);
    memoComponent = __decorate([
        core_1.Component({
            selector: 'memo',
            template: "\n    <!--Tekstblok control-->\n    <div (keyup.escape)=\"toggleEdit($event)\">\n      <td>\n          <button *ngIf=\"edit\" (click)=\"deleteVeld(veld)\" class=\"webbutton webbutton-image-only cursorpointer\" style=\"white-space:nowrap;\">\n              <span class=\"webbuttonimagecontainer\"><img class=\"webbutton-image\" src=\"app/images/delete.png\"></span>\n          </button>\n      </td>\n      <td class=\"label\" valign=\"top\">\n        <label *ngIf=\"!edit\" (dblclick)=\"toggleEdit($event)\" style=\"white-space:nowrap;\">{{veld.label}}</label>\n        <input *ngIf=\"edit\" class=\"control\" [(ngModel)]=\"veld.label\" type=\"text\">\n      </td>\n      <td class=\"value valuerows{{veld.regels}}\" valign=\"top\">\n        <div>\n          <table cellpadding=\"0\" cellspacing=\"0\">\n            <tbody>\n              <tr>\n                <td valign=\"top\">\n                  <div *ngIf=\"!edit && !pagina.edit\" (dblclick)=\"toggleEdit($event)\" style=\"width: 66%\" class=\"readonlyMemo doWrap fixedHeight memoRows{{veld.regels}}\">\n                    <span  >{{veld.waarde}}</span>\n                  </div>\n                  <textarea *ngIf=\"edit || pagina.edit\"  (dblclick)=\"toggleEdit($event)\"  [(ngModel)]=\"veld.waarde\"  cols=\"100\" [disabled]=\"veld.disabled\" [ngClass]=\"{'disabled' : veld.disabled && !veld.verplicht}\"></textarea>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </td>\n      <td valign=\"middle\" *ngIf=\"veld.verplicht\">\n        <img class=\"validatoricon\" src=\"images/Required.png\" style=\"display:inline-block;\">\n      </td>\n      <td valign=\"middle\" *ngIf=\"edit\" >\n        <input [(ngModel)]=\"veld.disabled\" tabindex=\"-1\" title=\"Vinkje\" class=\"control checkbox\" type=\"checkbox\">\n      </td>\n      <td valign=\"middle\" *ngIf=\"edit\" >\n          <label style=\"white-space:nowrap;\">Disabled</label>\n      </td>\n      <td valign=\"middle\" *ngIf=\"edit\" >\n        <input [(ngModel)]=\"veld.verplicht\" tabindex=\"-1\" title=\"Vinkje\" class=\"control checkbox\" type=\"checkbox\">\n      </td>\n      <td valign=\"middle\" *ngIf=\"edit\" >\n        <label style=\"white-space:nowrap;\">Verplicht</label>\n      </td>\n      <td valign=\"middle\" *ngIf=\"edit\" >\n        <fa [name]=\"'save'\" (click)=\"toggleEdit($event)\" title=\"Escape\"></fa>\n      </td>\n    </div><!--Tekstblok control-->\n"
        }), 
        __metadata('design:paramtypes', [])
    ], memoComponent);
    return memoComponent;
}());
exports.memoComponent = memoComponent;
//# sourceMappingURL=memo.component.js.map