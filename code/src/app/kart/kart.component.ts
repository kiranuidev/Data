import { Component, OnInit } from '@angular/core';

import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.css']
})
export class KartComponent implements OnInit {

  constructor(private productSvc:ProductService) {

    
   }

  ngOnInit() {
  }

}
