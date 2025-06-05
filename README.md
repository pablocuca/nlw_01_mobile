# NLW Mobile

Aplicativo React Native (Expo) para localizar pontos de coleta de resíduos.

## Requisitos

- Node.js
- Expo CLI (`npm install -g expo-cli`)

## Configuração

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Defina a URL da API em `app.json`:
   ```json
   {
     "expo": {
       ...,
       "extra": {
         "API_URL": "http://<seu-servidor>:8080"
       }
     }
   }
   ```

## Executando

Para iniciar o projeto execute:

```bash
npm start
```

Em seguida escolha abrir no emulador ou dispositivo com o aplicativo Expo.
