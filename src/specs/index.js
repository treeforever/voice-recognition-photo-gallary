const S = require('specky')

S('ssi.photo.url', S.isStr)

S('ssi.photo', S.props({
  required: {
    title: S.isStr,
    author: S.isStr,
    img: S('ssi.photo.url')
  }
}))

S('ssi.grid', S.collOf(S('ssi.photo')))

//
// console.log(S('ssi.grid').conform([
//   { title: 'hello', author: 'h', img: 'http://www.abc.com' }
// ]))
