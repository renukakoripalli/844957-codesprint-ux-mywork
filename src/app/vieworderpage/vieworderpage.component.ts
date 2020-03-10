import { Component, OnInit } from '@angular/core';
import { Orderpage } from 'src/app/Models/orderpage';
import { OrderpageService } from '../services/orderpage.service';

@Component({
  selector: 'app-vieworderpage',
  templateUrl: './vieworderpage.component.html',
  styleUrls: ['./vieworderpage.component.css']
})
export class VieworderpageComponent implements OnInit {
  item:Orderpage;
  sno:number;
  buyername:string;
  shippingaddress:string;
    city:string;
    amount:number;
    phone:number;
   
  list:Orderpage[]=[];
  constructor(private service:OrderpageService) {
    // this.service.view().subscribe(res=>{
    //   this.list=res;
    //   console.log(this.list)
    // })
   }

  ngOnInit() {
  }
 
}