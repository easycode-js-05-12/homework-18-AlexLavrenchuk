import { Http } from './../core/http.service';
import { ENV } from './../config/env';

export class NewsService {

    //the method makes the get request and passes the token in the header
    getNews(token) {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.get(`${ENV.apiUrl}/public/news`, {
                type: "GET",
                headers: {
                    "x-access-token": token
                }
            })
                .then((response) => resolve(response))
                .catch((err) => reject(err));
        });
    }
}