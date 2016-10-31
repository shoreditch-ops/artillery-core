'use strict';
const debug = require('debug');

function packagedPlugin(config, ee) {
  ee.on('done', function(stats){
    ee.emit('packaged_plugin_loaded', stats);
  });
  return this;
}

module.exports = packagedPlugin;
