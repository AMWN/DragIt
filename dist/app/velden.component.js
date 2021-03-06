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
var veld_1 = require('./controls/veld');
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var veldenComponent = (function () {
    function veldenComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', veld_1.Veld)
    ], veldenComponent.prototype, "veld", void 0);
    veldenComponent = __decorate([
        core_1.Component({
            selector: '[veld]',
            templateUrl: 'app/velden.show.html',
            directives: [ng2_dragula_1.Dragula],
        }), 
        __metadata('design:paramtypes', [])
    ], veldenComponent);
    return veldenComponent;
}());
exports.veldenComponent = veldenComponent;
//# sourceMappingURL=velden.component.js.map