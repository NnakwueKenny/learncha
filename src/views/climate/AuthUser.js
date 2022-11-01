const AuthUser = () => {
    console.log('Is logged in')
    const fromLocal = JSON.parse(localStorage.getItem('accessToken'));

    console.log(fromLocal);
    let requestStatus = '';
    fetch('https://learncha.mybluemix.net/me',
        {
            headers: {
                accept: 'applocatio/json',
                Authorization: `Bearer ${fromLocal}`
            }
        }
    )
    .then(response => {
        requestStatus = response.status;
        console.log(response.status)
        return response.json();
    })
    .then(data => {
        console.log(data);
        if (requestStatus === 200) {
            return true
        } else {
            return false;
        }
    })
    .catch(err => console.log(err))
}

export default AuthUser;