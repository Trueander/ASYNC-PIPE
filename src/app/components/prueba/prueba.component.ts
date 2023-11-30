import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, Subject, interval, takeUntil} from 'rxjs';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PruebaComponent implements OnInit {
  numero$!: Observable<number>;
  nuevoValor: number = 0;
  destroy$ = new Subject<void>();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.numero$ = interval(2000)
      .pipe(
        takeUntil(this.destroy$)
      );

    this.numero$.subscribe((numero) => {
      this.nuevoValor = numero;
      console.log(numero, 'desde otro componente');
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
}