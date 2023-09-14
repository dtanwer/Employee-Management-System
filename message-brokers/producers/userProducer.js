const {v4 : uuidv4} = require('uuid');
class UserProducer {
    constructor(producer){
        this.producer=producer;
    }
    async produceUserRequest(routingKey,userRequestResponse){
        try{
            const message={
                id:uuidv4(),
                fired_at: new Date().toISOString(),
                userRequest: userRequestResponse,
                eventType:"User Request Created"
            }
            const isMessagePublished =await this.producer.publish(routingKey,message);
            return isMessagePublished;
        }catch(err){
            console.log("Unable to Publish User Request",err);
            throw err;
        }
    }
}

module.exports=UserProducer;