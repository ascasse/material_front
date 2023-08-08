const url = process.env.REACT_APP_API_URL
const port = process.env.REACT_APP_API_PORT

const api_url = `${url}:${port}`

console.log(api_url)

const API = {
    image: `${api_url}/Material/`,
    // recent: `${api_url}/recent`,
    recent: `${api_url}/api/batch`,
    updateBatch: `${api_url}/updatebatch`,

    batchImages: '/batch-images',
    batchTitles: '/batch-titles'
}

export default API