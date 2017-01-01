const C = require('clausejs')


C('say/photo', C.isStr);

C('say/grid', C.collOf(C('say/photo')))

//
// console.log(S('say/grid').conform([
//   { title: 'hello', author: 'h', img: 'http://www.abc.com' }
// ]))
