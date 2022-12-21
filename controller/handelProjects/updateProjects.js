const pool=require("../../dataAccessLayer/DatabaseConnection");


const updateprojects=(data)=>{


    return new Promise((resolve,reject)=>{

        if(data.name.length<5){
            reject({
                success:false,
                message:"the project name must be greater then 5 character"
            })
        }

        pool.getConnection((err,con)=>{
            if(err){
                reject({
                    success:false,
                    message:"there is Some error please try again"

                })
            }
            const query="update projects set name=?,image=?,link=?,detail=? where id=?";
            con.query(query,[data.name,data.image,data.link,data.detail,data.id],(err,res)=>{
                con.release();
                if(err){
                    reject({
                        success:false,
                        message:"there is some Error please try again"
                    })
                }
                resolve({
                    success:true,
                    message:"project updated successfully"
                })
            })
        }
        )
    }
    )
}

module.exports=updateprojects
