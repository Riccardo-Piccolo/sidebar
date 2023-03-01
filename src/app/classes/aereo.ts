import { Compagnia } from "./compagnia";

export class Aereo {
    codice!: number;
    compagnia!: Compagnia;
    modello!: String;
    posti!: number;
    annoCostruzione!: number;
}
