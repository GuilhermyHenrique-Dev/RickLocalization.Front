import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})

export class CardInfoComponent implements OnInit {
  
  dataInfo: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataInfo = [
      {id:1, data: "teste 1"},
      {id:2, data: "teste 2"},
      {id:3, data: "teste 3"},
      {id:4, data: "teste 4"},
      {id:5, data: "teste 5"},
      {id:6, data: "teste 6"},
    ]
  }

  goTo(id: number) {
    this.router.navigate(['/details', id])
  }

}
