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
            templateUrl: 'app/controls/nummer.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], nummerComponent);
    return nummerComponent;
}());
exports.nummerComponent = nummerComponent;
//# sourceMappingURL=nummer.component.js.map