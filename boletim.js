const boletins = [
  {
    aluna: 'Simara',
    media1: 8,
    media2: 7,
    media3: 9,
    media4: 10,
  },
  {
    aluna: 'Julia',
    media1: 5,
    media2: 7,
    media3: 9,
    media4: 5,
  },
  {
    aluna: 'Lucas',
    media1: 7,
    media2: 7,
    media3: 9,
    media4: 4,
  }
]

resultado('Simara')

function resultado(aluna) {
  const resultadoAluna = boletins.find(item => aluna == item.aluna);
  const media = (resultadoAluna.media1 + resultadoAluna.media2 + resultadoAluna.media3 + resultadoAluna.media4) / 4;

  if (media >= 7) {
    console.log(` O resultado de ${resultadoAluna.aluna} é ${media}, aprovada!`);
  } else {
    console.log(` O resultado de ${resultadoAluna} é ${media}, reprovada!`);
  }
}