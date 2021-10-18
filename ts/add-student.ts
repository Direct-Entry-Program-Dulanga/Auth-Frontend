import './auth-guard';
import {signOut, getFullName, getUsername} from './app';
import $ from 'jquery';

$("#btn-logout").on('click', ()=> signOut());

$("#username").text(getUsername());