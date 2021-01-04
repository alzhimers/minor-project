
    function registration()
    {
    var x = document.getElementById("regform");
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const data = 
    {
        username:username,
        email:email,
        password:password,
    }
    fetch('http://localhost:5500/api/signup', 
    {
        method: 'POST',
        headers: 
        {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify(data)
    }).then(response => response.json())
      .then(data => {
    console.log(data)
  });
    }
function login()
{
    axios.post('http://localhost:5500/api/signin',data).then(data=>
    {
        console.log(data)
    }).catch(err=>
    {
        console.log(err)
    })
    console.log(regForm)
}
