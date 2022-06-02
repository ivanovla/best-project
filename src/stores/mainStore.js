import {observable, action, makeAutoObservable} from 'mobx';

class MainStore {
    user = {};

    constructor() {
        makeAutoObservable(this)
    }

    setUser(user) {
        this.user = user;
    }

    async getUser() {
       const result = await fetch();
       this.setUser(result);
    }
}

export default new MainStore();
