const _ = require( 'lodash' )

let data = []
let id = 0

const add = ( name, content ) => {
    data.push( { name: name, content: content, id: id } )
    id++
}
  
const list = () => {
return _.cloneDeep( data ) 
}
  
const find = ( properties ) => {
    return _.cloneDeep( _.filter ( data, properties ) )
}
  
module.exports = { add: add, list: list, find: find }
  
const randArrayEl = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  const getFakeName = () => {
    const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
    const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
    return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
  }
  
  const getFakeTweet = () => {
    const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
    return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
  };
  
  for (let i = 0; i < 20; i++) {
    module.exports.add( getFakeName(), getFakeTweet() );
  }
