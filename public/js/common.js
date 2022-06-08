$('#sub-btn').click(()=>{
   let name = $('#exampleInputEmail1').val()
   $.post('./api/user',{name},(k)=>{
       console.log(k)
   })
})