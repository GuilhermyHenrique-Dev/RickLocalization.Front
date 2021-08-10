import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: number = Number(this.router.url.substring(9));
  data: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getData(this.id) 
  }

  getData(id: number) {
    if (id == 2) {
      this.data = "teste bem sucedido do 2"
    } 
    if (id == 4) {
      this.data = "teste bem sucedido do 4 porrinha meu"
    }
  }

}
