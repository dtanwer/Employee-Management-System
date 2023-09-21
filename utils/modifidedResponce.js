const modifidedUserResponce = (user) => ({ ...user._doc, password:undefined, __v:undefined})
const modifidedUsersResponce = (users) => users.map((user) => modifidedUserResponce(user))



module.exports = {
    modifidedUserResponce,
    modifidedUsersResponce
}

