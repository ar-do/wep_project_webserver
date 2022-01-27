import * as Helper from './helper.js';

const session = Helper.getCookie("session");

if(session == "") {
    location.href="/login";
}

let nav_username = document.getElementById("nav-username");
const un = Helper.getUsernameFromCookie();
let txtnode_nav = document.createTextNode(un);

nav_username.appendChild(txtnode_nav);

if(window.location.href.includes('/logout') !== false)
{
    document.cookie = "session=;expires=" + new Date(0).toUTCString();
    window.location = "/login";
} 