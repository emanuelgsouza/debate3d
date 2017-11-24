import http from '../http.js'
import setToken from '../set-token'
import setUser from '../../domains/user/services/set-user'

/**
 * Login function
 * @param  {Object} payload paylod for login
 * @param  {Objet} store   Store instance
 * @param  {Object} router  Router instance
 * @return {Promise}
 */
export default (payload, store, router) => http.post('/auth/login', payload)
  .then(response => setToken(response.data.token))
  .then(token => {
    return setUser(store)
      .then(result => {
        const isVerified = result.is_verified
        if (!isVerified) {
          router.push('/auth/finish')
          return
        }
        router.push('/dashboard')
        return Promise.resolve(result)
      })
  })