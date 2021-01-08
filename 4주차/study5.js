function fetchData(){
    //console.log("START FETCH");
    fetch("https://reqres.in/api/users")
    .then(res=>{
        if(!res.ok){
            throw Erorr("ERROR");
        }
        return res.json()
    })
    .then(data=>{
        console.log(data.data)
        const html = data.data.map(user=>{
            return `
            <div class="user">
                <p><img src="${user.avatar}" alt="${user.first_name}" /></p>
                <p>Name :${user.first_name}</p>
                <p>Email:${user.email}</p>
            </div>
            `
        })
        .join("");
        document.querySelector('#app').insertAdjacentHTML("afterbegin",html)
    })
    .catch(error=>{
        console.log(error)
    })
}
fetchData();