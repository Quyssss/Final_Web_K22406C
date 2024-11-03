import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  standalone: true,
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent {
  constructor(private http: HttpClient) {}

  requestPayment(amount: number) {
    const bodyData = { amount: amount };

    this.http.post("https://datve-backend-f7b79f25db40.herokuapp.com/getpayment", bodyData).subscribe(
      (response: any) => {
        window.location.href = response.data;
      },
      error => {
        console.error('Payment request error:', error);
        alert('Payment request failed');
      }
    );
  }
}
