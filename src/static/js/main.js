(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var _sockets=require("./sockets"),body=document.querySelector("body"),loginForm=document.getElementById("jsLogin"),NICKNAME="nickname",LOGGED_OUT="loggedOut",LOGGED_IN="loggedIn",nickname=localStorage.getItem(NICKNAME),logIn=function(e){var n=io("/");n.emit(window.events.setNickname,{nickname:e}),(0,_sockets.initSockets)(n)};null===nickname?body.className=LOGGED_OUT:(body.className=LOGGED_IN,logIn(nickname));var handleFormSubmit=function(e){e.preventDefault();var n=loginForm.querySelector("input"),o=n.value;n.value="",localStorage.setItem(NICKNAME,o),body.className=LOGGED_IN,logIn(o)};loginForm&&loginForm.addEventListener("submit",handleFormSubmit);

},{"./sockets":4}],2:[function(require,module,exports){
"use strict";require("./login");

},{"./login":1}],3:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleDisconnected=exports.handleNewUser=void 0;var notifications=document.getElementById("jsNotifications"),fireNotification=function(e,n){var t=document.createElement("div");t.innerText=e,t.style.backgroundColor=n,t.className="notification",notifications.appendChild(t)},handleNewUser=function(e){var n=e.nickname;fireNotification("".concat(n," just joined!"),"rgb(0, 122, 255)")};exports.handleNewUser=handleNewUser;var handleDisconnected=function(e){var n=e.nickname;return fireNotification("".concat(n," just left!"),"rgb(255, 149, 0)")};exports.handleDisconnected=handleDisconnected;

},{}],4:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initSockets=exports.updateSocket=exports.getSocket=void 0;var _notifications=require("./notifications"),socket=null,getSocket=function(){return socket};exports.getSocket=getSocket;var updateSocket=function(e){return socket=e};exports.updateSocket=updateSocket;var initSockets=function(e){var t=window.events;updateSocket(e),e.on(t.newUser,_notifications.handleNewUser),e.on(t.disconnected,_notifications.handleDisconnected)};exports.initSockets=initSockets;

},{"./notifications":3}]},{},[2]);
