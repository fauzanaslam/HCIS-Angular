import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

export const authGuard: CanActivateFn = async (route, state) => {
  const keycloak = inject(KeycloakService); // Inject the Keycloak service
  const isLoggedIn = await keycloak.isLoggedIn(); // Check if the user is logged in

  if (!isLoggedIn) {
    await keycloak.login({ redirectUri: window.location.origin + state.url }); // Redirect to login
    return false; // Block the route
  }

  return true; // Allow the route
};
