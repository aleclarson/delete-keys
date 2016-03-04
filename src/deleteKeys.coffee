
module.exports = (obj, keys) ->
  delete obj[key] for key in keys
  return
