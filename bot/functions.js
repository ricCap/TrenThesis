/*
* Main module that contains the base function, made to clean the bot logic
* implementation in routers.js
*/

/*
* Required module for the Telegram bot
*/
var request = require('request');

exports.getJsonFromUrl = function(url, cb, chatId) {
    request({
        url: url,
        json: true
    }, function(err, res, json) {
      console.log("Called getJsonFromUrl on url "+ url);
        if (err) {
          console.log("Error "+err);
            throw err;
        } else {
            //must check json
            var jsonobj = JSON.parse(JSON.stringify(json));
            if (jsonobj.hasOwnProperty('error'))
                throw "Wrong url";
            else
                cb(json, chatId, jsonobj);
        }
    });
};
