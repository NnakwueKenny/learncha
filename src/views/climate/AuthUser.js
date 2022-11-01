const AuthUser = () => {
    console.log('Is logged in')
    const fromLocal = JSON.parse(localStorage.getItem('accessToken'));

    console.log(fromLocal);

    fetch('https://learncha.mybluemix.net/me',
        {
            headers: {
                accept: 'applocatio/json',
                Authorization: `Bearer ${fromLocal}`
            }
        }
    )
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

    if ( fromLocal != null) {
        return true
    } else {
        return false;
    }
}

export default AuthUser;