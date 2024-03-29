# Adapter

O **Adapter** é padrão de projeto estrutural que permite objetos com interfaces incompatíveis colaborarem entre si.

## Problema

Imagine que você está criando uma aplicação de monitoramento do mercado de ações da bolsa. A aplicação baixa os dados das ações de múltiplas fontes em formato XML e então mostra gráficos e diagramas para o usuário.

Em algum momento você decide melhorar a aplicação ao integrar uma biblioteca de análise de terceiros. Mas aqui está a pegadinha: a biblioteca só trabalha com dados em formato JSON.

Você poderia mudar a biblioteca para que ela funcione com XML. Contudo, isso pode quebrar algum código existente que depende da biblioteca. E pior, você pode não ter acesso ao código fonte da biblioteca para começo de conversa, fazendo dessa abordagem uma tarefa impossível.

## Solução

Você pode criar um adaptador. Ele é um objeto especial que converte a interface de um objeto para que o outro objeto possa entendê-lo.

Um adaptador encobre um dos objetos para esconder a complexidade da conversão acontecendo nos bastidores. O objeto encoberto nem fica ciente do adaptador. Por exemplo, você pode encobrir um objeto que opera em metros e quilômetros com um adaptador que converte todos os dados para unidades imperiais tais como pés e milhas.

Adaptadores podem não só converter dados em vários formatos, mas também podem ajudar objetos com diferentes interfaces a colaborar.

1. O adaptador obtém uma interface compatível com um dos objetos existentes.
2. Usando essa interface, o objeto existente pode chamar os métodos do adaptador com segurança.
3. Ao receber a chamada o adaptador passa o pedido para o segundo objeto, mas em um formato e ordem que o segundo objeto espera.

Algumas vezes é possível criar um adaptador de duas vias que pode converter as chamadas em ambas as direções.

Voltando a nossa aplicação de bolsa de valores. Para resolver o dilema dos formatos incompatíveis, você pode criar adaptadores XML para JSON para cada classe da biblioteca de análise que seu código trabalha diretamente. Então você ajusta seu código para comunicar-se com a biblioteca através desses adaptadores. Quando um adaptador recebe uma chamada, ele traduz os dados entrantes XML em uma estrutura JSON e passa a chamada para os métodos apropriados de um objeto de análise encoberto.

## Aplicabilidade

Utilize a classe Adaptador quando você quer usar uma classe existente, mas sua interface não for compatível com o resto do seu código.

Esse padrão permite que você crie uma classe de meio termo que serve como um tradutor entre seu código e a classe antiga, uma classe de terceiros, ou qualquer outra classe com uma interface estranha.

Utilize o padrão quando você quer reutilizar diversas sub-classes existentes que não possuam alguma funcionalidade comum que não pode ser adicionada a superclasse.

## Como implementar

1. Certifique-se que você tem ao menos duas classes com interfaces compatíveis
   1. Uma classe serviço útil que você não pode modificar
   2. Uma ou mais classes cliente que seriam beneficiadas com o uso da classe serviço.
2. Declare a interface cliente e descreva como o cliente se comunica com o serviço
3. Cria a classe adaptadora e faça-a seguir a interface cliente. Deixe todos os métodos vazios por enquanto.
4. Adicione um campo para a classe do adaptador armazenar uma referência ao objeto do serviço. A prática comum é inicializar esse campo via o construtor, mas algumas vezes é mais conveniente passá-lo para o adaptador ao chamar seus métodos
5. Um por um implemente todos os métodos da interface cliente na classe adaptadora. O adaptador deve delegar a maioria do trabalho real para o objeto serviço, lidando apenas com a conversão da interface ou formado dos dados.
6. Os Clientes devem usar o adaptador através da interface cliente. Isso irá permitir que você mude ou estenda o adaptador sem afetar o código cliente.

## Prós

- Princípio de responsabilidade única. Você pode separar a conversar de interface ou de dados da lógica primária de negócio do programa.
- Princípio aberto/fechado. Você pode introduzir novos tipos de adaptadores no programa sem quebrar o código cliente existente, desde que eles trabalhem com os adaptadores através da interface cliente.

## Contras

- A complexidade geral do código aumenta porque você precisa introduzir um conjunto de novas interfaces e classes. Algumas vezes é mais simples mudar a classe serviço para que ela se adéque com o resto do código.

## Relações com outros padrões

- O Bridge é geralmente definido com antecedência, permitindo que você desenvolva partes de uma aplicação independentemente umas das outras. Por outro lado, o Adapter é comumente usado em aplicações existentes para fazer com que classes incompatíveis trabalhem bem juntas.
- O Adapter muda a interface de um objeto existente, enquanto que o Decorator melhora um objeto sem mudar sua interface. Além disso, o Decorator suporta composição recursiva, o que não seria possível quando você usa o Adapter.
- O Adapter fornece uma interface diferente para um objeto encapsulado, o Proxy fornece a ele a mesma interface, e o Decorator fornece a ele com uma interface melhorada.
- O Facade define uma nova interface para objetos existentes, enquanto que o Adapter tenta fazer uma interface existente ser utilizável. O Adapter geralmente envolve apenas um objeto, enquanto que o Facade trabalha com um inteiro subsistema de objetos.
- O Bridge, State, Strategy (e de certa forma o Adapter) têm estruturas muito parecidas. De fato, todos esses padrões estão baseados em composição, o que é delegar o trabalho para outros objetos. Contudo, eles todos resolvem problemas diferentes. Um padrão não é apenas uma receita para estruturar seu código de uma maneira específica. Ele também pode comunicar a outros desenvolvedores o problema que o padrão resolve.
