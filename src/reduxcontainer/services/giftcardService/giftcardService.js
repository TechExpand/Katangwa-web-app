import api from '../../../auth/api'
const getGiftcards = async () => {
  // used api helper function that makes the actual call with axios
  try {
    const res = await api.fetch('v1/giftcard')
    return res.data
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

const postGiftcards = async (data) => {
  // used api helper function that makes the actual call with axios
  try {
    const res = await api.post('v1/giftcard', data)
    return res.data
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

const putGiftcards = async (data) => {
  console.log('reached')
  // used api helper function that makes the actual call with axios
  try {
    const res = await api.put('v1/giftcard', data)
    return res.data
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

const postGiftcardRate = async (data) => {
  console.log('reached')
  // used api helper function that makes the actual call with axios
  try {
    const res = await api.post('v1/giftcard/rate', data)
    return res.data
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

const putGiftcardRate = async (data) => {
  console.log('reached')
  // used api helper function that makes the actual call with axios
  try {
    const res = await api.put('v1/giftcard/rate', data)
    return res.data
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

const deleteGiftcards = async (id) => {
  // used api helper function that makes the actual call with axios
  try {
    const res = await api.delete(`v1/giftcard/${id}`)
    return res.data
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

const deleteGiftcardRate = async (id) => {
  console.log('reached')
  // used api helper function that makes the actual call with axios
  try {
    const res = await api.delete(`v1/giftcard/rate/${id}`)
    return res.data
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

const getCrytpo = async () => {
  // used api helper function that makes the actual call with axios
  try {
    const res = await api.fetch('v1/cryptocurrency')
    return res.data
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

const postCrypto = async (data) => {
  // used api helper function that makes the actual call with axios
  try {
    const res = await api.post('v1/cryptocurrency', data)
    return res.data
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

const putCrypto = async (data) => {
  console.log('reached')
  // used api helper function that makes the actual call with axios
  try {
    const res = await api.put('v1/cryptocurrency', data)
    return res.data
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

const deleteCrypto = async (id) => {
  // used api helper function that makes the actual call with axios
  try {
    const res = await api.delete(`v1/cryptocurrency/${id}`)
    return res.data
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

const giftcardService = {
  getGiftcards,
  postGiftcards,
  putGiftcards,
  postGiftcardRate,
  putGiftcardRate,
  getCrytpo,
  putCrypto,
  deleteCrypto,
  postCrypto,
  deleteGiftcardRate,
  deleteGiftcards,
}

export default giftcardService
