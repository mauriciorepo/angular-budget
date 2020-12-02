import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Company } from '../../companies/shared/company.model';
import { CompanyService } from '../../companies/shared/company.service';
import { OrderService } from '../shared/orderservice.model';
import { OrderServiceService } from '../shared/orderService.service';

import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { error } from 'console';
import { OrderServiceItems } from '../shared/orderserviceitems.model';

@Component({
  selector: 'app-orderservice-form',
  templateUrl: './orderservice-form.component.html',
  styleUrls: ['./orderservice-form.component.css']
})
export class OrderserviceFormComponent implements OnInit {

  orderServiceForm:FormGroup;
  currentAction:string;
  listCompany: Company[];
  orderService:OrderService;
  serverErrormessages: string[]=null;
  submitingForm: boolean=false;
  pageTitle:string='';
  hidden: boolean=true;
  serverErrorMessages: string[]=null;
  edit: boolean=false;
  item: OrderServiceItems;
  listOrderServiceItem:OrderServiceItems[];
  items:FormArray;
  EditRowID: number=0;
  name: string='';
  private editing: boolean = false;
  numItemOInterator: number=0;
  constructor(
    private orderServiceService: OrderServiceService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
   
    
    

  ) { }

  ngOnInit(): void { 
    this.setCurrentAction();
    this.buildOrderServiceForm();

    this.getCompanies();

  }

  ngAfterContentChecked(){
    this.setPageTitle();
  }
   getCompanies(){
     this.companyService.getAll().subscribe(list=>this.listCompany=list)
   }
   submitForm(){

    this.submitingForm=true;
    if(this.currentAction== 'new'){
    this.createOrderService();
    }else{
      this.updateOrderService();
    }


  }

  private setCurrentAction(){
    if(this.route.snapshot.url[0].path  == 'new')
      this.currentAction='new';
      else
        this.currentAction='edit';
  } 

  private buildOrderServiceForm(){
    this.orderServiceForm=this.formBuilder.group({
      id:[0],
      title:[null,[Validators.required, Validators.maxLength(255)]],
      aval:[false],
      id_company: [0],
      status: [null, [Validators.required]],
      orderNumber:[{value: null, disabled: true}],
      description: [null],
      modified:[null],
      registrationDate: [null],
      list:this.formBuilder.array([this.buildItem()])
      

    })
  }

  buildItem(): FormGroup {
    return this.formBuilder.group({
      id: 0,
       description: new FormControl('',[Validators.required,Validators.minLength(1)]),
         quantity: 1,
         scopeTitle: false,
         price: 0,
         numItem: ++this.numItemOInterator,
        ORDERSERVICE_ID: 0
    });
  }
 
  private setPageTitle(){
    if(this.currentAction == 'new'){
      this.pageTitle='Orçamento | Novo'

    }else{
      this.pageTitle='Orçamento | Edit'
    }
  }

  createOrderService(){
    const order:OrderService=Object.assign(new OrderService, this.orderServiceForm.value)
    console.log(order)
    this.orderServiceService.create(order).subscribe(
      orderService=>this.actionsForSuccess(orderService),
      error=> this.actionsForError(error)
    )
      
    
  }
  updateOrderService(){

  }

  private actionsForSuccess(order:OrderService){
    this.toastr.info('Processado com sucesso')

    this.router.navigateByUrl('orderservices',{skipLocationChange:true}).then(
      ()=> this.router.navigate(['orderservices'])
    )
  }

  private actionsForError(error){
    this.toastr.error("ocorreu um erro")
    this.submitingForm=false
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

  Edit1(val: number, field:string) {
    console.log(val)
    this.EditRowID = val;
    this.name=field;
    console.log(this.name)
    this.editing = true;
  }

  get typeStatus(): Array<any>{
    return Object.entries(OrderService.statusList).map(
      ([value, text])=>{
        return {
          text: text,
          value: value
        }
      }
    )
  }
//Listgroup operations

addItem(): void {
  this.items = this.orderServiceForm.get('list') as FormArray;
  this.items.push(this.buildItem());
}

Edit(val: number) {
  console.log(val)
  this.EditRowID = val;
  
  this.editing = true;
}

removeItem(i: number){
  this.items = this.orderServiceForm.get('list') as FormArray;
  console.log(i)
  this.items.removeAt(i);
}
moveItem(item, i: number){
  console.log(typeof item)
  console.log(typeof item.controls)
  console.log(item.controls.id.value)
  this.items=this.orderServiceForm.get('list') as FormArray;
  
  console.log('index: '+i)
  this.items.insert(i, this.buildItem());
}


  getBiggestNumItem(){
    this.items = this.orderServiceForm.get('list') as FormArray;
    console.log(this.items)
    //this.items.controls.find((itemA, itemB)=> itemB.toString().numItem >  itemA.get('numItem').value  );
    
  }

  onBlur($event: Event) {
    console.log($event.type)
    console.log($event.currentTarget)
    this.editing = false;
    
  }

 



}
