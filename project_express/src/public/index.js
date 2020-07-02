import '@babel/polyfill'
import appMain from './js/main'
import './css/normalize.css'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/css/bootstrap-reboot.css'

const app = new Vue(appMain);
