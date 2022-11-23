import { Component,OnInit } from '@angular/core';
import  { MasterService } from '../service/master.service';


@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  dataList:any;

  constructor(private service:MasterService){

    this.service.getEmplist().subscribe((result:any) => {
      this.dataList = result;
    })

  }

ngOnInit(){}



 

}
