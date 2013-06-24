/**
 * Created with JetBrains WebStorm.
 * User: shenli
 * Date: 13-6-19
 * seajs config
 **/
 seajs.config({
    plugins: ['shim'],
    alias: {
        "$":{
            src: 'gallery/jquery.js',
            exports: 'jQuery'
        },
        "dialog":"arale/dialog/1.1.1/dialog",
        "tip":"arale/tip/1.1.3/tip",
        "carousel":"arale/switchable/0.9.14/carousel",
        "base":"arale/base/1.1.0/base",
        "handlebars":"gallery/handlebars/1.0.2/handlebars",
        "validator":"arale/validator/0.9.3/validator"
    }
});
