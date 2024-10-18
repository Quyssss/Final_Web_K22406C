import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Nhập FormsModule
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'; // Thêm import NgOptimizedImage

@Component({
  selector: 'app-dangnhap',
  standalone: true,
  imports: [FormsModule, RouterModule, NgOptimizedImage], // Thêm NgOptimizedImage vào đây
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.scss'] // Sửa thành styleUrls thay vì styleUrl
})
export class DangnhapComponent {
  Username: string = '';
  password: string = '';

  onSubmit() {
    // Xử lý logic đăng nhập ở đây
    console.log('Username:', this.Username);
    console.log('Password:', this.password);
  }
}
