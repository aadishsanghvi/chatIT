users = []

const addUser = (id,username,room)=>{
    username = username.trim().toLowerCase()
    

    //check for existing user
    let existingUser = users.find((user)=>{
        return user.room === room && user.username === username
    })
    //validate the username
    if(existingUser)
    {
        return{
            error:"Username in use"
        }
    }

    user = {
        id,
        username,
        room
    }
    users.push(user)
    return {user:user}
}

const getUser = (id) =>{
    const user = users.find((user)=>{
        return id===user.id
    })
    return user
}

const getUsersInRoom = (room)=>{
    const usersInRoom = users.filter((user)=>{
        return user.room === room
    })
    return usersInRoom
}

const removeUser = (id)=>{
    const index = users.findIndex((user)=>{
        return user.id === id
    })
    if(index!==-1)
    {
        const removedUser = users[index]
        users.splice(index,1)
        return removedUser
    }
}

const getRooms = ()=>{
    const rooms = new Set()
    users.forEach((user)=>{
        rooms.add(user.room)
    })
    return rooms
}

module.exports={
    addUser,
    getUser,
    removeUser,
    getUsersInRoom,
    getRooms
}


// addUser(1,"jayesh","room")
// addUser(2,"kumar","room")
// addUser(3,"jayesh","room2")
// const rooms = getRooms()
// rooms.forEach((room)=>{
//     console.log(room)
// })