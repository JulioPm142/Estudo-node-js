const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://-----:----@cluster0.xzwh9.mongodb.net/').then(()=>console.log('database connected successfully')).catch(e=>console.log(e))

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
    isActive : Boolean,
    tags : [String],
    createdAt : {type : Date, default: Date.now}
})

const User = mongoose.model('User', userSchema)

async function runQueryExamples(){
    try{

        const NewUser = await User.create({
            name : 'UpdatedUser',
            email : 'UpdatedUser@gmail',
            age : 50,
            isActive : true,
            tags : ['Dev'],
             
        })

        // console.log(`created a new user ${NewUser}`)

        // const allUsers = await User.find({});
        // console.log(allUsers)

        // const getUnactiveUsers = await User.find({ isActive:true })
        // console.log(getUnactiveUsers);


        // const getSingleUser = await User.findOne({name : 'SingleUser'})
        // console.log(getSingleUser)]

        // const LastCreatedUser = await User.findById(NewUser._id)
        // console.log(LastCreatedUser)

        // const selectedFields = await User.find().select('name email -_id')
        // console.log(selectedFields)

        // const LimitedUsers= await User.find().limit(5).skip(1)
        // console.log(LimitedUsers)

        // const SortedUsers = await User.find().sort({ age: 1 })
        // console.log(SortedUsers) 

        // const CountDocument = await User.countDocuments({isActive:false})
        // console.log(CountDocument)

        const UpdatedUser = await User.findByIdAndUpdate(NewUser._id, {
            $set : {age: 100}, $push : {tags: 'updated'}
        }, {new: true})
        console.log(UpdatedUser)

        // const DeleteUser = await User.findByIdAndDelete(NewUser._id)
        // console.log('deleted user  ', DeleteUser)






    }catch(e){
        console.log(e)
    }finally{
        await mongoose.connection.close()
    }
}

runQueryExamples()