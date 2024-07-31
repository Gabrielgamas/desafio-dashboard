# Dashboard Project

Este é um projeto de dashboard desenvolvido com React, Vite, Sass, Material-UI e Chart.js. O projeto apresenta dados demográficos e financeiros através de gráficos e tabelas, permitindo a visualização de informações de maneira intuitiva e interativa.

## Estrutura do Projeto

### Componentes Principais

1. **App.jsx**: Componente raiz que reúne os principais componentes do projeto. Ele define as rotas para o dashboard e a análise de dados.

2. **DashboardContent.jsx**: Componente principal do dashboard que contém vários gráficos:

   - **AgeChart.jsx**: Gráfico de linha mostrando a distribuição de pessoas por faixas etárias.
   - **CardContinent.jsx**: Exibe cards com a média salarial por continente.
   - **NationalityChart.jsx**: Gráfico de pizza mostrando a distribuição de pessoas por continente.
   - **SexChart.jsx**: Gráfico de barras verticais mostrando a distribuição de gênero.
   - **WageChart.jsx**: Gráfico de linha mostrando a distribuição de pessoas por faixas salariais.
   - Contém também checkboxes para filtrar dados nos gráficos e uma área para salvar perfis de configurações de filtros.

3. **AnalyticsContent.jsx**: Componente que exibe uma tabela com dados detalhados de nome, idade, salário, sexo e continente. Está acessível na rota `/analytics`.

4. **Header.jsx**: Contém o logo e o perfil do usuário com um menu dropdown acionado ao clicar no ícone de perfil (componente `MenuList.jsx`).

5. **Sidebar.jsx**: Barra lateral com botões de navegação para alterar as rotas e um botão para atualizar a página.

6. **attendees.jsx**: Script que utiliza o Faker.js para gerar dados falsos necessários para os gráficos e tabelas do projeto.

### Estilização

Os estilos são geridos utilizando Sass:

- **Pasta `styles/components`**: Contém arquivos de estilo específicos para cada componente, como `agecharts.sass`, `analyticscontent.sass`, etc.
- **main.sass**: Inclui configurações de reset de CSS e estilos globais.
- **variables.sass**: Define variáveis de estilo para manter a consistência visual.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface do usuário.
- **Vite**: Ferramenta de build rápida para desenvolvimento frontend.
- **Sass**: Pré-processador CSS utilizado para escrever estilos de forma mais eficiente.
- **Chart.js**: Biblioteca para criação de gráficos dinâmicos.
- **Faker.js**: Biblioteca para geração de dados falsos para testes.

## Como Executar

1. Clone o repositório:

   ```bash
   git clone <URL do repositório>
   cd dashboard-project

   ```

2. Instale as dependências:

   ```bash
   npm install

   ```

3. Instale as dependências:

   ```bash
   npm run dev

   ```

4. Acesse o projeto no navegador através do endereço http://localhost:3000.

## Contribuição

Sinta-se à vontade para contribuir para este projeto. Faça um fork, crie uma branch com suas alterações e envie um pull request.

## Licença

Este projeto é licenciado sob a MIT License.
