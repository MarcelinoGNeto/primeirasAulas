/* 
let idade = 5;
console.log(idade);
let altura = 180;
console.log(altura);
nome de variável: 
1- nunca começar com número (1neto)
2- nunca começar com Letra maiúscula (Netogomes, netoGomes)
variáveis do tipo "let" podem mudar o valor
variáveis do tipo "const" não mudam o valor

let valorIngressoAdulto = 20;
valorIngressoAdulto = 30;
console.log(valorIngressoAdulto);
*/

// tipo primitivos variáveis 
/* 
let nome = 'Neto'; // string literal
let idade = 25; // number literal
let estaAprovado = true; //boolean (regras verdadeiro ou falso)
let sobrenome; //underfined (sem definição)
// let corSelecionado = null; // compo vazio para redefinição (objeto)
*/

//objetos
/* let pesssoa = {
    nome: 'Neto',
    idade: 25,
    estaAprovado: true,
    sobrenome: 'Gomes'
};

console.log(pesssoa);
*/

//arrays
/* 
let familia = [true,45,'neto',17];
console.log(familia.length);
console.log(familia[0]);

let dadosDaEsposa = [21,'64 kg',false,'PALMEIRENSE']
console.log(dadosDaEsposa);
console.log(dadosDaEsposa[3]);
*/
//FUNCTIONS - FUNÇÕES
/* para nomear funções, cria-se através de um Verbo + Substantivo */
/* 
let corSite = "azul"; //variável "corSite", do tipo string recebe (=) o valor ("Azul")

function resetaCor(cor,tonalidade){ // verbo(reseta) + substativo(cor)
    corSite = cor + ' ' + tonalidade; // variável (cor) (+ concatena) (' ' espaço)  
}; 

console.log(corSite);
resetaCor("verde", " claro");
console.log(corSite);
*/
/* 
//TIPOS DE FUNÇÕES
// 1- Realiza tarefa 
function dizerNome(){
    console.log('Neto');
}
dizerNome();
//2- função que não devolve nada
function multiplicarPorDois(valor){
    return valor* 2;
}
//console.log(multiplicarPorDois(5)); //outra forma abaixo
let resultado = multiplicarPorDois(5);

console.log(resultado);
*/
/*
1- OPERADORES aritiméticos (matemáticos)
2- OPERADORES atribuição
3- OPERADORES Comparação
4- OPERADORES Lógicos
5- OPERADORES Bitwise
*/
//1- OPERADORES ARITIMÉTICOS (MATEMÁTICOS)------------
// sinais matemáticos +, -, /, *, **. 
/*  
let salario = 100;
console.log(salario+salario);
console.log(salario-salario);
console.log(salario*salario);
console.log(salario/salario);
console.log(5**5);
*/
// sinais ++ -- (soma +1 ou -1)
/*
let idade = 18;
 
//console.log(idade++); //realiza a operação nessa linha
//console.log(idade); //apresenta nesta outra

console.log(idade--); //tbm pode ser na frente (--idade)
console.log(idade);
*/

//2- OPERADORES DE ATRIBUIÇÃO
/* 
let valorTelcado = 100; // a variável valorTeclado (= "recebe o valor") 100; ou tbm
valorTelcado += valorTelcado; //(a variável soma ao receber "o resultado 200")
// valorTelcado -= valorTelcado; //pode ser usado outros operadores
//forma mais prática usada para substituir  abaixo
// valorTeclado = valorTeclado + valorTeclado;
console.log(valorTelcado);
*/

//3- OPERADORES DE COMPARAÇÃO (de igualdade)
/*
//Igualdade estrita
//console.log (1===1); //number esta sendo comparado com outro number (verdadeiro/true)
//console.log ( '1' === 1 ); //string esta sendo comparada com um number (falso/false)

//Igualdade solta
console.log ( 1 == 1 ); //desta forma number esta sendo comparado a outro number (true)
console.log ( '1' == 1); // ao comparar nesta forma, o number apresenta true, pois leva em consideração o valor da string ('1') (não aconselhável usar esta forma devido a possíveis erros)
*/
/* 
//4- OPERADORES Lógicos (TERNÁRIOS) se, então
// Ex.: Tem um cliente, onde: 100 é premium, 0-99 comum 
let pontos = 100;
let tipo = pontos >= 100? 'premium' : 'comum';
console.log(tipo); 
//Como o valor da variável pontos é igual a 100, console apresenta: prêmio, qualquer valor abaixo de 100 seria apresentado: normal
*/

//4- OPERADORES Lógicos 
/* 4.1- "e (&&)"" Retorna TRUE se os dois operandos forem TRUE */
/* 
console.log(true && true); //true
console.log(false && true); //false
console.log(false && false); //false
*/
/* 
 let maiorIdade = true;
 let possuiCarteiraDeTrabalho = true;
 let podeAplicar = maiorIdade && possuiCarteiraDeTrabalho;

 console.log(podeAplicar); // neste caso o console apresenta TRUE 
//Neste caso, a operação esta declarando que se a maior idade e possuir carteira de trabalho, o console apresenta= true, caso contrário, false
*/
/* 4.2 "ou (||)"" Retorna TRUE se um dos valores for TRUE */
/* 
let maiorIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorIdade || possuiCarteiraDeTrabalho;

console.log('pode aplicar: ',podeAplicar); // neste caso o console apresenta TRUE

/* 4.3 "NOT (!) */
/*
let candidatoRecusado = !podeAplicar;
console.log('Candidato Recusado',candidatoRecusado);
*/

//COMPARAÇÕES NÃO BOOLEANAS
/*
 ----   Falsy ----- todos os valores abaixo
underfined
null
0
false
''
NaN - not a number

*/
 //------ Truthy -------
 /*
true
1 (qualquer number a partir de 1)
'String'
*/
/* 
//resultado do exemplo: Truthy
let corPersonalizada = 'vermelho'; //(valor truthy= string)
let corPadrao = 'azul'; //(valor truthy= string)
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);
*/

//resultado do exemplo: Falsy
/* 
let corPersonalizada = ''; //sem nada nas aspas (valor falsy)
let corPadrao = 'azul'; //(valor truthy= string)
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);
*/

//EXERCÍCIO DE TROCAR VALORES DE VARIÁVEIS
/* 
let a = 'vermelho'; //Variável "a" recebe valor "vermelho"; 
let b = 'azul'; //Variável "b" recebe valor "azul";
let c = a; //Variável "c" recebe valor da variável "a", "c" torna-se então "vermelho";
a = b; //Variável "a" (vermelha) recebe agora o valor da variável "b", tornando-se "azul"; e
b = c; //Variável "b" (até então azul) recebe o valor de "c", tornando-se "vermelha". 

console.log(a); //o consolhe apresenta o valor atual de "a" = azul
console.log(b); //o consolhe apresenta o valor atual de "b" = vermelho
*/

// IF  e ELSE 
/* Exemplo
Se a hora estive entre 06:00h até 12:00, bom dia!
se estiver entre 12:00 até 18:00, boa tarde!
Caso contrário, boa noite!
*/
/* 
let hora = 12;

if (hora > 6 && hora < 12){
    console.log("bom dia!");
}
else if (hora >= 12 && hora < 18) {
    console.log("boa tarde!");
} 
else {
    console.log("boa noite!");
}
*/

//SWITCH CASE
/* 
let permissao; // comum,gerente,diretor
permissao = 'diretor';

switch (permissao) {
    case 'comum':
    console.log('Usuário Comum!');
    break;

    case 'gerente':
    console.log('Usuário Gerente!');
    break;

    case 'diretor':
    console.log('Usuário Diretor!');
    break;
    
    default:
    console.log('Usuário não reconhecido!');
}
*/

//LAÇO FOR / LOOP FOR
/*
1. For
2. While
3. Do..while
4. For..In
5. For..of
*/
/* 
for(let i = 1; i <= 5; i++){
    console.log('Estou aprendendo!',i);
}
*/
//números ímpares
/* 
for(let i = 1; i <= 5; i++){
    if(i % 2 !== 0){ //modulus (pesquisar)
    console.log('Estou aprendendo!',i);
    }
}
*/
 /* 
//Listar do maior para o menor
for(let i = 5; i >= 1; i--){
    if(i % 2 !== 0){ 
    console.log(i);
    }
}
*/
 /*
//2. WHILE LOOP (LAÇO WHILE)
let i = 5;

while (i >= 1){
    if(i % 2 !== 0){ 
        console.log(i);
    }
    i--;
}
*/


//DO..WHILE
/* 
let i = 0;
do{
    console.log('Digitando!',i);
    i++;
} while (i <= 10)
*/
/* 
//FOR..IN

const pessoa = {
    nome: 'Neto',
    idade: 33
};

for(let chave in pessoa){ //pesquisar conceito de chave em VS Code ou JS
    console.log(chave,pessoa['nome']);
}

const cores = ['vermelho','azul','verde'];

for (let indice in cores){ //interagir com valores e índices 0,1,2...a,b,c...I,II,III..etc)
    console.log(indice,cores[indice])
}

//FOR..OF

for(let cor of cores){ //interagir apenas com valores
    console.log(cor);
}
*/

//EXERCÍCIO - Escrever uma função que usa 2 números e retorna o maior entre eles
/*  
let valorMaior = max(3,7);
console.log(valorMaior);

function max(numero1,numero2){
//jeito 1 
if(numero1 > numero2)
return numero1;
else return numero2;

//jeito 2
return numero1 > numero2 ? numero1: numero2 ;
}
*/

//FIZZBUZZ (exercício)
/*
números com um ou dois divisores
Divisível por 3 e 5 => FizzBuzz
Divisível por 3 => Fizz
Divisivel por 5 => Buzz
Não é divisível por 3 ou 5 => recebe número da entrada
Não é número => retorna 'Não é número'
*/
/* 
const resultado = fizzBuzz('15');
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'Não é número';
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'fizzBuzz'; 
    if (entrada % 3 === 0)
        return 'Fizz'
    if (entrada % 5 === 0)
        return 'Buzz';
    
    return entrada;
}
*/

//EXERCÍCIO "VARIFICADOR DE VELOCIDADE"
/*
1ª Condição: Velocidade máxima de até 70Km
2ª a cada 5km acima do limite vc ganha 1 ponto na carteira
3ª usar Math.Floor() para arredondar cálculo
4ª caso os pontos maior que 12 -> "Carteira Suspensa"
*/
/* 
verificarVelocidade(80);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;

    if ( velocidade <= velocidadeMaxima)
        console.log('Ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / KmPorPonto));
        if( pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('Pontos',pontos);
    }
}
*/

//EXERCÍCIO PROJETO "PAR OU IMPAR"
/* 
exibirTipo(5);
function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) {
        if ( i % 2 === 0)
        console.log(i, 'PAR');
    else
    console.log(i, 'IMPAR');

    }
}
*/

//EXERCÍCIO "ENCONTRE O STRING"
/* 
const filme = {
    titulo : 'Vingadores',
    ano: 2018,
    diretor: 'CAMARÃO DIAS',
    personagem: 'Thor'
}

exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
}
*/

//EXERCÍCIO - MULTIPLOS DE 3 E 5
/*
Criar função "somar" que retorna a
soma de todos os múltiplos de 3 e 5
números entre 0 e 10

Multiplos de 3 são: 3, 6, 9
Múltiplos de 5 são: 5, 10

Somando os Multíplos
armazenar os multiplos de 3
armazenar os multiplos de 5
somar os dois
*/
/* 
somar(10);
function somar(limite){
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    
    for(i = 0; i <= limite; i++){
        if (i % 3 === 0)
        multiplosDe3 += i;

        if(i % 5 === 0)
        multiplosDe5 += i;
    }
    console.log(multiplosDe3 + multiplosDe5);
}

/* vocabulário:
i = índice
% = módulo 
*/

//EXERCÍCIO "MÉDIA DE NOTA ESCOLAR"
/*
Obter média a partir de um array

0-59: F
60-69: D
70-79: C
80-89: B
90-100: A
*/
//MANEIRA 1
/*  
const array = [70,70,80]
console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    const media = soma/(notas.length);

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A'

}
*/

//MANEIRA 
/*   
const array = [90,90,80]
console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A'
}

function calcularMedia(array) {
    let soma = 0;
    for (let valor of array) {
        soma += valor;
    }
    return soma/(array.length);

}

*/

/* VOCABULÁRIO
>= : maior e/ou igual
>= : menor e/ou igual
=== : igual 
&& : e

*/

//EXERCÍCIO CONTADOR DE ASTERÍSTICOS
//FORMA 1 NORMAL
/* 
exibirAsteristicos(10);

function exibirAsteristicos(linhas) {
    let padrao = '';
    for(let linha = 1; linha <= linhas; linha++){
        padrao += '*';
        console.log(padrao);
    }
}
*/
//FORMA 2 LOOP INTERIOR
/* 
exibirAsteristicos(10);

function exibirAsteristicos(linhas) {
    for(let linha = 1; linha <= linhas; linha++){
        let padrao = '';
        for(let i = 0; i < linha; i++){
            padrao += '*';
        }
        console.log(padrao);
    }
}
*/

//EXERCÍCIO ENCONTRE OS NUMEROS PRIMOS
//forma 1 com dois FOR
/*
exibirNumerosPrimos(15);
 
function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        let ehPrimo = true

        for (let divisor = 2; divisor < numero; divisor++){
            if(numero % divisor === 0){
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) console.log(numero);
    }
}
*/
//FORMA COM 2 FUNCTION
/* 
exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        if (numeroPrimo(numero)) console.log(numero);
    }
}

function numeroPrimo(numero) {
    for(let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor ===0) {
            return false;
        }
    }
    return true;
}
*/
/* 
const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    capacidadeBateria: 5000,
    ligar : function() {
        console.log("Fazendo ligação...")
    }
}
*/
/* 
//Factory Function : Funções de Fábrica
//por convenção usar camelCase (umDoisTres)
function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...")
        }
    }
}

const celular1 = criarCelular('Zenfone',5.5,5000);
console.log(celular1);

//Constructor function : Função do Construtor
//Por convenção usar Pascal Case (UmDoisTres)

function Celular(marcaCelular,tamanhoTela,capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria
    this.ligar = function() {
        console.log("Fazendo Ligação...");
    }
}

const celular = new Celular('asus',5.5,5000);
console.log(celular);
*/
/* 
//NATUREZA DINAMICA DOS OBJETOS
const mouse = {
    cor : 'red',
    marca: 'dazz'
}
mouse.velocidade = 5000; //é possível adicionar nova propriedade ao objeto
mouse.trocarDPI = function() {
    console.log('mudando DPI');
}
delete mouse.velocidade; //também é possível excluir propriedades 
delete mouse.cor; //exlcuir mais de uma propriedade
console.log(mouse);
*/
// CLONANDO OBJETO
/*
const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    capacidadeBateria: 5000,
    ligar : function() {
        console.log("Fazendo ligação...")
    }
}
console.log(celular);

//CLONE 1
const novoObjeto = Object.assign({
    bateria: 5000 //acrescentou essa propriedade ao objeto clonado 
},celular);
console.log(novoObjeto);

//CLONE 2
const objeto2 = {...celular}; //clonou a base principal
console.log(objeto2);
 */

/* 
MÉTODO MAX 
Math.random (numeros aleatórios)
Math.max (2,3,4,5,6) : escolhe o número maior
Math.min (5,3,2,6,7)  escolhe o numero menor
*/

//TEMPLETE LITERAL
/*
Object {}
Boolean true,false
string ' '," "
Template ``
*/
/* 
//EXEMPLO DE COMO REDIGIR EMAIL COM CARACTERES ESPECIAIS E MUDAR INFORMAÇÕES
const nome = 'Neto'
const email = 'marcelino.gneto@gmail.com'
const CPF = '960.058.822-87'
const idade = 2021-1987
const msgDoEmail =

//dentro da propriedade ${...} pode ser inseridada várias informações
`Olá ${nome} 

Confirme seus dados!
CPF: ${CPF}
Email: ${email}
Idade é: ${idade} anos

Obrigado por se inscrever no canal.

Para acompanhar os vídeos não se esqueça de ativar o sino.

Obrigado,
à Coordenação.`;

console.log(msgDoEmail);
*/

//DATE (FORMATOS DE DATA)

//const data1 = new Date(); //data completa
//const data1 = new Date('March 06 2019 09:30'); //descrever formato de data
//const data1 = new Date(2021,02,06,9,30); //descrever formato de data
//console.log(data1);


//MINI PROJETO: MONTADOR DE ENDEREÇO
/*
Criar um objeto endereço que contenha:
Rua
Cidade
CEP
exibirEndereco(endereco)
*/
/* 
let endereco = {
    rua: 'Benjamin Constant',
    cidade: 'Belém',
    cep: '66053-040' 
};

function exibirEndereco(endereco) {
    for (let chave in endereco)
        console.log(chave,endereco[chave]);
}

exibirEndereco(endereco);
//VOCABULARIO: let (tipo de variável que pode ser alterada)
*/

//EXERCÍCIO: Igualdade de Objetos
/* 
function Endereco(rua,cidade,cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new Endereco('a','b','c');
const endereco2 = new Endereco('a','b','c');
const endereco3 = endereco1;

function saoIguais(endereco1,endereco2) {
    //comparar se as propriedades são iguais
    return endereco1.rua === endereco2.rua &&
            endereco1.cidade === endereco2.cidade &&
            endereco1.cep === endereco2.cep
}

console.log(saoIguais(endereco1,endereco2));

function temEnderecoMemoriaIguais(endereco1,endereco2){
    //comparando se a referência do objeto aponta para o mesmo local na memoria
    return endereco1 === endereco3;
}

console.log(temEnderecoMemoriaIguais(endereco1,endereco2));
*/

//MINI PROJETO: MONTADOR DE POSTAGEM DE BLOG
/* 
let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios: [
        {autor: 'a', mensagem: 'b'},
        {autor: 'a', mensagem: 'b'}
    ],
    estaoAoVivo: true
}

console.log(postagem);
*/
//CONSTRUCTOR FUNCTION
//Criar objeto postagem
//titulo, mensagem,autor,visualizacoes,comentarios,estaaovivo
/* 
function Postagem(titulo,mensagem,autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = []
    this.estaAoVivo = false
}
let postagem = new Postagem('a','b','c');
console.log(postagem);
*/

//PROJETO FAIXA DE PREÇOS
/* 
//PRIMEIRA OPÇÃO: estrutura simples de Array
let faixas = [ 
    {tooltip: 'até R$ 700,00',minimo: 0,maximo:700},
    {tooltip: 'de R$ 700,00 a R$ 1.000,00',minimo: 700, maximo: 1000},
    {tooltip: 'R$ 1.000,00 ou mais', minimo: 1000, maximo: 99999} 
];


//SEGUNDA OPÇÃO: estrutura de Factory Function
function criarFaixaPreco(tooltip,minimo,maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criarFaixaPreco('a',1,100),
    criarFaixaPreco('b',100,1000),
    criarFaixaPreco('c',1000,10000)
]
//TERCEIRA OPÇÃO: estrutura de Constructor Function
function FaixaPreco(tooltip,minimo,maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new FaixaPreco('d',10,20),
    new FaixaPreco('e',20,30),
    new FaixaPreco('f',30,40)
];

console.log(faixas);
console.log(faixas2);
console.log(faixas3);
*/

//JS ARRAYS
/*
1.Adicionar novos elementos 
2.Encontrar Elementos
3.Remover Elementos
4.Dividir Elementos
5.Dividir Arrays
6.Combinar Arrays
*/

/*
//1.Adicionar novos elementos no array
//ARRAYS DO TIPO PRIMITIVO 

const numeros = [1,2,3]; //array basico
numeros.unshift(2); //adiciona no início do array
numeros.splice(1,0,'a'); //adiciona no meio do array
numeros.push('c');//adiciona no final do array

console.log(numeros);
*/
/* 
//2.Encontrar Elementos no array
const numeros = [1,2,3,4,1];
console.log(numeros.indexOf(2)); //encontra o valor 2 (a contar a partir do 0,1,2,3, logo a posição do 2º elemento é o valor 1)
//a função .indexOf busca o primeiro valor correspondente
console.log(numeros.lastIndexOf(1));
//a função .lastIndexOf busca o ultimo valor correspondente
console.log(numeros.includes(3)); //true
console.log(numeros.includes(5)); //false
//a função .includes verifica se o valor consultado é verdadeiro ou falso, ou seja, se o valor pesquisado está entre os elementos
*/

//ARRAYS DO TIPO REFERENCIAL
/* 
const marcas = [
    {id:1 , nome: 'a'}, //(alt+shift+setaBaixo) atalho copia 
    {id:2 , nome: 'b'}, //(alt+shift+setaCima) atalho copia 
];

const marca = marcas.find(function(marca){
    return marca.nome === 'a';
});

console.log(marca);

*/
//ARROW FUNCTIONS =>
/* 
const marcas = [
    {id:1 , nome: 'a'}, //(alt+shift+setaBaixo) atalho copia 
    {id:2 , nome: 'b'}, //(alt+shift+setaCima) atalho copia 
];

console.log(marcas.find((marca) => marca.nome === 'a'));
//método usado quando a pesquisa for um unico elemento
*/

//3.Remover Elementos
/* 
const numeros = [1,2,3,4,5,6];
//remover elemento do final .pop()
const ultimo = numeros.pop();
console.log(ultimo); //6 removido
console.log(numeros); //[1,2,3,4,5]

//remover elemento do início .shift()
const primeiro = numeros.shift();
console.log(primeiro); //1 removido
console.log(numeros); //[2,3,4,5]

//remover elemento do meio .splice() 
const meio = numeros.splice(2,1); //onde 2= segundo elem. a contar do 0 "0,1,2->2,3,4". e o 1= remover um único elemento
console.log(meio); //[4] removido
console.log(numeros);//[2,3,5] 
*/
//ESVAZIAR UM ARRAY (TIRAR TODOS OS ELEMENTOS)
/* 
let numeros = [1,2,3,4,5,6];
let outros = numeros;
//solução 1 [] chaves vazias
/* 
numeros = []; //zera todos os elementos do array
console.log(numeros); //[] 
//OBSERVAÇÃO
console.log(outros); //os elementos armazenados na variável "outros" continuam com os valores iniciais
*/
/* 
//solução 2 .lenght (apagar tudo de qualquer variavel armazenada)
numeros.length = 0;
console.log(numeros); //[]
console.log(outros); //[]
*/
/* 
//Solução 3 .splice (outra forma de zerar todos os elementos do array)
numeros.splice(0,numeros.length);
console.log(numeros); //[]
console.log(outros); //[]
*/
//AULA - COMBINANDO E CORTANDO ARRAYS
/* 
const primeiro = [1,2,3];
const segundo = [4,5,6];
//Combinar array usando o método: concat();
const combinado = primeiro.concat(segundo); //comando "CONCAT" usado para combinar arrays
console.log(combinado);
//Dividir array usando o método: slice();
//const cortado = combinado.slice(); //passa todos os valores para outra variável
//const cortado = combinado.slice(1); //passa para outra variável o valor do primeiro índice
//const cortado = combinado.slice(3,6);//apresentou os valores dos índices de 3 a 6
const cortado = combinado.slice(0,3);//apresentou os valores dos de índice 0 a 3
console.log(cortado);
*/
//OPERADOR SPREAD
/*
const primeiro = [1,2,3];
const segundo = [4,5,6];
//Combinar array usando o método: SPREAD[[...]; outra versão para o método concat
//const combinado = [...primeiro,...segundo]; //[1, 2, 3, 4, 5, 6]: esse método permite a inclusão de novos valores entre os arrays
//exemplo:
const combinado = [...primeiro,'a',...segundo,'Neto']; //[1, 2, 3, "a", 4, 5, 6, "Neto"]
console.log(combinado);
//Dividir arrays usando o método: SPREAD [...]; outra versão para o método splice
const clonado = [...combinado,'x'];//[1, 2, 3, "a", 4, 5, 6, "Neto", "x"]: clonou todo o conteúdo da array e adicionou um novo elemento a nova array clonada
console.log(clonado);
 */
//ForEach: Iterando um Array (percorrendo)
//usando seta
/* 
const numeros = [1,2,3,4,5];

//numeros.forEach((numero) => console.log(numero))//apresentou os valores de 1 a 5, um em cada linha 
numeros.forEach((numero,indice) => console.log(numero,indice))//apresentou os valores de 1 a 5 acompanhados de seus índices 1 0, 2 1, 3 2, 4 3 e 5 4. 
*/
//ACRESCENTAR/COMBINAR ARRAYS
//usando o método join para acrescentar divisores entre os valores do array
/* 
const numeros = [1,2,3,4,5];

//const combinado = numeros.join('-'); //1-2-3-4-5: o objeto colocado entre as aspas foi adicionado entre os valores do array
//const combinado = numeros.join('.');// 1.2.3.4.5
const combinado = numeros.join('repolho');//1repolho2repolho3repolho4repolho5
console.log(combinado);

//usando o método split, neste caso, dividir as palavras de uma frase string
const frase = "Olá seja bem vindo a nossa aula";
const resultado = frase.split(' ');//separou cada palavra da frase e atribuiu um índica a cada uma
console.log(resultado);

console.log(resultado.join('-'));//Olá-seja-bem-vindo-a-nossa-aula
*/

//DOM (todo o HTML que tem dentro de uma página)

//PROJETO JS FESTAVIP
function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosCristin = ['Amanda', 'Sabrina', 'Rafael', 'Jonas', 'Aline', 'Neto']
    
    if (ConvidadosCristin.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode Entrar!'
    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você NÃO pode Entrar!'
    }
}




