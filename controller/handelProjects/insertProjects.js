const pool=require("../../dataAccessLayer/DatabaseConnection");



const insertProjects=(data)=>{
    return new Promise((resolve,reject)=>{
        if(data.name.length<5){
            reject({
                success:false,
                message:"the title must be greater then 5 character"
            })
        }
        if(data.detail.length<10){
            reject({
                success:false,
                message:"the description must be greater then 10 character"
            })
        }
        if(data.link.length<10){
            reject({
                success:false,
                message:"the link must be greater then 10 character"
            })
        }
        if(data.image.length<10){
            reject({
                success:false,
                message:"the image must be greater then 10 character"
            })
        }
        pool.getConnection((err,con)=>{
            if(err){
                reject({
                    success:false,
                    message:"there is Some error please try again"
                })
            }
            const query="insert into projects(name,image,link,detail) values(?,?,?,?)";
            con.query(query,[data.name,data.image,data.link,data.detail],(err,res)=>{
                con.release();
                if(err){
                    reject({
                        success:false,
                        message:"there is some Error please try again"
                    })
                }
                resolve({
                    success:true,
                    message:"project inserted successfully"
                })
            })
        }
        )
    }
    )
}

module.exports=insertProjects
