import { Cliente } from "./cliente";
import { Volo } from "./volo";

export class Prenotazione {
    codice!: number;
    codiceVolo!: Volo;
    codiceCliente!: Cliente;
    data!: Date;
}
