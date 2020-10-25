/* global Module */

/* node_helper.js
 * 
 * Magic Mirror
 * Module: MMM-ImageSlideshow
 * 
 * Magic Mirror By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 * 
 * Module MMM-ImageSlideshow By Adam Moses http://adammoses.com
 * MIT Licensed.
 *
 * Module MMM-RemoteImageSlideshow By Bengt Giger
 * MIT Licensed.
 */

// call in the required classes
var NodeHelper = require("node_helper");

// the main module helper create
module.exports = NodeHelper.create({
  // subclass start method, clears the initial config array
  start: function() {
    this.moduleConfigs = [];
  },
  // gathers the image list
  gatherImageList: function(config) {
    console.log("MMM-RemoteImageSlideshow -------- startup");
    var self = this;
    // create an empty main image list
    var imageList = [];
    // for each of the paths specified
    for (var pathIndex = 0; pathIndex < config.imagePaths.length; pathIndex++) {
      // add current URL to list
      imageList.push(config.imagePaths[pathIndex]);
      console.log("added image "+config.imagePaths[pathIndex]);
    }
    // return final list
    return imageList;
  },
  // subclass socketNotificationReceived, received notification from module
  socketNotificationReceived: function(notification, payload) {
    if (notification === "REMOTEIMAGESLIDESHOW_REGISTER_CONFIG") {
      // add the current config to an array of all configs used by the helper
      this.moduleConfigs.push(payload);
      // this to self
      var self = this;
      // get the image list
      var imageList = this.gatherImageList(payload);
      // build the return payload
      var returnPayload = { identifier: payload.identifier, imageList: imageList };
      // send the image list back
      self.sendSocketNotification('REMOTEIMAGESLIDESHOW_FILELIST', returnPayload );
    }
  },     
});

//------------ end -------------
