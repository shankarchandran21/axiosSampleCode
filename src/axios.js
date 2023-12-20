import axios from 'axios'

const Api = axios.create({
        baseURL:'http://localhost:3031'
})


Api.interceptors.request.use((res)=>{
        console.log(res)

        return res
},(err)=>{
        console.log("ERROR IN")
        console.log(err)
        return Promise.reject(err)
})


Api.interceptors.response.use((res)=>{

    console.log(res)
    return res
},(err)=>{
    console.log('response Error')
    console.log(err)

})

export default Api