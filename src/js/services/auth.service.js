import { Http } from './../core/http.service';
import { ENV } from './../config/env';

export class AuthService {
    
    //method returns token from localStorage
    get token() {
        return localStorage.getItem('sn_user_token');
    }

    //method returns id from localStorage
    get userId() {
        return localStorage.getItem('sn_user_id');
    }
    
    //the method makes a post request and transfers data from the login form (email and password)
    login(email, password) {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.post(`${ENV.apiUrl}/public/auth/login`, {email, password})
                .then((response) => {
                    if (!response.auth) return reject(response); 
                    localStorage.setItem('sn_user_id', response.id);
                    localStorage.setItem('sn_user_token', response.token);
                    resolve(response);
                })
                .catch((err) => reject(err));
        });
    }

    //the method makes a post request and transfers data from the registration form
    singUp(data) {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.post(`${ENV.apiUrl}/public/auth/signup`, data)
                .then((response) => {
                    if (response.error) return reject(response);
                    resolve(response);
                })
                .catch((err) => reject(err));
        });
    }
}
