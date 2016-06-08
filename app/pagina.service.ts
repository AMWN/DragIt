import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/Observable";

@Injectable()

export class PaginaService {
    constructor(private http: Http) {

    }

    getPagina() {
        return this.http.get('app/pagina.json')
            .map(res => res.json())
    }

}
