import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: any[];

  constructor() {
    const pruducto1 = {
      nombre: 'Arroz blanco',
      descripcion: 'Alimento rico en hidratos de carbono',
      comprado: false,
    };
    const pruducto2 = {
      nombre: 'Arroz integral',
      descripcion: 'Alimento rico en fibra e hidratos de carbono',
      comprado: false,
    };
    const pruducto3 = {
      nombre: 'Platanos',
      descripcion: 'Fruta con alto contenido de potasio',
      comprado: false,
    };
    const pruducto4 = {
      nombre: 'Agua',
      descripcion: 'Bebida refrescante',
      comprado: false,
    };
    const pruducto5 = {
      nombre: 'Cocacola',
      descripcion: 'Bebida gaseosa con bastante azucar',
      comprado: false,
    };
    const pruducto6 = {
      nombre: 'Humus',
      descripcion: 'Crema de pure de garbanzos cocidos',
      comprado: false,
    };
    const pruducto7 = {
      nombre: 'Pistachos',
      descripcion: 'Frutos secos con alta cantidad de grasas saludables',
      comprado: false,
    };
    const pruducto8 = {
      nombre: 'Pan',
      descripcion: 'Alimento basico que forma parte de la dieta europea',
      comprado: false,
    };
    this.productos = [];
    this.productos.push(pruducto1);
    this.productos.push(pruducto2);
    this.productos.push(pruducto3);
    this.productos.push(pruducto4);
    this.productos.push(pruducto5);
    this.productos.push(pruducto6);
    this.productos.push(pruducto7);
    this.productos.push(pruducto8);
  }
  ngOnInit() {
  }
}
