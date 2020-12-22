import { Component, EventEmitter, Output } from '@angular/core';
import { ReuserService } from '../reuser.service';
import { Reuser } from '../reuser';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';


@Component({
  selector: 'app-reuser-search',
  templateUrl: './reuser-search.component.html'
})

export class ReuserSearchComponent {
  @Output() emitResults: EventEmitter<Reuser> = new EventEmitter();
  searchFailed = false;
  searching = false;

  constructor(private reuserService: ReuserService) {
  }

  search(): (text$: Observable<string>) => Observable<Reuser[]> {
    return (text$: Observable<string>) => text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term => term.length < 3 ? of([]) :
        this.reuserService.findByUsernameContaining(term).pipe(
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
    this.emitResults.emit(item as Reuser);
  }
}
