import { HomeService } from './../services/home.service';

export class HomeComponent {
    constructor() {
        this._homeService = new HomeService();
        this._homeInner;
    }

    //the method calls the request, waits for the response and saves to the variable _homeInner
    async beforeRender() {
        this._homeInner = await this._homeService.getHomeInner();

        //add link for fonts
        const head = document.querySelector('head');
        const link = document.createElement('link');
        link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Mr+De+Haviland');
        link.setAttribute('rel', 'stylesheet');
        head.appendChild(link);
    }

    //method returns markup for page creation
    render() {
        return `
        <style>
            ${this._style()}
        </style>
        <section _ngcontent-c13="" class="inner d-flex flex-column ng-star-inserted" style="height: unset;">
            <div _ngcontent-c13="" class="inner-main d-flex align-items-center" is-heigher="" style="background-image: url(&quot;${this._homeInner.homeBackground}&quot;);">
                <div _ngcontent-c13="" class="container d-flex justify-content-center justify-content-sm-start">
                    <div _ngcontent-c13="" class="inner-content">
                        <h1 _ngcontent-c13="">Most liked Person</h1>
                        <span _ngcontent-c13="" class="d-block">Be Most Wanted</span>
                        <p _ngcontent-c13="">${this._homeInner.innerText}</p>
                        <p _ngcontent-c13="">Please join us and express your opinion by voting on the photos.</p>
                        <!---->
                        <!--<button _ngcontent-c13="" class="btn btn-bg-gradient btn-xl btn-fs-lg d-flex ng-star-inserted">
                            <span _ngcontent-c13="">Join Us</span>
                                <span _ngcontent-c13="" class="chevrons-wrap">
                                    <i _ngcontent-c13="" class="fa-icon fas fa-chevron-right"></i>
                                    <i _ngcontent-c13="" class="fa-icon fas fa-chevron-right"></i>
                                </span>
                        </button>-->
                        <button class="button-joinUs">
                            Join Us
                            <span>&#x3E;</span>
                            <span>&#x3E;</span>
                        </button>
                    </div>
                </div>
            </div>
            <div _ngcontent-c13="" class="inner-desc">
                <div _ngcontent-c13="" class="container d-flex flex-column align-items-center flex-shrink-0">
                    <ul _ngcontent-c13="" class="inner-desc-stats d-flex flex-column align-items-center flex-sm-row">
                        <li _ngcontent-c13="" class="d-flex align-items-center">${this._homeInner.cities} Cities</li>
                        <li _ngcontent-c13="" class="d-flex align-items-center">${this._homeInner.countries} Countries</li>
                        <li _ngcontent-c13="" class="d-flex align-items-center">In ${this._homeInner.regions} Regions In The World</li>
                    </ul>
                    <span _ngcontent-c13="" class="inner-desc-title text-center">You can be one of the winners and we will introduce you to the world</span>
                </div>
            </div>
        </section>
        `;
    }

    //styles for block inner
    _style() {
        return `
        @-webkit-keyframes shake {
            100% {
              -webkit-transform: translateX(15px);    
            }
        }
        @keyframes shake {
            100% {
              transform: translateX(15px);    
            }
        }
        @-webkit-keyframes shake-last {
            100% {
              -webkit-transform: translateX(20px);    
            }
        }
        @keyframes shake-last {
            100% {
              transform: translateX(20px);    
            }
        }
        * {
            box-sizing: border-box;
        }
        body {
            margin: 0;
            padding: 0;
        }
        .inner-main {
            overflow: hidden;
            max-width: 100%;
            min-height: 786px;
            background: no-repeat center / cover;
        }
        .inner .inner-main .inner-content {
            width: 100%;
            max-width: 498px;
            padding: 42px;
            color: #fff;
            background-color: rgba(0,0,0,.65);
        }
        .inner .inner-main .inner-content h1 {
            font-size: 65px;
            margin-bottom: 22px;
            font-weight: 400;
        }
        .inner .inner-main .inner-content > span {
            font-size: 60px;
            font-family: 'Mr De Haviland', cursive;
            font-weight: 700;
            word-spacing: .2em;
            margin-bottom: 35px;
            color: #e12ebc;
        }
        .inner .inner-main .inner-content p {
            font-size: 22px;
            margin: 0;
            line-height: 1.5;
        }
        .inner .inner-main .inner-content p + p {
            margin-top: 20px;
            margin-bottom: 50px;
        }
        .button-joinUs {
            background: linear-gradient(to right,#7303c0 0,#ec38bc 76%,#fa66cb 100%);
            border: none;
            border-radius: 40px;
            cursor: pointer;
            padding: 20px 60px;
            position: relative;
            transition: .5s;
            text-transform: uppercase;
            color: #fff;
            font-size: 18px;
        }
        .button-joinUs span {
            position: relative;
            display: inline-block;
            font-size: 26px;
            line-height: 0;
            letter-spacing: -10px;

        }
        .button-joinUs::after {
            content: '';
            display: block;
            position: absolute;
            width: calc(100% - 24px);
            height: 48%;
            top: 2px;
            left: 50%;
            transform: translate(-50%);
            background: linear-gradient(to top,rgba(255,255,255,.05) 0,rgba(255,255,255,.7) 100%);
            border-radius: 500px;
            transition: .5s;
            opacity: 0;
            z-index: 100;
        }
        .button-joinUs:hover::after {
            opacity: 1;
        }
        .button-joinUs:hover {
            box-shadow: inset 0 0 40px 0 #ff00b2;
        }
        .button-joinUs:hover > span {
            -webkit-animation: shake .7s linear alternate infinite;
            animation: shake .7s linear alternate infinite;
        }
        .button-joinUs:hover > span:last-child {
            -webkit-animation: shake-last .7s linear alternate infinite;
            animation: shake-last .7s linear alternate infinite;
        }
        .button-joinUs:focus {
            outline: none;
        }
        .inner .inner-desc {
            padding: 35px 0;
            color: #fff;
            background-color: #212121;
        }
        .inner .inner-desc .inner-desc-stats {
            font-size: 18px;
            margin-bottom: 20px;
            list-style: none;
            padding: 0;
        }
        .inner .inner-desc .inner-desc-stats li::after {
            content: "";
            display: inline-flex;
            margin: 0 20px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #fff;
        }
        .inner .inner-desc .inner-desc-stats li:last-child::after {
            display: none;
        }
        `
    }


    afterRender() {
        
    }
} 