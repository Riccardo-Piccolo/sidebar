import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prenotazione } from 'src/app/classes/prenotazione';
import { PrenotazioneService } from 'src/app/services/prenotazione.service';

@Component({
  selector: 'app-update-pren',
  templateUrl: './update-pren.component.html',
  styleUrls: ['./update-pren.component.css']
})
export class UpdatePrenComponent {

    id!: number;
    prenotazione!: Prenotazione;

    constructor(private service: PrenotazioneService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.prenotazione = new Prenotazione();
        this.id = this.route.snapshot.params["id"];

        this.service.getPrenotazione(this.id).subscribe(data => {
            console.log(data);
            this.prenotazione = data;
        }, error => {
            console.log(error)
        });
    }

    lista() {
        this.router.navigate(["info"]);
    }

}
