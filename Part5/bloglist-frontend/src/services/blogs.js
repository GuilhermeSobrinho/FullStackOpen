import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null
let config

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl, config)
  return response.data
}

const create = async newObject => {
  console.log(newObject)
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = async objectToUpdate => {
  const response = await axios.put(`${baseUrl}/${objectToUpdate.id}`, objectToUpdate, config)
  return response.data
}

const remove = async id => {
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}


// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update, setToken, remove }