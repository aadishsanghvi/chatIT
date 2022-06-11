const generateMessage = (message,position,username)=>{
        //return message, position and username in object
        return {
            message,
            position,
            username
        }
}

const generateLocationMessage = (message,username)=>{
        //return message and username in object
        return{
            message,
            username
        }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}