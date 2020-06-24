import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import { Persona } from '../consultar-persona/consultar-persona.component';

@Injectable()
export class ConsultarPersonaService{

    datos : Persona[];

    constructor(private httpClient: HttpClient){}

    getPersonas(): Observable<any>{
        return this.httpClient.get('./../assets/personas.json');
    }

    guardarPersona(){
        
    }
}