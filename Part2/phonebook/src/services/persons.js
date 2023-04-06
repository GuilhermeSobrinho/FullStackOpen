
import axios from 'axios'
const url = 'http://localhost:3001/persons'

const get = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = (newObject) => {
    const request = axios.post(url, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const newUrl = url+"/"+id
    const request = axios.put(newUrl, newObject)
    return request.then(response => response.data)
}

const remove = (id) => {
    const newUrl = url+"/"+id
    const request = axios.delete(newUrl)
    return request.then(response => response.data)
}


// eslint-disable-next-line import/no-anonymous-default-export
export default { get, create, update, remove }