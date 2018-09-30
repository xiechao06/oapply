module.exports = async function oapply (obj, ...funcs) {
  for (let func of funcs) {
    await Promise.resolve(func(obj))
  }
  return obj
}
