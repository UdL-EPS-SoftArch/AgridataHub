import { Component, EventEmitter, Output } from '@angular/core';
import { ProviderService } from '../provider.service';
import { Provider } from '../provider';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';



@Component({
  selector: 'app-provider-search',
  templateUrl: './provider-search.component.html'
})

export class ProviderSearchComponent {
  @Output() emitResults: EventEmitter<Provider> = new EventEmitter();
  searchFailed = false;
  searching = false;

  constructor(private providerService: ProviderService) {
  }

  search(): (text$: Observable<string>) => Observable<Provider[]> {
    return (text$: Observable<string>) => text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term => term.length < 3 ? of([]) :
        this.providerService.findByUsernameContaining(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );
  }

  select(item: any): void {
    this.emitResults.emit(item as Provider);
  }
}
