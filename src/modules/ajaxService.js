const ajaxService = (address,city)=>{
    const url = "http://api.postit.lt/v2/?city=";
    const key = "lygCQRlmXi4k4JcC2fjC";
    return fetch(`${url}${city}&address=${address}&key=${key}`)
    .then(response=>response.json())
}

export default ajaxService