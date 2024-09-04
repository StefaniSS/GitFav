# GitFav - Rocketseat Explorer Stage 6

![SPA Universe - Explorer Nível 6](https://github.com/user-attachments/assets/af728c86-6321-4b8a-bcc7-b1a91451b76d)

## Descrição

O **GitFav** é uma aplicação web que permite aos usuários adicionar seus perfis favoritos do GitHub e visualizar informações relevantes, como repositórios públicos e seguidores. Este projeto foi desenvolvido como parte do curso Explorer da Rocketseat, especificamente no Stage 6. O objetivo principal é praticar e consolidar conhecimentos em HTML, CSS e JavaScript, utilizando conceitos de manipulação de DOM, classes e armazenamento local.

## Funcionalidades

- **Adicionar favoritos**: Permite adicionar um usuário do GitHub à lista de favoritos.
- **Visualizar informações**: Exibe o nome, login, número de repositórios públicos e seguidores de cada usuário adicionado.
- **Remover favoritos**: Possibilidade de remover usuários da lista de favoritos.
- **Armazenamento Local**: Os dados dos favoritos são armazenados no `localStorage`, permitindo que as informações persistam mesmo após o fechamento do navegador.

## Tecnologias Utilizadas

- **HTML**: Estruturação do conteúdo da página.
- **CSS**: Estilização da interface, utilizando variáveis CSS e técnicas de layout responsivo.
- **JavaScript**: Manipulação do DOM, requisições à API do GitHub e gerenciamento de eventos.

## Estrutura do Projeto

- `index.html`: Estrutura básica da aplicação e inclusão de scripts e estilos.
- `style.css`: Estilos aplicados para a interface do usuário.
- `js/main.js`: Código principal da aplicação, contendo classes para manipulação de dados e atualização da interface.
- `GithubUser.js`: Classe responsável por buscar dados dos usuários no GitHub.

## Como Executar o Projeto

1. **Clonar o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/gitfav.git
   ```

2. **Abrir o arquivo `index.html`** em um navegador web.

3. **Usar a aplicação**:
   - Digite o nome de usuário do GitHub que deseja favoritar e clique em "Favoritar".
   - Visualize as informações dos usuários adicionados na tabela.
   - Para remover um usuário, clique no botão "Remover" ao lado do usuário desejado.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

Desenvolvido com 💜 por [Stefani Silva](https://github.com/StefaniSS).
