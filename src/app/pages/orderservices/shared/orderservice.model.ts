import { FormGroup } from '@angular/forms';
import { Company } from '../../companies/shared/company.model';
import { OrderServiceItems } from './orderserviceitems.model';

export class OrderService{
    constructor(
        public id?: number,
        public title?: string,
        public company?: Company,
        public id_company?: number,
        public status?: string,
        public orderNumber?: string,
        public description?: string,
        public modified?: string,
        public registrationDate?: string,
        public aval: boolean=false,
        public list?: OrderServiceItems[]
    ){}

    /*get avalText():string{
        return this.aval ? 'Pronto' : 'Em Avaliação'
    }*/


    static statusList={
        Concluido: 'Concluido',
        Enviado: 'Enviado',
        Execucao: ' Em execução',
        Finalizado: 'Finalizado',
        Concorrencia: 'Em Concorência'

    }
}