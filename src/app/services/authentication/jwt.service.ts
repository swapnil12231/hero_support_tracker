import { Injectable } from '@angular/core';
import { JwtToken } from 'src/app/models/authentication/token';


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  urlBase64Decode = (str: string) => {
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
      case 0: break;
      case 2: output += '=='; break;
      case 3: output += '='; break;
      default: {
        throw new Error('Illegal base64url string!');
      }
    }
    return decodeURIComponent(window.atob(output));
  }

  decodeToken = (token: string) => {
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('JWT must have 3 parts');
    }
    const decoded = this.urlBase64Decode(parts[1]);
    if (!decoded) {
      throw new Error('Cannot decode the token');
    }
    return JSON.parse(decoded);
  }

  decodeJwtToken = (token: string): JwtToken => {
    const jwtToken = this.decodeToken(token);
    if (typeof jwtToken.sub !== 'string') {
      throw new Error('Token doesn\'t contain subject');
    }
    // if (typeof jwtToken.tid !== 'string') {
    //   throw new Error('Token doesn\'t contain tenantId');
    // }
    if (typeof jwtToken.exp !== 'string' && typeof jwtToken.exp !== 'number') {
      throw new Error('Token doesn\'t contain exp');
    }
    jwtToken.exp = Number(jwtToken.exp);
    return jwtToken;
  }
}
