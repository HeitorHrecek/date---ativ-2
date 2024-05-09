# date---atividade-2
# Funções do Código JavaScript

## 1. `dataMaior(data1, data2)`

Esta função recebe duas datas (`data1` e `data2`) como parâmetros e retorna a data maior entre elas.

- `data1`: A primeira data a ser comparada.
- `data2`: A segunda data a ser comparada.
- Retorna: A data maior entre `data1` e `data2`.

## 2. `calcularIntervalo(dataAntiga, dataNova)`

Esta função calcula o intervalo em dias entre duas datas (`dataAntiga` e `dataNova`).

- `dataAntiga`: A data inicial do intervalo.
- `dataNova`: A data final do intervalo.
- Retorna: O número de dias entre `dataAntiga` e `dataNova`.

## 3. `dataAtualFormatada()`

Esta função retorna a data atual formatada como uma string no formato "hora:minuto - dia/mês/ano".

- Retorna: A data atual formatada.

## 4. `exibirResultado(idDiv, resultado)`

Esta função recebe um ID de uma div (`idDiv`) e um resultado (`resultado`) e exibe o resultado na div correspondente.

- `idDiv`: O ID da div onde o resultado será exibido.
- `resultado`: O resultado a ser exibido na div.

## 5. Exemplo de Utilização

```javascript
const data1 = new Date('2023-01-01');
const data2 = new Date('2023-02-01');
exibirResultado("resultado1", "Data maior: " + dataMaior(data1, data2));

const dataAntiga = new Date('2023-01-01');
const dataNova = new Date('2023-02-01');
exibirResultado("resultado2", "Intervalo: " + calcularIntervalo(dataAntiga, dataNova) + " dias");

exibirResultado("resultado3", "Data atual formatada: " + dataAtualFormatada());
```

Neste trecho de código, são realizadas chamadas das funções `exibirResultado`, `dataMaior`, `calcularIntervalo` e `dataAtualFormatada`, demonstrando como utilizá-las para obter os resultados desejados e exibi-los na página HTML correspondente.