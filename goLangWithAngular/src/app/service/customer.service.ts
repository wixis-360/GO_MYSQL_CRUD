import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../dto/customer';
import {Updatedto} from '../dto/updatedto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  updatedto: Updatedto = new Updatedto();

  constructor(private http: HttpClient) {
  }

  saveCustomer(customerDto: Customer): Observable<Array<any>> {
    return this.http.post<Array<any>>('http://localhost:8000/customer', JSON.stringify(customerDto));

  }

  updateCustomer(customerDto: Customer): Observable<Array<any>> {
    return this.http.put<Array<any>>('http://localhost:8000/customer/' + customerDto.id, JSON.stringify(customerDto));
  }

  deleteCustomer(id: string): Observable<any> {
    return this.http.delete<any>('http://localhost:8000/customer/' + id);
  }

  getCustomers() {
    return this.http.get('http://localhost:8000/customer').toPromise()
      .then(res => res as Customer[]);
  }


  getCustomer(id: string) {
    return this.http.get('http://localhost:8000/customer/' + id).toPromise()
      .then(res => res as Customer);
  }
}
