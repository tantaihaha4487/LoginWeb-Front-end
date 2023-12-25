document.addEventListener('DOMContentLoaded', () => {
    
    displayNameElement = document.getElementById('display-name');
    const token = getCookie('jwtToken')
    const decoded = jwtDecode(token);

    displayNameElement.innerHTML = decoded.name;

});


document
    .getElementById('logout')
    .addEventListener('click', () => {
        document.cookie = 'jwtToken=; path=/;'
        window.location.href = '../index.html';
});



function jwtDecode(token) {
    try {
        const payload = token.split('.')[1];
        const decoded = JSON.parse(atob(payload));
        return decoded;
    } catch (err) {
        console.log('Error while decode token.', err)
        return null;
    }
}


function getCookie(name) {
    const cookies = document.cookie
        .split(';')
        .map((cookie) => cookie.trim().split('='))
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})

    return cookies[name];
}
