document.querySelector('#submit').addEventListener('click', async (e) => {
  e.preventDefault()
  const username = document.querySelector('input[name="username"]').value
  const password = document.querySelector('input[name="password"]').value

  if (!username || !password) alert('Por favor, preencha todos os campos')

  const response = await fetch('https://kf5oys9zn9.execute-api.us-east-1.amazonaws.com/api/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (response.ok) {
    const { token } = await response.json()
    
    window.localStorage.setItem('token', token)
    window.location.href = '/'
  } else {
    alert('Usuário ou senha inválidos')
  }
})
