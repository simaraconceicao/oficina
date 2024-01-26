const conteudosPorRede = [
  {
    rede: 'facebook',
    conteudos: ['foto', 'video', 'texto', 'link']
  },
  {
    rede: 'instagram',
    conteudos: ['foto', 'video', 'texto']
  },
  {
    rede: 'linkedin',
    conteudos: ['foto', 'video', 'texto','link']
  },
  {
    rede: 'tiktok',
    conteudos: ['foto', 'video']
  },
  {
    rede: 'twitter',
    conteudos: ['foto', 'video', 'texto','link']
  }
]

qualpostar('tiktok')

function qualpostar(rede) {
  const lista = conteudosPorRede.find(item => item.rede === rede)
  const resultado = lista.conteudos.map(item => item)
  console.log(`Para ${rede} use esses tipos de conteúdo: ${resultado}`)
}