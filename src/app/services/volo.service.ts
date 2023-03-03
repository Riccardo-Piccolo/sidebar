import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoloService {

    public baseUrl = "http://localhost:8080/volo";

    constructor(private httpClient: HttpClient) { }

    public getVoli(): Observable<any> {
        return this.httpClient.get(this.baseUrl);
    }

    public getVoliFromToday(): Observable<any> {
        return this.httpClient.get(this.baseUrl+"/getVoliFromToday");
    }

    public getNumeroScali(id: number): Observable<any> {
        return this.httpClient.get(this.baseUrl+"/"+id+"/getNumeroScali");
    }
}
