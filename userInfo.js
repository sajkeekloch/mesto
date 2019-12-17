function renderUserInfo(res) {
        name.textContent = res.name;
        job.textContent = res.about;
        avatar.setAttribute('style','background-image: url(' + res.avatar + ')');
}

api.getUserInfo();