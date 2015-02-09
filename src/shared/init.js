
__webpack_public_path__ = '/js/build/';

var $ = require('jquery'),
    Promise = require('bluebird');

Promise.longStackTraces();

$.ajaxSetup({ cache: false });

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


if (typeof window !== 'undefined') {
    window.$ = $;
    window.rr = window.rr || {};
    window.rr.debug = require('debug');
}