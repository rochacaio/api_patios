// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  let data = [
    {
      name: 'John Doe',
      idade: '42'
    },
    {
      name: 'Caio',
      idade: '23'
    },
  ];
  if(req.body === ""){
    return res.status(400).json({status: 'false',message: 'digite um valor valido!'})
  }
  data.push(req.body)
  if(req.method === 'GET'){
    console.log(req.body)
   return res.status(200).json(data)
  }else{
    return res.status(405).end('método não permitido!')
  }
}
