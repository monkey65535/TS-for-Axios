import axios from '../../src/index'

// index({
//   url: '/extend/post',
//   method: 'post',
//   data: {
//     msg: 'hi'
//   }
// })
//
// index.request({
//   url: '/extend/post',
//   method: 'post',
//   data: {
//     msg: 'hello'
//   }
// })
//
// index.get('/extend/get')
//
// index.options('/extend/options')
//
// index.delete('/extend/delete')
//
// index.head('/extend/head')
//
// index.post('/extend/post', { msg: 'post' })
//
// index.put('/extend/put', { msg: 'put' })
//
// index.patch('/extend/patch', { msg: 'patch' })

// index({
//   url: '/extend/post',
//   method: 'post',
//   data: {
//     msg: 'hi'
//   }
// })
//
// index('/extend/post', {
//   method: 'post',
//   data: {
//     msg: 'hello'
//   }
// })

interface ResponseData<T = any> {
  code: number
  result: T
  message: string
}

interface User {
  name: string
  age: number
}

function getUser<T>() {
  return axios<ResponseData<T>>('/extend/user')
    .then(res => res.data)
    .catch(err => console.error(err))
}


async function test() {
  const user = await getUser<User>()
  if (user) {
    console.log(user.result.name)
  }
}

test()
