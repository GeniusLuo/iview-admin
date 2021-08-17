import axios from '@/libs/request'
import { getToken } from '@/libs/util'

export const getUserInfo = () => {
  return axios.get('/public/info', {
    headers: {
      Authorization: 'Beaerer ' + getToken()
    }
  })
}
