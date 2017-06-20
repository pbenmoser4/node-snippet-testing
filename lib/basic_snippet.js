'use strict';

//
// CloudMine, Inc.
// 2015
//

module.exports = function(req, reply) {
  reply({'success': req.payload.request.headers})
};
