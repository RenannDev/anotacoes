# Anotações - Aplicação Full Stack

Bem-vindo ao repositório do **Anotações**, uma aplicação Full Stack desenvolvida para gerenciar notas de forma eficiente e intuitiva. Este projeto foi criado com foco em boas práticas de desenvolvimento, organização e escalabilidade.

## 🚀 Tecnologias Utilizadas

### Backend:
- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework para criação de APIs REST.
- **MongoDB**: Banco de dados NoSQL para armazenamento das notas.
- **Mongoose**: ODM para modelagem de dados no MongoDB.

### Frontend:
- **React.js**: Biblioteca para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida e moderna.
- **TailwindCSS**: Framework CSS para estilização.
- **DaisyUI**: Componentes UI baseados em TailwindCSS.

## 📂 Estrutura do Projeto

### Backend:
```
backend/
├── src/
│   ├── config/       # Configurações (ex.: banco de dados, rate limiter)
│   ├── controllers/  # Lógica dos endpoints
│   ├── middleware/   # Middlewares (ex.: rate limiter)
│   ├── models/       # Modelos do banco de dados
│   └── routes/       # Definição de rotas
├── app.js            # Ponto de entrada do servidor
└── package.json      # Dependências e scripts
```

### Frontend:
```
frontend/
├── src/
│   ├── components/   # Componentes reutilizáveis
│   ├── pages/        # Páginas principais
│   ├── lib/          # Funções auxiliares (ex.: axios)
│   ├── App.jsx       # Componente principal
│   ├── index.css     # Estilos globais
│   └── main.jsx      # Ponto de entrada do React
├── tailwind.config.cjs # Configuração do TailwindCSS
├── vite.config.js    # Configuração do Vite
└── package.json      # Dependências e scripts
```

## 🛠️ Funcionalidades
- **CRUD de Notas**: Criação, leitura, atualização e exclusão de notas.
- **Rate Limiter**: Controle de requisições para evitar abusos.
- **Interface Responsiva**: Design moderno e adaptável a diferentes dispositivos.

## 🏃‍♂️ Como Executar

### Pré-requisitos:
- Node.js (v22.17.0 ou superior)
- MongoDB

### Passos:
1. Clone o repositório:
   ```bash
   git clone https://github.com/RenannDev/anotacoes.git
   ```

2. Instale as dependências:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na pasta `backend` com as seguintes variáveis:
     ```env
     MONGO_URI=mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/notes_db
     UPSTASH_REDIS_REST_URL=<sua_url_upstash>
     UPSTASH_REDIS_REST_TOKEN=<seu_token_upstash>
     ```

4. Inicie o servidor backend:
   ```bash
   cd backend
   npm start
   ```

5. Inicie o servidor frontend:
   ```bash
   cd ../frontend
   npm run dev
   ```

6. Acesse a aplicação no navegador:
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend: [http://localhost:3000](http://localhost:5001)

## 🤝 Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

## 📝 Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

Feito com ❤️ por [RenannDev](https://github.com/RenannDev).
