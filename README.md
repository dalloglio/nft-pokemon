# PokeDIO - Jogo NFT de Pokémon no Blockchain

### Descrição do projeto

O **PokeDIO** é um contrato inteligente baseado no padrão ERC721 (NFTs) que permite a criação e batalha de Pokémon no blockchain. Cada Pokémon é representado como um token único com atributos como nome, nível e imagem. O contrato foi desenvolvido em Solidity, utilizando a biblioteca OpenZeppelin para o padrão de tokens ERC721, e inclui funcionalidades para criar novos Pokémon e realizar batalhas entre eles.

Poderia ser utilizado o IPFS (InterPlanetary File System) para armazenar as imagens dos Pokémon no blockchain, em vez de utilizar URLs tradicionais. O IPFS é uma solução descentralizada para armazenamento de arquivos, o que o torna ideal para aplicações baseadas em blockchain como NFTs.

Este projeto permite:

- A criação de Pokémon únicos com imagens e nomes personalizados.
- A realização de batalhas entre Pokémon, onde seus níveis aumentam com base nos resultados.
- Uso de uma blockchain local com Hardhat para desenvolvimento e testes, além da interação via Metamask e Remix IDE.

---

### Ferramentas utilizadas

- **Solidity**: Linguagem de programação para contratos inteligentes.
- **OpenZeppelin**: Biblioteca de contratos inteligentes padrão para tokens ERC721.
- **Hardhat**: Ferramenta para desenvolvimento, testes e implantação de contratos na Ethereum.
- **Remix IDE**: Ambiente de desenvolvimento online para contratos Ethereum.
- **Metamask**: Extensão de carteira Ethereum para interagir com contratos.
- **Node.js**: Usado para gerenciar pacotes e ferramentas de desenvolvimento.

---

### Estrutura do projeto

```
├── contracts
│   └── PokeDIO.sol          # Contrato inteligente principal
├── test
│   └── PokeDIO.js           # Testes do contrato
├── hardhat.config.js        # Configuração do Hardhat
├── package.json             # Gerenciamento de pacotes Node.js
└── README.md                # Documentação do projeto
```

---

### Funcionalidades principais

1. **Criar Novo Pokémon:**
   Apenas o dono do contrato pode criar novos Pokémon. Cada Pokémon possui um nome, um nível inicial (1) e uma URL de imagem.

2. **Batalhas entre Pokémon:**
   Somente o dono de um Pokémon pode colocá-lo em uma batalha. O nível dos Pokémon aumenta dependendo de quem tem o nível mais alto no momento da batalha.

---

### Como executar o projeto

#### Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **NPM** (instalado junto com Node.js)
- **Metamask** (extensão de navegador)
- **Hardhat** (instalado globalmente)
- **Remix IDE** (acessível via navegador)

#### Passo 1: Clonar o repositório

Clone o projeto do GitHub:

```bash
git clone https://github.com/dalloglio/nft-pokemon.git
cd nft-pokemon
```

#### Passo 2: Instalar dependências

Instale as dependências do projeto:

```bash
npm install
```

#### Passo 3: Executar Hardhat em rede local

Inicie a rede local do Hardhat para testar o contrato:

```bash
npx hardhat node
```

#### Passo 4: Implantar o contrato usando Remix IDE

1. Acesse o [Remix IDE](https://remix.ethereum.org/).
2. Importe o repositório do GitHub.
3. Compile o contrato no Remix.
4. Conecte o Remix à rede local do Hardhat:
   - Vá para a aba "Deploy & Run Transactions".
   - Em "Environment", selecione "Injected Web3" e conecte com sua conta Metamask na rede local (http://127.0.0.1:8545).
5. Implemente o contrato clicando em "Deploy".

#### Passo 5: Interagir com o contrato

Após a implantação, você pode usar as seguintes funções do contrato diretamente no Remix:

- **createNewPokemon**: Crie um novo Pokémon fornecendo um nome, um endereço (destinatário) e uma URL da imagem.
- **battle**: Coloque dois Pokémon em batalha fornecendo os IDs de ambos.

#### Passo 6: Testes automatizados com Hardhat

Para rodar os testes unitários do contrato, use o comando:

```bash
npx hardhat test
```

---

O contrato inteligente é uma cópia de projeto abaixo, foi adicionado a documentação do projeto e testes.

https://github.com/digitalinnovationone/formacao-blockchain-dio/blob/main/Modulo%2003%20Desenvolvimento%20com%20Solidity/Curso%2003%20O%20mercado%20de%20blockchain%20e%20criptomoedas/Crie%20o%20seu%20NFT%20de%20Pokemon%20com%20Blockchain/PokeDIO.sol
