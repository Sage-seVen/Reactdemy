/**
* Print the values returned from each function `cb` sequentially,
* after waiting for the time `t`. Also wait for promises, if any.
**/
const dataSet = [
    {
      cb: () => new Promise((resolve) => setTimeout(() => resolve("Hello"), 100)),
      t: 500
    },
    {
      cb: () => ({ a: 1, b: 2 }),
      t: 400
    },
    {
      cb: () => [1, 2, 3],
      t: 300
    },
    {
      cb: () => false,
      t: 200
    },
    {
      cb: () => "abc",
      t: 100
    }
  ];

  async function runner(){

    // dataSet.forEach((data)=>{
    //     setTimeout(()=>{
    //         let res = data.cb()
    //         if(typeof( res) == "object"){
    //             try{
    //                 (res as Promise<unknown>)
    //                 .then((r)=> console.log(r))
    //             } catch(e){
    //                 console.log(e)
    //             }
                
    //         }
    //         console.log(res)
    //     }, data.t)
    
    // })

    for(let data of dataSet){
         await setTimeout(()=>{
            let res = data.cb()
            if(typeof( res) == "object"){
                try{
                    (res as Promise<unknown>)
                    .then((r)=> console.log(r))
                } catch(e){
                    console.log(e)
                }
                
            }
            console.log(res)
        }, data.t)
    }
  }