import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prenotazione } from 'src/app/classes/prenotazione';
import { PrenotazioneService } from 'src/app/services/prenotazione.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

    prenotazioni!: Prenotazione[];
    prenotazione: Prenotazione = new Prenotazione();
    id!: number;
    constructor(private service: PrenotazioneService, private router: Router) {}

    ngOnInit() {
        this.service.getPrenotazioni().subscribe(data => {
            console.log(data);
            this.prenotazioni = data;
        })
    }

    deletePren(id: number) {
        this.service.deletePren(id).subscribe(data => {
            console.log(data);
            this.ngOnInit();
        },
        error => console.log(error));
    }

    editPren(id: number) {
        this.router.navigate(['aggiorna', id]);
        console.log(id);
    }

    aggiungi(){
        this.router.navigateByUrl("aggiungi");
    }
}
