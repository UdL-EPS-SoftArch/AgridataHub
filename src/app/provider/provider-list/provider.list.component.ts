import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../provider.service';
import { Sort } from '@lagoshny/ngx-hal-client';
import { Provider } from '../provider';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html'
})
export class ProviderListComponent implements OnInit {
  public providers: Provider[] = [];
  public pageSize = 5;
  public page = 1;
  public totalProviders = 0;
  private sorting: Sort[] = [{ path: 'username', order: 'ASC' }];

  constructor(
    public router: Router,
    private providerService: ProviderService) {
  }

  ngOnInit(): void {
    this.providerService.getAll({sort: this.sorting}).subscribe(
      (providers: Provider[]) => {
        this.providers = providers;
        this.totalProviders = this.providerService.totalElement();
      });
  }

  changePage(): void {
    this.providerService.page(this.page - 1).subscribe(
      (providers: Provider[]) => this.providers = providers);
  }

  detail(provider: Provider): void {
    this.router.navigate(['providers', provider.id]);
  }
}
