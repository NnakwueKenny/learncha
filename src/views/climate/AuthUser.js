const AuthUser = () => {
    console.log('Is logged in')
    const fromLocal = JSON.parse(localStorage.getItem('accessToken'));

    console.log(fromLocal);

    if ( fromLocal != null) {
        console.log('returning: ', fromLocal);
        return true
    } else {
        console.log('returning: ', fromLocal);
        return false;
    }
}

export default AuthUser;