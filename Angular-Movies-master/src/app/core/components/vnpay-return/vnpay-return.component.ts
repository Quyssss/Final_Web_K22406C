import { Component } from '@angular/core';

@Component({
  selector: 'app-vnpay-return',
  standalone: true,
  imports: [],
  templateUrl: './vnpay-return.component.html',
  styleUrl: './vnpay-return.component.scss'
})
export class VnpayReturnComponent {
  ngOnInit(): void {
    alert('Thanh toán thành công!');
  }
}
