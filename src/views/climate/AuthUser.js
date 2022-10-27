const AuthUser = () => {
    console.log('Is logged in')
    const fromLocal = JSON.parse(localStorage.getItem('accessToken'));

    console.log(fromLocal);

    if ( fromLocal != null) {
        return true
    } else {
        return false;
    }
}

export default AuthUser;