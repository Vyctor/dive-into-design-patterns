# Factory Method

**Também conhecido como: Método fábrica, Construtor virtual**

O **Factory Method** é um padrão criacional de projeto que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.

## Problema

Imagine que você está criando uma aplicação de gerenciamento de logística. A primeira versão da sua aplicação pode lidar apenas com o transporte por caminhões, portanto a maior parte do seu código fica dentro da classe **Caminhão**.

Depois de um tempo, sua aplicação se torna bastante popular. Todos os dias você recebe dezenas de solicitações de empresas de transporte marítimo para incorporar a logística marítima da aplicação.

Boa notícia, certo? Mas atualmente a maior parte do seu código é acoplada a classe **Caminhão**. Adicionar **Navio** à aplicação exigiria alterações em toda a base de código. Além disso, se mais tarde você decidir adicionar outro tipo de transporte à aplicação, provavelmente precisará fazer todas essas alterações novamente.

Como resultado, você terá um código bastante sujo, repleto de condicionais que alteram o comportamento da aplicação, dependendo da classe de objetos de transporte.

## Solução

O padrão Factory Method sugere que você substitua chamadas diretas de construção de objetos (usando o operador new) por chamadas para um método **factory** especial.
Objetos retornados por um método **factory** geralmente são chamados de produtos.

Agora podemos sobrescrever o método **factory** em uma subclasse e alterar a classe de produtos que estão sendo criados pelo método.
Porém há uma pequena limitação, **as subclasses só podem retornar tipos diferentes de produtos se estes tiverem uma classe ou interface base em comum. Além disso, o método **factory** na classe base deve ter seu tipo de retorno declarado com essa interface.**

Por exemplo, as classes **Caminhão** e **Navio** devem implementar a interface **Transporte**, que declara um método chamado **entregar**.
Cada classe implementa esse método de maneira diferente: caminhões entregam carga por terra, navios pelo mar. O método factory na classe **LogisticaViaria** retorna objetos de caminhão, enquanto o método **factory** na classe **LogisticaMaritima** retorna navios.

## Aplicabilidade

### Use o Factory Method quando não souber de antemão os tipos e dependências exatas do objetos com os quais seu código deve funcionar.

O **Factory Method** separa o código de construção do projeto do código que realmente usa o produto. Portanto é mais fácil extender o código de construção do produto independentemente do restante do código.
Por exemplo, para adicionar um novo tipo de produto à aplicação, só será necessário criar uma nova subclasse criadora e substituir o método fábrica nela.

### Use o Factory Method quando deseja fornecer aos usuários da sua biblioteca ou framework uma maneira de estender seus componentes internos

Herança é provavelmente a maneira mais fácil de estender o comportamento padrão de uma biblioteca ou framework. Mas com o framework reconheceria que sua subclasse deve ser usada em vez de um componente padrão?

A solução é reduzir o código que constrói componentes no framework em um único método fábrica, além de estender o próprio componente.

### Use o Factory Method quando deseja economizar recursos do sistema reutilizando objetos existentes em vez de recriá-los sempre

Você irá enfrentar essa necessidade ao lidar com objetos grandes e pesados, como conexões com banco de dados, sistemas de arquivos e recursos de rede.

Vamos pensar no que deve ser feito para reutilizar um objeto existente

1. Primeiro, você precisar criar alguma armazenamento para manter o controle de todos objetos criados.
2. Quando alguém solicita um objeto o programa deve procurar um objeto livre dentro deste conjunto e retorná-lo ao código cliente.
3. Se não houver objetos livres, o programa deve criar um novo e adicioná-lo ao conjunto de objetos.

Isso é muito código! E tudo deve ser colocado em um único local para que você não polua o programa com código duplicado.

Provavelmente o lugar mais óbvio e conveniente onde este código deve ficar é no construtor da classe cujos objetos estamos tentando reutilizar. No entanto, um construtor deve sempre retornar **novos objetos** por definição. Não pode retornar instâncias existentes.

Portanto, você precisa ter um método regular capaz de criar novos objetos e reutilizar os existentes. Isso parece muito com um método **factory**.

## Prós

1. Evita acoplamentos firmes entre criador e os produtos concreto
2. Implementa o princípio da responsabilidade única, pois você pode mover o código de criação do produto para um único local, facilitando a manutenção
3. Implementa o princípio aberto/fechado, pois você pode introduzir novos tipos de produtos no programa sem quebrar o código existente

## Contras

1. O código pode se tornar mais complexo, pois você precisa introduzir muitas subclasses novas para implementar o padrão. O melhor cenário é quando você está introduzindo o padrão de hierarquia existente de classes criadoras.

## Relações com outros padrões

- Muitos projetos começam utilizando o **Factory Method** e evoluem para **Abstract Factory**, **Prototype** ou **Builder**.
- Classes **Abstract Factory** são quase sempre baseadas em um conjunto de **métodos fábrica**, mas você também pode usar **Prototype** para compor métodos dessas classes.
- Você pode usar o **Factory Method** junto com o **Iterator** para permitir que uma coleção de subclasses retornem diferentes tipos de iteradores que são compatíveis com as coleções.
- O **Prototype** não é baseado em heranças, então ele não tem os inconvenientes dela. Por outro lado, o **Prototype** precisa de um método de inicialização complicada do objeto clonado. O **Factory Method** é baseado em herança mas não precisa de uma etapa de inicialização.
- O **Factory Method** é uma especialização do **Template Method**. Ao mesmo tempo, o **_Factory Method_** pode servir como uma etapa em um **Template Method** grande.
