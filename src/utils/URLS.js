export const BASE_URL = 'https://expatjournal-backend.herokuapp.com/'

export const REGISTER_PATH = 'https://expatjournal-backend.herokuapp.com/api/auth/register'
//Can do a POST request to this url to create a new user

export const LOGIN_PATH = 'https://expatjournal-backend.herokuapp.com/api/auth/login'
//Can do a POST request here to login and retrieve JWT for local storage

export const USERS_PATH = 'https://expatjournal-backend.herokuapp.com/api/users'
//Can add /:id to the end to grab specific items with a get request. 
//You'll also need to have an id to delete or put anything (so the server knows exactly what it is you're planning to update or delete)

export const POSTS_PATH = 'https://expatjournal-backend.herokuapp.com/api/posts'
//Same deal as the one above, should be able to perform all basic steps from this. Please include an id in the URL where appropriate.


//I've included some post and user seed data, so if you need to do some get requests you'll at least pull in something to display from it. 
//Once you start populating more data with post requests there will be plenty more to pull from.