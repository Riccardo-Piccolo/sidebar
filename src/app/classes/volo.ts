import { Aereo } from "./aereo";
import { Aeroporto } from "./aeroporto";

export class Volo {
    codice!: number;
    codiceAereo!: Aereo;
    terminalOrigine!: Aeroporto;
    terminalDestinazione!: Aeroporto;
    dataPartenza!: Date;
    oraPartenza!: String;
    dataArrivo!: Date;
    oraArrivo!: String;
    prezzo!: number;
    durata: String = "";
    numeroScali: number = 0;
}
