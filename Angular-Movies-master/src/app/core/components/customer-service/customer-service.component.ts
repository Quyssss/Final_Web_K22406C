import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-vnpay-return',
  templateUrl: './customer-service.component.html',
  standalone: true,
  styleUrls: ['./customer-service.component.scss']
})
export class CustomerServiceComponent implements AfterViewInit {

  ngAfterViewInit() {
    const submitButton = document.getElementById('submitFeedback');
    if (submitButton) {
      submitButton.addEventListener('click', function () {
        alert('Phản hồi của bạn đã được gửi thành công!');
        window.location.href = '/';
      });
    }
  }
}
