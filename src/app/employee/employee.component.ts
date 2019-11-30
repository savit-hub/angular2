import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employee :any;
  constructor(private service: DataService) { }

  ngOnInit() {
  let observableresult = this.service.select();
  observableresult.subscribe((result)=>{
    console.log(result);
this.employee=result;


  });


  }

}
