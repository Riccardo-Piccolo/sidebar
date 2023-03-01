import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

    public baseUrl = "http://localhost:8080/cliente";

    constructor(private httpClient: HttpClient) {}

    public getClienti(): Observable<any> {
        return this.httpClient.get(this.baseUrl);
    }
}
