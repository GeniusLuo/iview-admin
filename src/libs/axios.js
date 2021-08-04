// import axios from 'axios'
// import store from '@/store'
// import publicConfig from '@/config'
// import errorHandle from "./errorHandle"
// const CancelToken = axios.CancelToken

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
}
export default HttpRequest
