module.exports = function(obj, keys) {
  var i, key, len;
  for (i = 0, len = keys.length; i < len; i++) {
    key = keys[i];
    delete obj[key];
  }
};

//# sourceMappingURL=../../map/src/deleteKeys.map
