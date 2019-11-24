export const userService = {
    login,
    logout,
    registerUser
};

function login(username, password) {
    console.log('in login');
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    console.log('built my request options');

    return fetch(`https://polar-everglades-29406.herokuapp.com/auth/authenticate`, requestOptions)
    //return fetch(`http://localhost:8080/auth/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user) {
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}

function registerUser(username, password) {
    console.log('in registerUser');
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    };

    return fetch(`https://polar-everglades-29406.herokuapp.com/auth/register`, requestOptions)
    //return fetch(`http://localhost:8080/auth/register`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user) {
                user.authdata = window.btoa(username + ':' + password);
            }

            return user;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;

            return Promise.reject(error);
        }

        console.log('data: ' + data);
        return data;
    });
}
