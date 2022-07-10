# Princípios de Projeto de Software

## Características de um bom projeto

### Reutilização de código

A reutilização de código implica em redução de custos em desenvolvimento, o que pode ser extremamente essencial para o negócio, pois pode gerar alocação de recursos financeiro em outras áreas, como marketing, e o lançamento do produto no mercado mais cedo que os competidores.
Utilizar padrões de projetos é uma maneira de aumentar a flexibilidade dos componentes do software e torná-los de mais fácil reutilização. Contudo, o preço a se pagar é tornar o software mais complexo.

### Extensibilidade

Mudança é a única constante na vida de um programador.

## Princípios de projeto

### Encapsule o que varia

**Identifique os aspectos de sua aplicação que variam e separe-os dos que permanecem os mesmos**

O objetivo principal deste princípio é minimizar o efeito causado por mudanças.
Você pode isolar as partes de um programa que variam em módulos independentes, protegendo todo o resto do código de efeitos adversos. Dessa forma você gasta menos tempo fazendo o programa voltar a funcionar, implementando e testando mudanças. Quanto menos tempo você gasta, fazendo mudanças, mais tempo você tem para implementar novas funcionalidades.

### Encapsulamento à nível de método

Isolar métodos para que tenham uma única responsabilidade, para reduzir a complexidade e evitar que tenhamos que reescrevê-lo toda vez que uma regra externa for alterada.

### Encapsulamento à nível de classe

Com o tempo você pode querer adicionar mais e mais responsabilidades para um método que é utilizado para fazer algo simples. Esses comportamentos adicionais quase sempre vem com seus próprios campos e métodos, que eventualmente desfocam a responsabilidade primária da classe que o contém. Extraia tudo para uma nossa classe para tornar as coisas mais claras e simples.

## Programe para um interface, não para uma implementação

**Programe para uma interface, não para uma implementação. Dependa de abstrações, não de classes concretas**

Você pode perceber se o projeto é flexível o bastante se você pode estendê-lo facilmente sem quebrar o código existente.
Quando você quer fazer duas classes colaborarem você pode começar fazendo uma delas ser dependente da outra.

Método flexível de configurar uma colaboração entre objetos:

1. Determinar o que exatamente um objeto precisa do outro
2. Descreva esses métodos em uma novas interface ou classe abstrata
3. Faça a classe que é uma dependência implementar essa interface
4. Agora faça a segunda classe ser dependente dessa interface ao invés de fazer isso na classe concreta.

## Prefira composição sobre herança

A herança é provavelmente a maneira mais óbvia de reutilizar código entre classes. Você tem duas classes com o mesmo código. Crie uma base comum para ambas e mova o código similar para dentro dela.

Infelizmente a herança vem com um lado ruim, que se torna aparente apenas quando seu programa já tem um monte de classes e mudar tudo fica muito difícil. Aqui temos uma lista desses problemas

- Uma subclasse não pode reduzir a interface da superclasse
  - Você tem que implementar todos métodos abstratos da classe mãe, mesmo que você não os utilize
- Quando sobrescrevendo métodos você precisa se certificar que o novo comportamento é compatível com o comportamento base
  - Isso é importante porque objetos da subclasse podem ser passados para qualquer código que espera objetos da superclasse e você não quer que aquele código quebre
- A herança quebra o encapsulamento da superclasse
  - Pois os detalhes internos da classe mãe se tornam disponíveis para a subclasse. Pode ocorrer uma situação oposta onde um programador fazer a superclasse ficar ciente de alguns detalhes das subclasses para deixar qualquer futura extensão mais fácil.
- As subclasses estão firmemente acopladas as superclasses
  - Quaisquer mudanças em uma superclasse podem quebrar a funcionalidade das subclasses
- Tentar reutilizar código através da herança pode levar a criação de hierarquias de heranças paralelas
  - A herança geralmente acontece em apenas uma dimensão. Mas sempre que há duas ou mais dimensões você tem que criar várias combinações de classe, inchando a hierarquia de classe para um tamanho ridículo.

Há uma alternativa para a herança chamada **composição**. Enquanto a herança representa uma relação **é um(a)** entre classes (um carro é um transporte), a composição representa a relação **tem um(a)** (um carro tem um motor).

Esse princípio também se aplica a agregação, uma versão mais relaxada da composição, onde um objeto pode ter uma referência para outro, mas não gerencia seu ciclo de vida. Aqui temos um exemplo: um carro tem um motorista, mas ele ou ela podem usar outro carro ou apenas caminhar sem o carro.

# Princípios SOLID

## Princípio da responsabilidade única (SRP)

**Uma classe deve ter apenas uma razão para mudar**

Tente fazer com que cada classe seja responsável por uma única parte da funcionalidade fornecida pelo software, e faça aquela responsabilidade ser inteiramente encapsulada pela (podemos também dizer escondida dentro da) classe.

O objetivo principal deste princípio é reduzir a complexidade. Além disso, se uma classe faz muitas coisas, você terá que mudá-la cada vez que uma dessas coisas muda. Enquanto faz isso, você está arriscando quebrar outras partes da classe que você nem pretendia mexer.
Se em determinado momento você sente que está tornando difícil focar em aspectos específicos de um programa, lembre-se deste princípio e verifique se já não é hora de dividir algumas classes em partes menores.

## Princípio Aberto/Fechado (Open/closed Principle)

**As classes devem ser abertas para extensão mas fechadas para modificação**

Uma classe é aberta se você pode estendê-la, produzir uma subclasse e fazer o que quiser com ela. Ao mesmo tempo, é fechada se ela estiver 100% pronta para ser usada por outras classes.

## Princípio da substituição de Liskov

**Quando estendendo uma classe, lembre-se que você deve ser capaz de passar objetos da subclasse em lugar de objetos da classe mãe, sem quebrar o código cliente**

Isso significa que _uma subclasse deve permanecer compatível com o comportamento da superclasse. Quando sobrescrevemos um método, estenda o comportamento base ao invés de substituí-lo com algo completamente diferente._

É um conjunto de checagens que ajudam a prever se uma subclasse permanece compatível com o código que foi capaz de trabalhar com objetos da superclasse. Ao contrário de outros princípios de projeto que são amplamente abertos à interpretação, o princípio da substituição tem um conjunto de requerimentos formais para as subclasses, e especificamente para seus métodos.

1. Os tipos de parâmetros em um método de uma subclasse devem coincidir ou serem mais abstratos que os tipos de parâmetros nos métodos da superclasse.
   1. Digamos que temos uma classe com um método que deve alimentar gatos. O código cliente sempre passa objetos gatos nesse método
   2. Agora digamos que você criou uma subclasse que sobrescreveu o método para que ele possa alimentar qualquer animal (uma superclasse dos gatos)
   3. Agora se você passar um objeto desta subclasse ao invés de um objeto da superclasse para o código cliente, tudo ainda vai funcionar bem. O método pode alimentar quaisquer animais, então ele ainda pode alimentar qualquer gato passado pelo cliente.
2. O tipo de retorno de uma subclasse deve coincidir ou ser um subtipo do tipo de retorno no método da superclasse
   1. Os requerimentos para o tipo de retorno são inversos aos requerimentos para os tipos de parâmetros.
3. Um método em uma subclasse não devem lançar tipos de exceções que não são esperados que o método base lançaria
   1. Tipos de exceções devem coincidir ou serem subtipos daquelas que o método base já é capaz de lançar.
4. Uma subclasse não deve fortalecer pré-condições
5. Uma subclasse não deveria enfraquecer pós-condições
6. Invariantes de uma superclasse devem ser preservadas
7. Uma subclasse não deve mudar valores de campos privados da subclasse

## Princípio da segregação de interface

**Clientes não devem ser forçados a depender de métodos que não usam**

Tente fazer com que suas interfaces sejam reduzidas o suficiente para que as classes cliente não tenham que implementar comportamentos que não precisam.
Você deve quebrar interfaces gordas em classes mais granulares e específicas. Os clientes devem implementar somente aquelas métodos que realmente precisam, do contrário uma mudança irá quebrar clientes que nem sequer usam os métodos modificados.

## Princípio da inversão de dependência

**Classes de alto nível não deveriam depender de classes de baixo nível. Ambas devem depender de abstração. As abstrações não devem depender de detalhes. Detalhes devem depender de abstrações**
