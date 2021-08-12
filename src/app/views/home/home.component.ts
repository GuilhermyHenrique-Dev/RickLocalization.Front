import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  scanner: boolean = false

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goTo(page: string) {
    if (page == '/dashboard') {
      this.scanner = true 
      setTimeout(() => {
        this.router.navigate([page])
        this.scanner = false
      },5000)
    } else {
      this.router.navigate([page])
    }
  }
}
