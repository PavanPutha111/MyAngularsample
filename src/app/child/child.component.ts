import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() childName:any;
  @Input() childMarks:any;

  dataList = [{'name':'Peter','marks':'95'}];

}
