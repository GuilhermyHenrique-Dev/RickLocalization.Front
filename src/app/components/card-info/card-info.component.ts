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
      {id:1, dimensao: "C-35", url: "https://d17lbu6bbzbdc8.cloudfront.net/wp-content/uploads/2020/01/10220452/rick-and-morty3.jpg"},
      {id:2, dimensao: "J-19Z", url: "https://s.aficionados.com.br/imagens/mesmapessoa.jpg"},
      {id:3, dimensao: "C-128", url: "http://farofageek.com.br/wp-content/uploads/2019/11/citadel.png"},
      {id:4, dimensao: "A-24P", url: "https://cdn.ome.lt/1TRewEwf6SzDn3qXT1tCGOIcHVU=/1200x630/smart/extras/conteudos/rick-and-morty.png"},
      {id:5, dimensao: "L-612", url: "https://conteudo.imguol.com.br/c/entretenimento/2c/2017/10/15/rick-and-morty-1508079541138_v2_450x337.png"},
      {id:6, dimensao: "R-44", url: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2017/09/legiao_vBU2S9PCqoWHwVKnthOflk_FixM3DspTNmrI0GcyXY.jpg.jpeg"},
    ]
  }

  goTo(id: number) {
    this.router.navigate(['/details', id])
  }

}
