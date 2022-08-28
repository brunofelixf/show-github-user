document.getElementById('btn-search').addEventListener('click', () => {
  const userName = document.getElementById('input-search').value
  getUser(userName)
})

async function user(userName){
  const response = await fetch(`https://api.github.com/users/${userName}`)
  return await response.json()
}

function getUser(userName){
  user(userName).then(userData =>{
    let userInfo = `<img src="${userData.avatar_url}" />
                    <div class="data">
                      <h1>${userData.name}</h1>
                      <p>${userData.bio}</p>`
    document.querySelector('.profile-data').innerHTML = userInfo
  })
}