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
var nummerComponent = (function () {
    function nummerComponent() {
        this.onDelete = new core_1.EventEmitter();
    }
    nummerComponent.prototype.toggleEdit = function () {
        this.edit = !this.edit;
    };
    nummerComponent.prototype.deleteVeld = function (veld) {
        this.onDelete.emit(veld);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], nummerComponent.prototype, "veld", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], nummerComponent.prototype, "pagina", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], nummerComponent.prototype, "onDelete", void 0);
    nummerComponent = __decorate([
        core_1.Component({
            selector: 'nummer',
            template: "\n    <!--Cijfer control-->\n    <div>\n      <td>\n          <button *ngIf=\"edit\" (click)=\"deleteVeld(veld)\" class=\"webbutton webbutton-image-only cursorpointer\" style=\"white-space:nowrap;\">\n              <span class=\"webbuttonimagecontainer\"><img class=\"webbutton-image\" src=\"app/images/delete.png\"></span>\n          </button>\n      </td>\n      <td class=\"label\" valign=\"top\">\n        <label *ngIf=\"!edit\" style=\"white-space:nowrap;\">{{veld.label}}</label>\n        <input *ngIf=\"edit\" (dblclick)=\"toggleEdit($event)\" class=\"control\" [(ngModel)]=\"veld.label\" type=\"text\">\n      </td>\n      <td class=\"value valuerows0\" valign=\"top\">\n        <div>\n          <span *ngIf=\"!edit && !pagina.edit\" (dblclick)=\"toggleEdit($event)\"  title=\"Nummer\">{{veld.waarde}}</span>\n          <input *ngIf=\"edit || pagina.edit\" (dblclick)=\"toggleEdit($event)\" class=\"control\" [(ngModel)]=\"veld.waarde\" type=\"text\">\n        </div>\n      </td>\n    </div><!--Cijfer control-->\n\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], nummerComponent);
    return nummerComponent;
}());
exports.nummerComponent = nummerComponent;
//# sourceMappingURL=nummer.component.js.map