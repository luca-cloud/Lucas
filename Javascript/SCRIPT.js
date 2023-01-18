
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys ')
const display = document.querySelector('.calculator__display')



keys.addEventListener('click', e => {
    if (e.target.matches('button')) {

        // Fazer algo

        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        //declara o elemento previousKeyType
        const previousKeyType = calculator.dataset.previousKeyType


        // Verifica as teclas que não possuem o data action como atributo na TAG (teclas de numeros)
        //Imprime no console Log"tecla numerica!
        if (!action) {
            console.log('number key!')
        }
        //Verifica as teclas que possuem  como valores nos atributos de data- action add, subtract, multiply, divide
        //Imprime no console log do navegador "tecla de operação!"
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            console.log('operator key!')
            key.classList.add('is-depressed')
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.fistValue = displayedNum
            calculator.dataset.operator = action;

        }
        // Verifica se a tecla possue no valor decimal no atributo data-action
        // imprime no console log do navegador o texto "tecla decimal"
        // Atribui o valor ao atributo textecontent, do elemento display o resultado da concatenação do valor displayeDnum e a string '.'
        if (action === 'decimal') {
            console.log('decimal key!')

            display.textContent = displayedNum + '.'

        }

        /*

Verifica se a tecla possue no valor clear no atributo data-action
imprime no console log do navegador o texto "tecla limpar"





        */

        if (action === 'clear') {
            console.log('clear key!')
            displayedNum =  '0'; 
            display.textContent = displayedNum;


        }

        //verifica  as teclas que não possuem o data ection como atrubuto na tag (tecla de numeros) condição de veraddeiro:
        //condicional que verifica se o valor atribuido ao displayedNUm é igual a '0'.
        //se verdadeiro, atribui valor pressionado da tecla ao conteudo do display, substituindo o valor '0'.
        //se falso, concatena o valor pressioando da tecla com o valor armazenado no display.


        if (action === 'calculate') {
            console.log('equal key!')
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum
            const calculate = (n1, operator, n2) => {

                let result = ''

                if (operator === 'add') {
                    result = parseFloat(n1) + parseFloat(n2)
                } else if (operator === 'subtract') {
                    result = parseFloat(n1) - parseFloat(n2)
                } else if (operator === 'multiply') {
                    result = parseFloat(n1) * parseFloat(n2)
                } else if (operator === 'divide') {
                    result = parseFloat(n1) / parseFloat(n2)
                }

                return result
            }















        }



            display.textContent = cal       culate(firstValue, operator, secondValue)



        }
    }
    if (!action) {

        if (displayedNum === '0' || previousKeyType === 'operator') {
            display.textContent = keyContent

        } else {
            display.textContent = displayedNum + keyContent
        }
        //remove a classe .is-depressed de todas as teclas
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))
    }


})


