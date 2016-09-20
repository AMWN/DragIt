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
var VELDEN = [
    { type: 'datum', label: "Datum", waarde: '15-01-1985', regels: 1, omschrijving: '', icon: 'calendar' },
    { type: 'tekst', label: "Tekst", waarde: 'Tekst veld', regels: 1, omschrijving: '', icon: 'align-justify' },
    { type: 'nummer', label: "Nummer", waarde: '1200,00', regels: 5, omschrijving: '', icon: 'euro' },
    { type: 'memo', label: "Memo", waarde: 'Lorem Khaled Ipsum is a major key to success. Celebrate success right, the only way, apple. Another one. The other day the grass was brown, now it’s green because I ain’t give up. Never surrender. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? Fan luv. Mogul talk. Wraith talk.', regels: 3, omschrijving: '', icon: 'commenting' },
    { type: 'url', label: "Link1", waarde: 'www.afas.nl', regels: 1, omschrijving: 'Omschrijving', icon: 'link' },
    { type: 'url2', label: "Link2", waarde: '1', regels: 1, omschrijving: 'Omschrijving', icon: 'unlink' },
    { type: 'bijlage', label: "Bijlage", waarde: 'Factuur 20160001.pdf', regels: 1, omschrijving: '', icon: 'file' },
    { type: 'janee', label: "Janee", waarde: '1', regels: 1, omschrijving: '', icon: 'check-square' },
];
var WEBPARTS = [
    { omschrijving: "Algemeen",
        velden: [{
                type: "tekst",
                label: "Label",
                waarde: "Omschrijving",
                regels: 1,
                omschrijving: ""
            }],
        icon: 'wpforms'
    }
];
var slideoutComponent = (function () {
    function slideoutComponent() {
        this.velden = VELDEN;
        this.webparts = WEBPARTS;
    }
    slideoutComponent.prototype.toggleEdit = function () {
        console.log('click');
        this.pagina['edit'] = !this.pagina['edit'];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], slideoutComponent.prototype, "pagina", void 0);
    slideoutComponent = __decorate([
        core_1.Component({
            selector: 'slideout',
            template: "\n    <ul [dragula]='\"bag-one\"' [dragulaModel]='velden'>\n      <li *ngFor=\"let veld of velden\" class='copy-me'>\n          <fa [name]=\"veld.icon\"></fa>\n      </li>\n    </ul>\n\n    <ul [dragula]='\"bag-webpart\"' [dragulaModel]='webparts'>\n      <li *ngFor=\"let webpart of webparts\" class='copy-me'>\n          <fa [name]=\"webpart.icon\"></fa>\n      </li>\n    </ul>\n\n    <ul>\n      <li>\n          <input type=\"checkbox\" name=\"edit\" [(ngModel)]=\"pagina.edit\">Edit modus<br>\n      </li>\n    </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], slideoutComponent);
    return slideoutComponent;
}());
exports.slideoutComponent = slideoutComponent;
//# sourceMappingURL=slideout.component.js.map