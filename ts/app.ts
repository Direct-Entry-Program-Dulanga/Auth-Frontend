  
export function getUsername(){
    const token = localStorage.getItem('token');

    if (!token) throw new Error('Failed to fetch the username');
    
    return JSON.parse(token as string).username;
}

export function getFullName(){
    const token = localStorage.getItem('token');

    if (!token) throw new Error('Failed to fetch the full name');

    return JSON.parse(token as string).fullName;
}

export function signOut(){
    localStorage.removeItem('token');
    window.location.replace('http://localhost:1234/sign-in.html');
}