import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prenotazione } from '../classes/prenotazione';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {

    public baseUrl = "http://localhost:8080/prenotazione";

    constructor(private httpClient: HttpClient) {}

    public getPrenotazioni(): Observable<any> {
        return this.httpClient.get(this.baseUrl);
    }

    public deletePren(id: number): Observable<any>{
        return this.httpClient.delete(this.baseUrl+"/"+id);
    }

    public getPrenotazione(id: number): Observable<any>{
        return this.httpClient.get(this.baseUrl+"/getCodice?codice="+id);
    }

    public updatePren(id: number, body: Prenotazione): Observable<any>{
        return this.httpClient.put(this.baseUrl+"/getCodice?codice="+id, body);
    }

    public addPren(codice: String, codiceVolo: String, codiceCliente: String, data: String){
        return this.httpClient.post(this.baseUrl, {
            codice: codice,
            codiceVolo: codiceVolo,
            codiceCliente: codiceCliente,
            data: data
        });
    }

    public editPren(codicePrenotazione: String, codiceVolo: String, codiceCliente: String, data: string) {
        return this.httpClient.put(this.baseUrl+"/"+codicePrenotazione, {
            codice: codicePrenotazione,
            codiceVolo: codiceVolo,
            codiceCliente: codiceCliente,
            data: data
        });
    }
}
