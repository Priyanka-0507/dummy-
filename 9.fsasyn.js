const {readFile,writeFile}=require('fs')
console.log('start')
readFile('./contents/second.txt','utf8',(err,result)=>{
          if(err){
            console.log(err)
            return;
          }
          const secnd=result
          readFile('./contents/subcontents/first.txt','utf8',(err,result)=>{
            if(err){
                console.log(err)
                return;
              }
              const first=result
              writeFile('./contents/result-asynch.txt',`This is asynchronous`,(err,result)=>{
                if(err){
                    console.log(err)
                    return;
                  }
                  console.log('done with this task')
              })
          })

}

)
console.log('starting next task')