const axios = require('axios');

const goRepo = async (req, resp) => {
    try {
    const { data } = await axios.get('https://api.github.com/users/takenet/repos',{params:{"sort": "created","direction": "asc" }})
    const formatDate = data.filter(repo => repo.language == 'C#') 
      let arr = []
      formatDate.map(evento => {
        arr.push(
          {
            "full_name": evento.full_name,
            "avatar_url": evento.owner.avatar_url,
            "description": evento.description
          }
        )
      })
    return arr;
  } catch (error) {
    console.log(error)
    return error
  }
}

module.exports = goRepo;
