# 🎯 Jogo do Número Secreto

Este é um jogo interativo desenvolvido em HTML, CSS e JavaScript onde o objetivo é adivinhar o número secreto gerado aleatoriamente pelo sistema.

## ✨ Funcionalidades
- 🔢 Geração de um número secreto aleatório entre 1 e 50.
- 💡 Mensagens indicando se o número secreto é maior ou menor que o chute.
- 🎉 Exibição de mensagem de sucesso ao acertar o número.
- 🔄 Botão \"Novo jogo\" para reiniciar a partida.
- 🔊 Feedback por áudio utilizando a biblioteca `responsiveVoice.js`.

## 🛠 Tecnologias Utilizadas
- **HTML**: Para estruturar os elementos da página.
- **CSS**: Para estilizar os elementos e melhorar a experiência visual.
- **JavaScript**: Para adicionar a lógica do jogo e interatividade.
- **ResponsiveVoice**: Biblioteca para síntese de voz.

## 🚀 Como Funciona
1. **Início do Jogo**:
   - O jogo exibe uma mensagem inicial solicitando que o jogador escolha um número entre 1 e 50.

2. **Chutes**:
   - O jogador insere um número no campo de entrada e clica no botão \"Chutar\".
   - O sistema compara o chute com o número secreto:
     - ✅ Se o chute estiver correto, uma mensagem de sucesso é exibida.
     - ❌ Caso contrário, o sistema informa se o número secreto é maior ou menor que o chute.

3. **Gerenciamento do Número Secreto**:
   - O sistema garante que o número secreto seja único e não repetido em uma série de jogos.
   - Uma lista é usada para rastrear os números já sorteados.

4. **Reinício do Jogo**:
   - Após acertar, o jogador pode clicar no botão \"Novo jogo\" para iniciar uma nova partida com um número secreto diferente.

## 📝 Como Executar o Projeto
1. Faça o download ou clone o repositório.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Insira seus chutes no campo e tente adivinhar o número secreto! 🎲

## 📂 Estrutura do Projeto
- `index.html`: Arquivo principal contendo a estrutura do jogo.
- `style.css`: Estilos aplicados aos elementos HTML.
- `app.js`: Arquivo JavaScript com a lógica do jogo.

## 🌟 Recursos Futuramente Implementáveis
- Opções de dificuldade para ajustar o intervalo de números.
- Interface responsiva para dispositivos móveis.
- Ranking com o histórico de tentativas e acertos dos jogadores.
- Tradução para outros idiomas.

## 📄 Licença
Este projeto é de uso livre para estudo e aprendizado.

🎮 **Divirta-se jogando o Jogo do Número Secreto!**
