import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empadd',
  templateUrl: './empadd.component.html',
  styleUrls: ['./empadd.component.css']
})
export class EmpaddComponent {

  empname:any;

  constructor(private route:ActivatedRoute){
   this.empname = this.route.snapshot.paramMap.get("name");
  }

}
