import request123 from './network.js'

export function getMultiData(){
  return request123({
    url: '/home/multidata',
  })
}