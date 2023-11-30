import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, catchError, finalize, of, timeInterval} from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';

export interface Producto {
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  productos$!: Observable<Producto[]>;

  constructor(@Inject(ProductsService) private productosService: ProductsService) {}
  
  ngOnInit(): void {
    this.productos$ = this.productosService.getProductos()
                      .pipe(catchError((err) => {
                        this.mensajeError();
                        
                        return of([]);
              }));
  }

  private mensajeError(): void {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    });
  }
}


//WITH ASYNC
// productos$!: Observable<Producto[]>;
// this.productos$ = this.productosService.getProductos();


//ERROR
// this.productos$ = this.productosService.getProductos()
// .pipe(catchError((err) => {
//   this.mensajeError();
//   return of([]);
// }));