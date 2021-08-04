import axios from '@/libs/request'

const getCode = sid => {
  return axios.get('/public/getCaptcha', {
    params: {
      sid
    }
  })
}

export {
  getCode
}
