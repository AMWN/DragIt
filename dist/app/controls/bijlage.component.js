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
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
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
            templateUrl: 'app/controls/bijlage.component.html',
            directives: [ng2_dragula_1.Dragula]
        }), 
        __metadata('design:paramtypes', [])
    ], bijlageComponent);
    return bijlageComponent;
}());
exports.bijlageComponent = bijlageComponent;
//# sourceMappingURL=bijlage.component.js.map