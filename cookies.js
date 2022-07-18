

//  Cookies are data stored in small text flies on your computer


// create cookies in js 
document.cookie = "username=rogers";


// you can add expairy date (utc) by default when your browser closed 
document.cookie = 'username=rogers; expires=Thu, 22 July 2022 12:00:00 UTC';


// and add path prameter . you can tell the browser what path the cookies belong, and by default cookies belong current page "/"

// document.cookie = "username=rogers; expires=Thu, 23 July 2022 12:00:00 UTC; path=/about" 



// read a cookies with js 

const x = document.cookie;


// delete a cookies 
// Deleting a cookie is very simple.
// You don't have to specify a cookie value when you delete a cookie.
// Just set the expires parameter to a past date:

// document.cookie = "username=; expires=Mon, 11 June 2020 12:00:00 UTC; path=/"