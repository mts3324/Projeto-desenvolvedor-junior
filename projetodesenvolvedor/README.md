Gerenciador de Tarefas
Uma aplicação web desenvolvida para ajudar você a organizar suas tarefas diárias de forma simples e eficiente. Desenvolvida com React e Styled Components, oferece uma experiência limpa e agradável para gerenciar suas atividades.

Funcionalidades:

Criar novas tarefas com título e descrição

Visualizar todas as tarefas em uma lista organizada

Marcar tarefas como concluídas ou pendentes

Excluir tarefas quando não forem mais necessárias

Destaque visual para tarefas concluídas

Organização e Busca:

Filtra tarefas por status: todas, pendentes ou concluídas

Busca tarefas específicas por título ou descrição

Contador em tempo real mostrando total de tarefas, pendentes e concluídas

Interface que se adapta a diferentes tamanhos de tela

Experiência do Usuário:

Dados salvos automaticamente no seu navegador

Validações para evitar erros

Confirmações antes de ações importantes

Design limpo e fácil de usar

Tecnologias Utilizadas:

React 18.2.0

Styled Components 6.1.19

JavaScript (ES6+)

LocalStorage API

HTML5 e CSS3

Pré-requisitos:

Para executar este projeto localmente, você precisará ter:

Node.js versão 14 ou superior

npm ou yarn

Um navegador 

Como Executar:

1. Baixe o projeto:

bash

git clone https://github.com/mts3324/Projeto-desenvolvedor-junior.git

cd projetodesenvolvedor

2. Instale as dependências:

bash
npm install

3. Execute a aplicação:

bash
npm start

4. Acesse no navegador:

Abra http://localhost:3000 para começar a usar.

Comandos Disponíveis:

npm start - Inicia o servidor de desenvolvimento

npm run build - Prepara o projeto para produção

npm test - Executa os testes

npm run eject - Remove a configuração padrão (ação permanente)

Estrutura do Projeto

src/
├── controllers/          # Coordena as operações da aplicação
│   └── TaskController.js
├── models/              # Define a estrutura dos dados
│   ├── TaskListModel.js
│   └── TaskModel.js
├── services/            # Lógica de negócio e armazenamento
│   ├── StorageService.js
│   └── TaskService.js
├── styles/              # Estilos globais e configurações de tema
│   ├── GlobalStyles.js
│   └── theme.js
├── utils/               # Funções auxiliares
│   └── dateUtils.js
├── views/               # Componentes de interface
│   ├── FilterBar.js
│   ├── TaskForm.js
│   ├── TaskItem.js
│   ├── TaskList.js
│   └── index.js
├── App.js               # Componente principal
└── index.js             # Ponto de entrada da aplicação

Como Usar?

Adicionando uma Tarefa
Preencha o campo "Título" (é obrigatório)
Adicione uma descrição se desejar (opcional)
Clique em "Adicionar Tarefa"

Gerenciando Tarefas Existentes:
Clique em "Marcar como Concluída" para alterar o status
Use "Marcar como Pendente" para voltar ao estado anterior
Clique em "Excluir" para remover uma tarefa (com confirmação)

Encontrando Tarefas:
Use o menu de filtro para ver apenas pendentes ou concluídas
Digite no campo de busca para encontrar tarefas específicas

Sobre a Arquitetura:
O projeto foi organizado seguindo boas práticas de desenvolvimento:
Organização do Código
Separação clara entre interface, lógica e dados
Componentes reutilizáveis e de fácil manutenção
Estilização centralizada e consistente

Persistência de Dados:
Todas as tarefas são salvas automaticamente no seu navegador
Os dados permanecem disponíveis mesmo após fechar a página
Formato seguro e eficiente para armazenamento

Design e Experiência:
Interface limpa e intuitiva
Cores agradáveis e consistentes
Funciona bem em dispositivos móveis e desktop
Feedback visual para todas as ações