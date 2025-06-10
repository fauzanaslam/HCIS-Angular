import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import {Router} from '@angular/router'

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    standalone: false
})
export class SidebarComponent implements OnInit {
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;
  public searchTerm: string = '';
  public menuList = [
    { label: 'Home', path: '/home' },
    { label: 'Salary Increment', path: '/compensation/salary-increment' },
    { label: 'Incentive Allocation', path: '/compensation/incentive-allocation' },
  ];

  public filteredMenuList = this.menuList;

  constructor(
    private readonly keycloak: KeycloakService,
    private readonly router: Router
  ) {}

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
    }

    // Initialize filteredMenuList with all menu items
    this.filteredMenuList = [...this.menuList];
  }

  public logout() {
    this.keycloak.logout();
  }

  // Method to filter menu list based on search input
  public filterMenu() {
    if (this.searchTerm) {
      this.filteredMenuList = this.menuList.filter((menu) =>
        menu.label.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      if (this.filteredMenuList.length === 0) {
        this.filteredMenuList = [{ label: 'No Results Found', path: '' }];
      }
    } else {
      this.filteredMenuList = [...this.menuList];
    }
  }

  public clearSearch() {
    this.searchTerm = '';
    this.filterMenu();
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
