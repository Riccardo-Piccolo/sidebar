import { Time } from "@angular/common";
import { Aeroporto } from "./aeroporto";
import { Volo } from "./volo";

export class Scalo {
    codice!: number;
	volo!: Volo;
	aeroporto!: Aeroporto;
	data!: Date;
	ora!: Time;
}
