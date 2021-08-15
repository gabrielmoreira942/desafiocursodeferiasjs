# Desafio final do curso de ferias 2021.2 <br> Unime - Lauro de Freitas (Javascript / Vue.js)

Para emissão do certificado de conclusão do curso de Férias, os alunos participantes do curso poderão enviar até o dia 23 de agosto de 2021 a resolução desse desafio, no e-mail nucleodevunime@gmail.com.

## Desafio

Baixe o arquivo index.html desse repositório e crie uma calculadora de IMC seguindo as indicações de interface presentes no arquivo e as regras presentes nesse arquivo.

1. O IMC deve ser calculado a partir da seguinte formula: imc = peso / altura²
2. o IMC deve ser exibido e calculado com apenas 2 casas decimais, exemplo: 18.89
3. IMC abaixo de 16 indica magreza grave, e deve ser alertado com o .alert-danger do Bootstrap
4. IMC entre 16 e 18.49 indica magreza leve/moderada e deve ser alertado com o .alert-warning do Bootstrap
5. IMC entre 18.5 e 24.99 indica massa corporal saldável e deve ser alertado com o .alert-success do Bootstrap
6. IMC entre 25 e 29.99 indica sobrepeso e deve ser alertado com o .alert-warning do Bootstrap
7. IMC entre 30 e 40 indica obesidade e deve ser alertado com o .alert.danger do Bootstrap

### Validações

1. O usuário não deve poder realizar o cálculo sem informar a altura e peso
2. O usuário não deve poder realizar o cálculo se informar um altura ou peso inferior a 1
3. Apenas uma mensagem de aviso deve ser apresentada por vez

### Importante

Toda lógica deverá ser desenvolvida com a linguagem Javascript. Você pode usar bibliotecas como o Vue.js, JQuery, etc... caso deseje.
