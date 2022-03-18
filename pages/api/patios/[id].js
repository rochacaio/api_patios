// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let patios = require('../../../arquivos/patios.json')
let data = patios;

export default function handler(req, res) {
    const { id } = req.query;
    if(req.method === 'POST') {
        if (id === 'create') {
            data.push({id:""+data.length+"",name:req.body.name,capacidade: req.body.capacidade})
            res.status(200).json({status: 'true', message: 'patio cadastrado com sucesso!',dados:data})
        }else if(id === 'update') {
            const indice = data.findIndex(item=>{
                return item.id == parseInt(req.body.id)
            })
            if(indice === -1){
                return res.status(404).json({status:'false',message:'O patio informado nao existe'})
            }else{
               const atualizado = data.map(item=>{
                    if(item.id == parseInt(req.body.id)){
                        item.name = req.body.name
                        item.capacidade = req.body.capacidade
                    }
                })

                if(atualizado){
                    res.status(200).json({status: 'true', message: 'patio atualizado com sucesso!',dados:[{id:req.body.id,name:req.body.name,capacidade: req.body.capacidade}]})
                }else{
                    return res.status(304).json({status:'false',message:'nao foi possivel atualizar o patio'})
                }
            }
        }else{
            return res.status(405).json({status:'false',message:'metodo não catalogado'})
        }
    }else if(req.method === 'DELETE'){
        if(id == 'delete'){
            const indice = data.findIndex(item=>{
                return item.id == parseInt(req.body.id)
            })
            if(indice === -1){
                return res.status(404).json({status:'false',message:'O patio informado nao existe'})
            }else{
                const exclusao = data.splice(indice,1)
                if(exclusao){
                    res.status(200).json({status: 'true', message: 'patio excluido com sucesso!',dados: data})
                }else{
                    return res.status(304).json({status:'false',message:'nao foi possivel excluir o patio'})

                }
            }
        }else{
            return res.status(405).json({status:'false',message:'metodo não catalogado'})
        }
    }else if(req.method === 'GET'){
        if(id == 'listar'){
            res.status(200).json({status: 'true',dados:data})
        }else if(id == 'selecionar'){
            const indice = data.findIndex(item=>{
                return item.id == parseInt(req.body.id)
            })
            if(indice === -1){
                return res.status(404).json({status:'false',message:'O patio informado nao existe'})
            }else{
                res.status(200).json({status: 'true', message: 'patio encontrado com sucesso!',dados: data[indice]})

            }
        }else{
            return res.status(405).json({status:'false',message:'metodo não catalogado'})
        }
    }else{
    return res.status(405).json({status:'false',message:'metodo não catalogado'})
    }
}
