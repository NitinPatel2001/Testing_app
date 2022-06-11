$('#show').click(()=>{
    $('#content').empty()
    $.get('./api/user',(user)=>{
        console.log(user)
        for(let i of user){
            $('#content').append(`
                <li class="list-group-item">${i.name}</li>
            `)
        }
    })
})