import { Time } from "@angular/common";
import { Aereo } from "./aereo";
import { Aeroporto } from "./aeroporto";

export class Volo {
    codice!: number;
    codiceAereo!: Aereo;
    terminalOrigine!: Aeroporto;
    terminalDestinazione!: Aeroporto;
    dataPartenza!: Date;
    oraPartenza!: Time;
    dataArrivo!: Date;
    oraArrivo!: Time;
    prezzo!: number;
}
