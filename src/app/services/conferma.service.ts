import { ConfermaComponent } from "../pages/conferma/conferma.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from "@angular/core";

@Injectable()
export class ConfermaService{
    closeResult = "";
    constructor(private modalService: NgbModal) { }

    public confirm(
        title: string,
        message: string,
        btnOkText: string = 'OK',
        btnCancelText: string = 'Annulla',
        dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
        const modalRef = this.modalService.open(ConfermaComponent, { size: dialogSize });
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.btnOkText = btnOkText;
        modalRef.componentInstance.btnCancelText = btnCancelText;

        return modalRef.result;
    }

}
