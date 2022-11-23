import { Component } from '@angular/core';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  dataList:any;

  constructor(private service:MasterService){
    this.service.getEmplist().subscribe((result:any) =>  { this.dataList = result });
    
    }


}
