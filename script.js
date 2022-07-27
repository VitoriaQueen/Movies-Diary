const form = get.ElementById('reg-form')
form.addEventListener('submit', registerUser)

async function registerUser(event) {
    event.preventDefault()
    const username = document.getElementById('username').valeu
    const password = document.getElementById('password').valeu

   const result = await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    }).then((res) => res.json())

    console.log(result)
}