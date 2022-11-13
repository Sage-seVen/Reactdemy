Promise.all = (promises) => {
    let responses = [];
    let errors = []

    return new Promise((resolve, reject)=>{


        promises.forEach(async (singlepromise, index)=>{
            try{

                let resposne = await singlepromise
                responses.push(resposne)

                if(index == promises.length-1){
                    //last iteration, either resolve or reject

                    if( errors > 0){
                        //one of them failed 
                        reject("Rejected")
                    } else{
                        resolve("Resolved")
                    }
                }

            } catch( err){
                console.log(err)
                //reject here as well
            }
        })

    })

}

let p1 = Promise.resolve("p1 resolve")

let p2 = new Promise((resolve, reject )=>{

    //compute here, based on it resolve or reject
    setTimeout(()=>{
        reject("p2 resolve")
    }, 1000)
})


Promise.all([p1,p2])
    .then((res)=> console.log(res))
    .catch((res)=> console.log(res))
