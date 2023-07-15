import api from '../../../auth/api'
const getTransactions = async (params) => {
  // used api helper function that makes the actual call with axios
  try {
    const res = await api.fetch('v1/transaction', params)
    return res.data
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

const makeTransaction = async (data) => {
  // used api helper function that makes the actual call with axios
  try {
    const res = await api.post('v1/transaction/process-transaction', data)
    return res.data
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

const transactionService = {
  getTransactions,
  makeTransaction,
}

export default transactionService
