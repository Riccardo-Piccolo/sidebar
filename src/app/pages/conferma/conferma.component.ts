import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-conferma',
  templateUrl: './conferma.component.html',
  styleUrls: ['./conferma.component.css']
})
export class ConfermaComponent implements OnInit{

    @Input()
    title!: String;
    @Input()
    message!: String;
    @Input()
    btnOkText!: String;
    @Input()
    btnCancelText!: String;

    constructor(private activeModal: NgbActiveModal) { }

    ngOnInit(): void {

    }

    public declina(){
        this.activeModal.close(false);
    }

    public accetta(){
        this.activeModal.close(true);
    }

    public chiudi(){
        this.activeModal.dismiss();
    }

}
