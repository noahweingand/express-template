'use strict';

require('dotenv').config();

/**
 * Example function comment - describe what method is doing
 * 
 * @param {request} req Request object
 * @param {arr} arr Array of JSON data to be processed
 * @returns {array} 
 */

async function getServerHealth() {
    return "Server is up and running";
}

var controllers = {
    getHealth: async function(req, res) {
        try {
            console.log("successful health call");
            res.send({
                status: 200,
                message: await getServerHealth()
            });
        }
        catch (error) {
            console.log("error on health call");
            res.send(error);
        }
    }
};

module.exports = controllers;