require('dotenv').config()

const auth={
    type:'OAuth2',
    user:'ibristy009@gmail.com',
    pass:'vfafxwfvurvbthqw',
    clientId:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET,
    refreshToken:process.env.REFRESH_TOKEN
    
}

const mailoptions = {
    from:'Bristy <ibristy009@gmail.com>',
    to:'ibristy009@gmail.com',
    subject:'Gmail API NodeJS',
}
module.exports={
    auth,
    mailoptions
}