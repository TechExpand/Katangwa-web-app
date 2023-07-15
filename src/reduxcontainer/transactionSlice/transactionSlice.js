import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import giftcardService from '../services/giftcardService/giftcardService'
import transactionService from '../services/transactionService/transactionService'

export const getTransactions = createAsyncThunk('transactions', async (params, thunkAPI) => {
  try {
    const data = await transactionService.getTransactions(params)
    return data
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const processTransaction = createAsyncThunk('transactions', async (body, thunkAPI) => {
  try {
    const data = await transactionService.makeTransaction(body)
    return data
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const getGiftcards = createAsyncThunk('giftcards', async (params, thunkAPI) => {
  try {
    const data = await giftcardService.getGiftcards(params)
    return data
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const processGiftcards = createAsyncThunk('giftcards', async (body, thunkAPI) => {
  try {
    const data = await giftcardService.postGiftcards(body)
    return data
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const editGiftcards = createAsyncThunk('giftcards', async (body, thunkAPI) => {
  try {
    const data = await giftcardService.putGiftcards(body)
    return data
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const addGiftcardRate = createAsyncThunk('giftcards', async (body, thunkAPI) => {
  try {
    const data = await giftcardService.postGiftcardRate(body)
    return data
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const editGiftcardRate = createAsyncThunk('giftcards', async (body, thunkAPI) => {
  try {
    const data = await giftcardService.putGiftcardRate(body)
    return data
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const deleteGiftcard = createAsyncThunk('giftcards', async (id, thunkAPI) => {
  try {
    const data = await giftcardService.deleteGiftcards(id)
    return data
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const deleteRate = createAsyncThunk('giftcards', async (id, thunkAPI) => {
  try {
    const data = await giftcardService.deleteGiftcardRate(id)
    return data
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const getCrytpo = createAsyncThunk('crypto', async (params, thunkAPI) => {
  try {
    const data = await giftcardService.getCrytpo()
    return data
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const processCrypto = createAsyncThunk('crypto', async (body, thunkAPI) => {
  try {
    const data = await giftcardService.postCrypto(body)
    return data
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const editCrypto = createAsyncThunk('giftcards', async (body, thunkAPI) => {
  try {
    const data = await giftcardService.putCrypto(body)
    return data
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})


const initialState = {}

const transactionSlice = createSlice({
  name: 'transactionSlice',
  initialState,
  reducers: {},
})

const { transactionReducer } = transactionSlice.reducer
export default transactionReducer
