import {api} from './../index';
import {name} from './popup';
import {job} from './popup';
import {avatar} from './popup';




export function renderUserInfo(res) {
        name.textContent = res.name;
        job.textContent = res.about;
        avatar.setAttribute('style','background-image: url(' + res.avatar + ')');
}
