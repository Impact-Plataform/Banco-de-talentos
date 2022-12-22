import Database from "../Infra/database";

class DAO {
    static async activePragma(){
        const query = "PRAGMA fore_keys = ON";

        Database.run(query, (e)=>{
            if(e){
                console.log(e)
            }else{
                console.log("Nenhum problema encontrado ao colocar o banco de dados online")
            }
        })
    }

    static createTable(query){
        this.activePragma()
        return new Promise((resolve, reject)=>{
            Database.run(query, (e)=> {
                if(e){
                    reject(e.message)
                }else{
                    resolve("Entidade criada com sucesso")
                }
            })
        })
    }

    static insert(entity, query){
        const body = Object.values(entity)
        return new Promise((resolve, reject) =>{
            Database.run(query, [...body], (e)=>{
                if(e){
                    reject(e.message)
                }else{
                    resolve({error: false, message: `${body[0]} cadastrado com sucesso`})
                }
            })
        })
    }

    static listAll(query){
        return new Promise((resolve, reject) =>{
            Database.all(query, (e, result)=>{
                if(e){
                    reject(e)
                }else{
                    resolve(result)
                }
            })
        })
    }

    static listById(id, query){
        return new Promise((resolve, reject)=>{
            Database.get(query, id, (e,result)=>{
                if(e){
                    reject(e.message)
                }else{
                    resolve(result)
                }
            })
        })
    }

    static deleteById(id, query){
        return new Promise((resolve, reject)=>{
            Database.run(query, id, (e)=>{
                if(e){
                    reject(e.message)
                }else{
                    resolve({
                        message: `Resgistro de identificação ${id} deletado com sucesso`,
                        erro: "Nenhum erro foi encontrado"
                    })
                }
            })
        })
    }

    static updateById(entity, id, query){
        const body = Object.values(entity);
        return new Promise((resolve, reject) => {
            Database.run(query, [...body, id], (e) => {
                if(e){
                    reject(e.message)
                }else{
                    resolve({message: `registro de identificação ${id} atualizado com sucesso`})
                }
            })
        })
    }

}

export default DAO