import { Component, OnInit } from '@angular/core';
import { Company } from '../shared/company.model';
import { CompanyService } from '../shared/company.service';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: Company[];
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
   this.getCompanies(); 
  }

  listarCompanies( pagina = 0, tamanho = 5 ){
    this.companyService.getAllPageable(pagina, tamanho).subscribe(response => {
      this.companies = response.content;
      //this.totalElementos = response.totalElements;
      //this.pagina = response.number;
    })
  }

  getCompanies(){
    this.companyService.getAll().subscribe(
      response=> this.companies=response
    )
  }

}
