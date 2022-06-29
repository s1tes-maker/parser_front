import Ajax from './ajax';
import {URL} from '../config/my-config';


const Request = {
  Parser: {
    parse(param) {
      return Ajax.post(URL + '/parse', param);
    }
  },
  User: {
    info() {
      return Ajax.get('/account/info');
    }
  },
  Dict: {
    get() {
      return Ajax.get(`/dict`);
    }
  },
  Home: {
    getMessageList() {
      return Ajax.get(`/home/messages`);
    }
  },
  Account: {
    menus() {
      return Ajax.get(URL + '/main-menu');
    },
    full_menus() {
      return Ajax.get(URL + '/main-full-menu');
    }
  },
  Login: {
    login(param) {
      return Ajax.postJson(URL + '/login', param);
    },
    logout(param) {
      return Ajax.post('/logout', param);
    }
  },
  Management: {
    users(params) {
      return Ajax.get('/management/users', params);
    },
    roles(params) {
      return Ajax.get('/management/roles', params);
    }
  }
};

export default Request;
