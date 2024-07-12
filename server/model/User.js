const monggose=require('mongoose');


const UserSchema = new Schema({
    name:{
      string:'type',
      required:true
    },
    email:{
        string:'type',
        required:true,
        unique:true
    },
    password:{
        string:'type',
        required:true
    }
});

module.exports=mongoose.model('User',UserSchema);