import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


import { switchMap } from 'rxjs/operators';
import { Company } from '../shared/company.model';
import { CompanyService } from '../shared/company.service';


@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit ,AfterContentChecked{

 company: Company
 currentAction: string;
 companyForm: FormGroup;
 pageTitle: string='';
 serverErrorMessages: string[]=null;
 submittingForm: boolean=false;
 hidden: boolean=true;
 //disabled: boolean=true;
 states:Object

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
    ) { }
 
  

  ngOnInit(): void {
    this.setCurrentAction();
    this.buildCompanyForm();
    this.loadCompany();
  }

  ngAfterContentChecked(){
    this.setPageTitle();
  }

  submintForm(){
    this.submittingForm=true;
    if(this.currentAction =='new'){
      this.createCompany();
    }else{
      this.updateCompany();
    }

  }

  private setCurrentAction(){
    if(this.route.snapshot.url[0].path == "new")
      this.currentAction="new"
    else
      this.currentAction="edit"
  }

   private buildCompanyForm(){
     this.companyForm=this.formBuilder.group({
      id:[null],
      name:['', [Validators.required,Validators.minLength(2)]],
      contactName:[null, [Validators.required]],
      stateRegistration: [null],
      account:[null],
      email:[null],
      cellphone:[null],
      telephone:[null],
      telephone2:[null],
      localization: [null],
      neighborhood:[null],
      stateAbbrev:[null, [Validators.required]],
      country:[null]



     })
   }

   private setPageTitle(){
     if(this.currentAction == 'new')
      this.pageTitle ='Empresa | Novo'
     else{
     //const companyName = this.company.name || ''
     this.pageTitle = 'Empresa | Edit: ' 
     }
    }

    private loadCompany(){
      if(this.currentAction == 'edit'){
        this.route.paramMap.pipe(
          switchMap(params => this.companyService.getById(+params.get('id')))
        ).subscribe(
          (company) => {
            this.company= company
            this.companyForm.patchValue(company)
          }
        ),
        (error) => alert('error')
      }
    }

     createCompany(){
       const company:Company= Object.assign(new Company, this.companyForm.value);
       this.companyService.createCompany(company).subscribe(
         company=> this.actionsForSuccess(company),
         error => this.actionsForError(error)
       )
    }

    private updateCompany(){
      const company:Company= Object.assign(new Company, this.companyForm.value);
      this.companyService.editCompany(company).subscribe(
        company=> this.actionsForSuccess(company),
        error => this.actionsForError(error)
      )
    }

    private actionsForSuccess(company: Company){
      this.toastr.info("Processado com sucesso")

      this.router.navigateByUrl('companies', {skipLocationChange:true}).then(
        ()=> this.router.navigate(['companies'/*,company.id,'edit'*/])
      )

    }
    actionsForError(error)
    { this.toastr.error('ocorreu um erro')
    this.submittingForm=false;

    if(error.status === 401){
      this.toastr.warning('Não autorizado falha na autenticação')
      this.router.navigate(['/login'])
    }
    if(error.status === 422){
      this.serverErrorMessages= JSON.parse(error._body).erros;
      
    }else{
      this.serverErrorMessages=['Falha na comunicação com o servidor'];
    }

    }

    get typeStates(): Array<any>{
      return Object.entries(Company.states).map(
        ([value, text]) => {
          return {
            text: text,
            value: value
          }
        }
      )
    }
}
