import { Component } from '@angular/core';

import { Productos } from 'src/app/models/productos';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  public productosdestacados: Productos[];

  constructor(){
    this.productosdestacados=[
      {
        id: "",
        nombre: "NOTEBOOK HP 15.6 VICTUS RYZEN 5 7535HS 8GB 512GB RTX 2050 FHD W11 15-FB1013DX",
        imagen: "http://localhost:4200/assets/notebook1.jpg",
        precio: 1113999,
        descripcion: "hola",
      },
      {
        id: "",
        nombre: "NOTEBOOK ASUS 16 ROG ZEPHYRUS I7 13620H 16GB 512GB RTX 4060 FHD 165HZ W11",
        imagen: "https://fullh4rd.com.ar/img/productos/32/notebook-asus-16-rog-zephyrus-i7-13620h-16gb-512gb-rtx-4060-fhd-165hz-w11-0.jpg",
        precio: 2019999,
        descripcion: "picado",
      },
      {
        id: "",
        nombre: "VIDEO GEFORCE RTX 4070 SUPER 12GB MSI VENTUS 3X OC",
        imagen: "https://fullh4rd.com.ar/img/productos/3/video-geforce-rtx-4070-super-12gb-msi-ventus-3x-oc-0.jpg",
        precio: 958999,
        descripcion: "anashe",
      },
      {
        id: "",
        nombre: "MOTHER MSI PRO Z790-P WIFI DDR5 S1700",
        imagen: "https://fullh4rd.com.ar/img/productos/2/mother-msi-pro-z790p-wifi-ddr5-s1700-0.jpg",
        precio: 288359,
        descripcion: "nada",
      },
      {
        id: "",
        nombre: "WATERCOOLER 240MM GIGABYTE AORUS WATERFORCE 240",
        imagen: "https://fullh4rd.com.ar/img/productos/23/watercooler-240mm-gigabyte-aorus-waterforce-240-0.jpg",
        precio: 234550,
        descripcion: "nada",
      }
    ]
  }
}
