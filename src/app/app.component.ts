import { Component, ViewChild, AfterViewInit} from '@angular/core';
import { ChildComponent } from './child/child.component';
import { MasterService } from './service/master.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  inputname = '';
  inputmakrs = '';

@ViewChild( ChildComponent ) childPush !: ChildComponent; 

dataList:any;

constructor(private service:MasterService){
this.service.getEmplist().subscribe((result:any) =>  { this.dataList = result });

}

ngAfterViewInit(){
  
}

  objData: any = [{ name: '', marks: '' }];

  getData(name: any, marks: any) {
    // this.inputname = name;
    // this.inputmakrs = marks;
    this.objData = { name, marks };
    this.childPush.dataList.push(this.objData);

  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
