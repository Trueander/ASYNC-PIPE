import { Injectable } from '@angular/core';
import { Observable, delay, dematerialize, materialize, of, throwError } from 'rxjs';
import { Producto } from '../components/listado/listado.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProductos(): Observable<Producto[]> {
    return of([
      {
        nombre: 'Manzana',
        descripcion: 'Una fruta fresca y jugosa con alto contenido en fibra y vitamina C.',
        precio: 1.5,
        imagenUrl: 'https://www.recetasnestle.com.pe/sites/default/files/2022-07/tipos-de-manzana-royal-gala.jpg',
      },
      {
        nombre: 'Tomate',
        descripcion: 'Una verdura versátil rica en antioxidantes y licopeno.',
        precio: 2.0,
        imagenUrl: 'https://s1.eestatic.com/2021/07/12/actualidad/595952167_195030066_1706x960.jpg',
      },
      {
        nombre: 'Pan',
        descripcion: 'Un alimento básico elaborado con harina de trigo y levadura.',
        precio: 3.0,
        imagenUrl: 'https://www.ocu.org/-/media/ocu/images/home/alimentacion/alimentos/panes/panes-guia-compra.jpg?rev=9a1e9247-e398-4c0f-b489-d01d95a221ad&hash=E5149953335F3DC2129A9B495E89DF51',
      },
      {
        nombre: 'Pizza',
        descripcion: 'Un plato italiano tradicional elaborado con pan plano cubierto con salsa de tomate, queso y otros ingredientes.',
        precio: 8.0,
        imagenUrl: 'https://images.hola.com/imagenes/cocina/recetas/20220208204252/pizza-pepperoni-mozzarella/1-48-890/pepperoni-pizza-abob-t.jpg',
      },
      {
        nombre: 'Hamburguesa',
        descripcion: 'Un sándwich compuesto por una hamburguesa de carne molida, pan, queso, lechuga, tomate y otros ingredientes.',
        precio: 7.0,
        imagenUrl: 'https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg',
      },

    ]).pipe(delay(3000));
    // return throwError(() => console.log())
    //         .pipe(
    //           materialize(), 
    //           delay(4000), 
    //           dematerialize()
    //           )
  }
}
