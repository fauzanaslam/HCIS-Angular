import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.css'
})
export class AdminViewComponent implements OnInit {
  isAdmin = false;

  constructor(private keycloakService: KeycloakService) { }


  async ngOnInit() {
    const roles = await this.keycloakService.getUserRoles()
    this.isAdmin = roles.includes('admin');
  }


}
