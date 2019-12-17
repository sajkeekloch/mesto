const myConfig = {
    url: 'http://95.216.175.5/cohort5',
    userUrl: '/users/me',
    cards: '/cards',
    headers: {
        authorization: '38e11720-3168-48a8-aca2-92d8091234b9',
        'Content-Type': 'application/json'
    },
};

class Api {
    constructor(config) {
        this.url = config.url;
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

const api = new Api(myConfig);
/**
 * Здравствуйте.
 *
 * Не нашёл у вас класс API ((
 *
 * Функции которые работатют с сетью, обрабатывают запросы в результатах, а надо передавать результат
 * в классы которые отвечают за реализацию функционала.
 *
 * Это http://95.216.175.5/cohort5/ надо вынести отдельно
 * '38e11720-3168-48a8-aca2-92d8091234b9' - тоже отдельно
 *
 * Я смог добавить и удалить карточку без интернета, не логично.
 *
 * Жду ваших исправлений
 *
 */

//  здравствуйте)

//  не понял Вашего комментария про удаление и добавление карточки
//  я сейчас пытаюсь сдать первые 3 задания, в них нет ничего про удаление и добавление)
//  функционал удаления на уровне дз8 остался, потому и удаляется оффлайн)
// я обязательно сделаю дополнительные задания, но мне важно не вылететь и, в первую очередь, сдать минимум)



//или я просто неверно понял задание _-

/**
 * Доп задания если не уверены, просто не делайте, но укажите в комментарии что не сделали.
 * Доп задания не обязательно делать, эта ваше право..
 *
 */