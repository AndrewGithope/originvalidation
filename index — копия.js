



const PasswordUser = (password) => {
    if(password.length < 6 || password.charAt(0) !== password.charAt(0).toUpperCase()   ) {
        throw new Error('Your password is not correct')
    }else{
       console.log(password)
    }

}



PasswordUser('Avlozovoy2015')




