import { formatDate } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/classes/cliente';
import { Prenotazione } from 'src/app/classes/prenotazione';
import { Volo } from 'src/app/classes/volo';
import { ClienteService } from 'src/app/services/cliente.service';
import { PrenotazioneService } from 'src/app/services/prenotazione.service';
import { VoloService } from 'src/app/services/volo.service';

@Component({
  selector: 'app-update-pren',
  templateUrl: './update-pren.component.html',
  styleUrls: ['./update-pren.component.css']
})
export class UpdatePrenComponent {

    id!: number;
    prenotazione!: Prenotazione;
    voli!: Volo[];
    clienti!: Cliente[];
    prenotazioni!: Prenotazione[];
    today = new Date();
    todayString!: String;
    myForm!: FormGroup;
    @Input() model!: Prenotazione;
    codicePrenotazione!: String;

    constructor(private service: PrenotazioneService, private route: ActivatedRoute, private router: Router,
        private voloService: VoloService, private clienteService: ClienteService,
        private fb: FormBuilder) { }

    ngOnInit() {
        this.loader();
        this.myForm = this.fb.group({
            selectVolo: ["test", [Validators.required]],
            selectCliente: ["test", [Validators.required]]
        });
    }

    loader(){
        this.prenotazione = new Prenotazione();
        this.id = this.route.snapshot.params["id"];

        this.service.getPrenotazione(this.id).subscribe(data => {
            console.log(data);
            this.prenotazione = data;
        }, error => {
            console.log(error)
        });

        this.voloService.getVoliFromToday().subscribe(data => {
            console.log(data);
            this.voli = data;
        });

        this.clienteService.getClienti().subscribe(data => {
            console.log(data);
            this.clienti = data;
        });

        this.service.getPrenotazioni().subscribe(data => {
            console.log(data);
            this.prenotazioni = data;
            this.codicePrenotazione = this.prenotazione.codice.toString();
        });
    }

    submitForm() {
        console.log("codicePrenotazione: "+ this.codicePrenotazione);
        console.log("volo: "+this.myForm.get("selectVolo")?.value);
        console.log("cliente: "+this.myForm.get("selectCliente")?.value);
        console.log("data: "+formatDate(new Date(), 'yyyy-MM-dd', 'en'));
        this.service.editPren(this.codicePrenotazione, this.myForm.get("selectVolo")?.value, this.myForm.get("selectCliente")?.value, formatDate(new Date(), 'yyyy-MM-dd', 'en'))
            .subscribe(result => console.log(result), error => console.log(error));

    }

}
