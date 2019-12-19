
import {list} from './modules/cardList'; 
import {userName} from './modules/popup';
import {userAbout} from './modules/popup';
import {renderUserInfo} from './modules/userInfo';

const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort5' : 'https://praktikum.tk/cohort5'

export const myConfig = {
    serverUrl: serverUrl,
    userUrl: '/users/me',
    cards: '/cards',
    headers: {
        authorization: '38e11720-3168-48a8-aca2-92d8091234b9',
        'Content-Type': 'application/json'
    },
};

export class Api {
    constructor(config) {
        this.url = config.serverUrl;
        this.userUrl = config.userUrl;
        this.cards = config.cards;
        this.headers = config.headers;
    }

    getResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return new Promise.reject(console.log(res.status));
    }

    getUserInfo() {
        fetch(this.url + this.userUrl, {
            headers: this.headers
        })
            .then(res => this.getResponse(res))
            .then((res) => {
                renderUserInfo(res);
            })
            .catch((err) => console.log(err));
    }


    createList() {
        return fetch(this.url + this.cards, {
            headers: this.headers
        })
            .then(res => this.getResponse(res))
            .then(res => {
                list.render(res);
            })
            .catch((err) => console.log(err));
    }

    saveUser() {
        fetch(this.url + this.userUrl, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: userName.value,
                about: userAbout.value
            })
        });
    }

}

export const api = new Api(myConfig);

api.createList();
api.getUserInfo();