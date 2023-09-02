export function authenticateUser(username, password) {
  if(username === 'admin' && password === 'password') {
    return {
      username: 'admin',
      role: 'admin'
    };
  } else if (username === 'user' && password === 'password') {
    return {
      username: 'user',
      role: 'user'
    };
  } else {
    return null;
  }
}
