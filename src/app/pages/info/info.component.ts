import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prenotazione } from 'src/app/classes/prenotazione';
import { Volo } from 'src/app/classes/volo';
import { ConfermaService } from 'src/app/services/conferma.service';
import { PrenotazioneService } from 'src/app/services/prenotazione.service';
import { VoloService } from 'src/app/services/volo.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

    prenotazioni!: Prenotazione[];
    prenotazione: Prenotazione = new Prenotazione();
    id!: number;
    result!: boolean;
    success!: boolean;

    constructor(private service: PrenotazioneService, private router: Router, private confermaService: ConfermaService,
        private voloService: VoloService) {}

    ngOnInit() {
        this.service.getPrenotazioni().subscribe(data => {
            console.log(data);
            this.prenotazioni = data;
            this.prenotazioni.forEach((element) => {

                var orarioPartenza = element.codiceVolo.oraPartenza.split(":");
                var orarioArrivo = element.codiceVolo.oraArrivo.split(":");

                var partenza = new Date(element.codiceVolo.dataPartenza).setTime(new Date(element.codiceVolo.dataPartenza).getTime()
                    + Number(orarioPartenza[0]) * 60 * 60 * 1000 + Number(orarioPartenza[1]) * 60 * 1000
                    + Number(orarioPartenza[2]) * 1000);
                console.log(partenza);

                var arrivo = new Date(element.codiceVolo.dataArrivo).setTime(new Date(element.codiceVolo.dataArrivo).getTime()
                    + Number(orarioArrivo[0]) * 60 * 60 * 1000 + Number(orarioArrivo[1]) * 60 * 1000
                    + Number(orarioArrivo[2]) * 1000);
                console.log(arrivo);

                const durata = arrivo.valueOf() - partenza.valueOf();
                element.durata = this.convertMsToTime(durata);

                this.voloService.getNumeroScali(element.codice).subscribe(data => {
                    element.numeroScali = data;
                });
            })
        })
    }

    deletePren(id: number) {
        this.confermaService.confirm("Attenzione!", "Sei sicuro di voler cancellare questa prenotazione?")
            .then((confirmed) => this.result = confirmed)
            .catch();

        if(this.result){
            this.service.deletePren(id).subscribe(data => {
                console.log(data);
                this.success = true;
            },
            error => console.log(error));
        }

    }

    editPren(id: number) {
        this.router.navigateByUrl("aggiorna/"+id);
        console.log(id);
    }

    aggiungi(){
        this.router.navigateByUrl("aggiungi");
    }

    padTo2Digits(num: number) {
        return num.toString().padStart(2, '0');
    }

    convertMsToTime(milliseconds: number) {
        let seconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);

        seconds = seconds % 60;
        minutes = minutes % 60;


        return `${this.padTo2Digits(hours)}:${this.padTo2Digits(minutes)}:${this.padTo2Digits(
        seconds,
        )}`;
    }

}
