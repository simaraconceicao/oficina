const convidadasPreferencias = [
  {
    nome: 'Simara',
    dieta: 'vegetariana',
  },
  {
    nome: 'Marea',
    dieta: 'vegana',
  },
  {
    nome: 'Lucas',
    dieta: 'churrasco',
  },
  {
    nome: 'Cida',
    dieta: 'macarrão',
  },
];

function cardapio(convidada) {
  const escolha = convidadasPreferencias.find(item => convidada == item.nome);
  console.log(
    `Para a convidada ${convidada} a escolha do cardápio será ${escolha.dieta}`
  );
  return escolha.dieta;
}

cardapio('Marea');

