const mongoose = require('mongoose');

const {Schema} = mongoose;

const {compareSync, hashSync, genSaltSync} = require('bcryptjs');


const UserSchema = new Schema({
    name:{type: String, required:true},
    username:{type: String, required:true},
    password:{type: String, required:true},
    
});

// compare passwords
UserSchema.methods.comparePasswords = function(password){
    return compareSync(password,this.password);
}


// It is always called when is reading a document - delete password for user View
UserSchema.methods.toJSON = function(){
    let user = this.toObject();
    delete user.password;
    return user;
}


// Before saving an user is necessary to validate and stored the password hashed
UserSchema.pre('save',async function(next){

    const user = this;
    if(!user.isModified('password')){
        return neext();
    }
    const salt = genSaltSync(10);
    const hash = hashSync(user.password,salt);
    user.password = hash;
    next();
})

module.exports = mongoose.model('user',UserSchema);