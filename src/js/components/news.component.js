import { AuthService } from './../services/auth.service';

export class NewsComponent {
    constructor() {
        this._authService = new AuthService();

        this._news;
    }

    //the method calls the request, sends the token, waits for the response and saves to the variable _news
    async beforeRender() {
        this._news = await this._authService.getNews(this._authService.token);
    }

    //method returns markup for page creation
    render() {
        return `
        <style>
            ${this._style()}
        </style>
        <div class="wrapper">
            ${this._allNews()}
        </div>
        `;
    }

    //method creates styles for markup
    _style() {
        return  `
        * {
            box-sizing: border-box;
        }
        html, body, h1, h2, h3, h4, h5, h6, p{
            margin: 0;
            padding: 0;
            font-size: 1rem;
        }
        img {
            max-width: 100%;
        }
        html,body {
            min-height: 100vh;
        }
        .wrapper {
            background-color: grey;
            padding: 20px;
            min-height: 100vh;
        }
        .card-news {
            max-width: 1000px;
            padding: 30px;
            margin: auto;
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }
        .img-block {
            overflow: hidden;
            max-width: 700px;
            max-height: 400px;
        }
        .info {
            margin-right: 20px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 3px;
            flex-grow: 1;
        }
        .avatar {
            max-width: 150px;
            max-height: 150px;
            border-radius: 50%;
            overflow: hidden;
            margin: 0 auto 20px auto;
        }
        .info-user {
            flex-grow: 1;
            margin-bottom: 20px;
        }
        .info-user h4::after {
            content: ".";
            display: block;
            margin-bottom: 5px;
        }
        .info-user h5 {
            margin-bottom: 30px;
        }
        .info-user h3 {
            margin-bottom: 5px;
        }
        .following {
            background: #fff;
            border: 2px solid #000;
            border-radius: 40px;
            cursor: pointer;
            padding: 10px;
            position: relative;
            transition: .5s;
            text-transform: uppercase;
        }
        .following::after {
            content: '';
            display: block;
            position: absolute;
            width: 90%;
            height: 48%;
            top: 2px;
            left: 50%;
            transform: translate(-50%);
            background: linear-gradient(to top,rgba(255,255,255,.05) 0,rgba(255,255,255,.7) 100%);
            border-radius: 20px;
            transition: .5s;
            opacity: 0;
            z-index: 100;
        }
        .following:hover::after {
            opacity: 1;
        }
        .following:hover {
            color: #fff;
            background: linear-gradient(to right,#7303c0 0,#ec38bc 76%,#fa66cb 100%);
        }
        .following:focus {
            outline: none;
        }
        `;
    }

    //method goes through the news
    _allNews() {
        let res="";
        this._news.news.forEach(element => {
            res += this._template(element);
        });
        return res;
    }

    //method creates markup for one news and setting data
    _template(user) {
        let date = Date.now();
        date -= Date.parse(user.date); //here we calculate the time difference
        date = (date / (60 * 60 * 24 * 1000)).toFixed(0); //here we count how many days and remove the fraction

        return `
        <div class="card-news">
                <div class="info">
                    <div class="avatar">
                        <img src="${user.owner.avatar}" alt="avatar">
                    </div>
                    <div class="info-user">
                        <h3>${user.owner.full_name}</h3>
                        <h5>${user.owner.country}</h5>
                        <h4>uploaded ${user.pictures.length} photos</h4>
                        <p>a ${date} ${(+date === 1) ? "day" : "days"} ago</p>
                    </div>
                    <button class="following">following</button>
                </div>
                <div class="img-block">
                <img src="${user.pictures[0].url}" alt='imeges'></img>
                </div>
            </div>
        `;
    }

    afterRender() {
        
    }
}