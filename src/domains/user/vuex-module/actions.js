import * as TYPES from './mutation-types'
import { requestPermission } from '../../firebase/messaging/helpers'

export default {
  setUser (store, obj) {
    store.commit(TYPES.SET_USER, obj)
  },
  getTopics (store, value) {
    store.commit(TYPES.GET_TOPICS, value)
  },
  getCards (store, value) {
    store.commit(TYPES.GET_CARDS_USER, value)
  },
  getDeck (store, value) {
    store.commit(TYPES.GET_DECK_CARDS_USER, value)
  },
  getVotes (store, value) {
    store.commit(TYPES.GET_VOTES_USER, value)
  },
  getReactions (store, value) {
    store.commit(TYPES.GET_REACTIONS_USER, value)
  },
  isLogged (store, value) {
    store.commit(TYPES.IS_LOGGED, value)
  },
  setToken (store, token) {
    store.commit(TYPES.SET_TOKEN, token)
  },
  setTokenDevice (store) {
    return requestPermission(store.state.user)
      .then(tokenDevice => {
        store.commit(TYPES.SET_TOKEN_DEVICE, tokenDevice)
        return tokenDevice // keep Promise chained
      })
  }
}
