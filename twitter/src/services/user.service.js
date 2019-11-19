export const userService = {
    login,
    logout,
    registerUser
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    return fetch(`urlHereForApp`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user) {
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));

                if (user.userRole === 'ADMIN') {
                    localStorage.setItem('userToken', user.token);
                }
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
            'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify({ username, password })
    };

    return fetch(`urlHereForApp`, requestOptions)
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
