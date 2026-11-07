# EC02 - Funcionários - Atividade independente

Esta pasta resolve **somente** o estudo de caso **EC02 - Funcionários**. Os quatro exercícios foram separados em subpastas independentes, cada uma com `index.html` e `app.js` completos; nenhum depende dos arquivos de outro exercício.

## Organização

- **Exercício 1:** Formulário, classe Funcionario, getters, setters, toString() e listagem. (pasta `exercicio_01/`)
- **Exercício 2:** Edição e exclusão com onclick e métodos set da classe Funcionario. (pasta `exercicio_02/`)
- **Exercício 3:** Refatoração com arrow functions para buscar, remover e atualizar dados. (pasta `exercicio_03/`)
- **Exercício 4:** filter, map, reduce e new Set para relatórios dinâmicos. (pasta `exercicio_04/`)

## Como abrir sem Docker

Abra `index.html` na raiz para acessar o menu ou abra diretamente o `index.html` de qualquer `exercicio_0X`. Não precisa de bibliotecas ou internet.

## Docker (requisito do enunciado)

Na raiz desta atividade, execute:

```bash
docker compose up --build -d
```

Depois, abra `http://localhost:8082` no navegador, escolha o exercício desejado ou acesse `http://localhost:8082/exercicio_01/`. A pasta é montada no contêiner para permitir editar os arquivos durante o desenvolvimento. Para desligar: `docker compose down`.

## GitHub (requisito do enunciado)

Repositório: https://github.com/KolowEX/EC02-Funcionarios

Para publicar, execute `PUBLICAR_NO_GITHUB.bat` na pasta acima desta, com o Git instalado e autenticado no GitHub.

## Notas

- Os dados existem somente em memória e serão perdidos ao atualizar a página, conforme o estudo de caso.
- Cada exercício é progressivo, mas independente: inclui as partes anteriores necessárias ao seu funcionamento.
- Não foi usado CSS para preservar a proposta de trabalhar HTML e JavaScript.
