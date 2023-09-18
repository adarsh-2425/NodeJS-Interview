// Users array data structure
const users = [];

// Simulate an asynchronous function to add a user
function addUser(username, email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isUniqueUsername = users.find(user => user.username === username);
      if(isUniqueUsername) {
        reject('That username isnt available')
      } else {
        users.push({ username, email });
        resolve('User is created')
      }
    }, 1000); // Simulate a 1 second delay
  })
}

// Simulate an asynchronous function to get all users
function getAllUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users)
    }, 1000);
  })
}

// Simulate an asynchronous function to get an user using username
function getUser(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    const user = users.find(user => user.username === username);

    if (!user) {
      reject('Check the username. User is not available')
    } else {
      resolve(user)
    }
  }, 1000);
  })
}

// Simulate an asynchronous function to update user
function updateUser(name, username, email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    const user = users.find(user => user.username === name);

    if (!user) {
      reject('User is not available. Verify the username again')
    } else {
      user.username = username;
      user.email = email;
      resolve('User updated')
    }
    }, 1000)
  })
}

// Simulate an asynchronous function to delete user
function deleteUser(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    const user = users.find(user => user.username === username);

    if (!user) {
      reject('User not found!')
    } else {
      users = users.filter(user => user.name !== username);
      resolve('User Deleted')
    }
  }, 1000)
  })
}

module.exports = {
  users,
  addUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser
}
