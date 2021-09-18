## Memo

O memo faz um *shallow compare* dentro do React, ou seja, uma comparação rasa, onde ele basicamente verifica a igualdade das Informações dentro das propriedades. Quando estamos lidando com objetos, é necessário mandar um segundo parâmetro para o memo para fazer um compare mais aprofundado das props. 

O memo pode ser utilizado em alguns casos:

1. Para Pure Function components, ou seja, componentes que apenas abstraem partes visuais da aplicação.
2. Componentes que tem muitas renderizações 
3. Quando o componente renderiza novamente com as mesmas props
4. Quando o componente está do tamanho medio para grande

## UseMemo

O useMemo é utilizado para evitar que algo que ocupe muito processamento seja refeito toda vez que o componente renderizar.

Pode ser utilizado o memo também para igualdade referencial (Validação de espaços na memória) quando se repassa uma informação para um componente filho

## UseCallback

useCallback serve para memorizar uma função, e pode ser utilizada para evitar rerender de componentes pais e filhos que repassam essas funções

## Dynamic import (Code Splitting)

Carregamento de componentes apenas quando realmente são necessários, para aplicações em Next.js é possível utilizar o dynamic para isso, em apps CRA é necessário utilizar o lazy que vem de dentro do react 

## Virtualização

[https://bvaughn.github.io/react-virtualized/#/components/List](https://bvaughn.github.io/react-virtualized/#/components/List)

## Bundle Analyzer

https://www.npmjs.com/package/webpack-bundle-analyzer
