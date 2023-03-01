import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/classes/cliente';
import { Prenotazione } from 'src/app/classes/prenotazione';
import { Volo } from 'src/app/classes/volo';
import { ClienteService } from 'src/app/services/cliente.service';
import { PrenotazioneService } from 'src/app/services/prenotazione.service';
import { VoloService } from 'src/app/services/volo.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrls: ['./aggiungi.component.css']
})
export class AggiungiComponent implements OnInit {

    @Input()
    prenotazione!: Prenotazione;

    voli!: Volo[];
    clienti!: Cliente[];
    prenotazioni!: Prenotazione[];
    today = new Date();
    todayString!: String;
    myForm!: FormGroup;
    @Input() model!: Prenotazione;
    codicePrenotazione!: String;

    constructor(private service: PrenotazioneService, private voloService: VoloService, private clienteService: ClienteService,
        private router: Router, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.loader();
        this.myForm = this.fb.group({
            selectVolo: ["test", [Validators.required]],
            selectCliente: ["test", [Validators.required]]
        });
    }

    lista() {
        this.router.navigate(["info"]);
    }

    loader(){
        /*
        this.myForm = this.fb.group({
            selectVolo: ["", Validators.required],
            selectCliente: ["", Validators.required]
        });

        this.model = new Prenotazione();

        this.myForm.valueChanges.subscribe(value => {
            this.model.codice = this.prenotazioni.length + 1;
            this.model.codiceCliente = value.selectCliente;
            this.model.codiceVolo = value.selectVolo;
            this.model.data = this.today;
        });*/

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
            this.codicePrenotazione = (this.prenotazioni[this.prenotazioni.length - 1].codice + 1).toString();
        });
    }

    submitForm() {
        console.log("codicePrenotazione: "+ this.codicePrenotazione);
        console.log("volo: "+this.myForm.get("selectVolo")?.value);
        console.log("cliente: "+this.myForm.get("selectCliente")?.value);
        console.log("data: "+formatDate(new Date(), 'yyyy-MM-dd', 'en'));
        this.service.addPren(this.codicePrenotazione, this.myForm.get("selectVolo")?.value, this.myForm.get("selectCliente")?.value, formatDate(new Date(), 'yyyy-MM-dd', 'en'))
            .subscribe(result => console.log(result), error => console.log(error));

    }

}
