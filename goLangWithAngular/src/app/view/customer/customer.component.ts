import {Component, OnInit} from '@angular/core';
import {Customer} from '../../dto/customer';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  customerDTO: Customer = new Customer();
  cust: Array<Customer> = [];

  constructor(private service: CustomerService,
              private rout: ActivatedRoute,
              private router: Router) {
    this.getCustomer();
  }

  ngOnInit() {
    // this.getCustomer();
    this.rout.params.subscribe(param => {
      if (param && param.id) {
        this.service.getCustomer(param.id).then(
          res => {
            this.customerDTO = res;

          });
      }
    });
  }


  saveCustomer() {
    this.service.saveCustomer(this.customerDTO).subscribe(resul => {
      console.log(resul);
      if (resul) {
        alert('Added');
        window.location.reload();

      }
    });

  }

  getCustomer() {
    this.service.getCustomers().then(
      res => {
        this.cust = res;

      },
    );
  }

  getCustomerData(id){
    console.log(id);
    this.service.getCustomer(id).then(
      res => {
        this.customerDTO = res;
      });

  }


  deleteCustomer() {
    this.service.deleteCustomer(this.customerDTO.id).subscribe(result => {
      if (result) {
        alert("deleted !");
        window.location.reload();
        // alert("De")
      }
    });
  }

  updateCustomer() {
    this.service.updateCustomer(this.customerDTO).subscribe(reult => {
      if (reult) {
        alert("Updated !");
        window.location.reload();


      }
    });
  }
}
