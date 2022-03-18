// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const data = [
    {
      name: 'John Doe',
      idade: '42'
    },
    {
      name: 'Caio',
      idade: '23'
    },
  ];
  if(req.method === 'GET'){
    console.log(req.body)
   return res.status(200).json(data)
  }
}
