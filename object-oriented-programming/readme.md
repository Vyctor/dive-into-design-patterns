# Programação Orientada a Objetos

Paradigma baseado no conceito de envolver pedaços e comportamentos relacionados a determinado dado em uma coleção chamada **objetos**, que são construídos de um conjunto de **planos de construção** definidos por um programador, chamados de **classes**

## Hierarquia de classes

Classes podem ser organizadas de acordo com uma hierarquia. Vamos supor que tenhamos uma classe Camionete e uma classe Esportivo. Estas classes referenciam tipos de Carros, então Carro é a superclasse delas, pois possui atributos em comum, como acelerar, modelo, ano, etc.

Uma Superclasse também pode ser chamada de classe mãe, e suas filhas são chamadas subclasses. Subclasses herdam o comportamento da mãe, definindo apenas atributos e comportamentos que diferem.
Subclasses podem sobrescrever o comportamento de métodos que herdaram de suas classes parentes. Uma subclasse pode tanto substituir completamente o comportamento padrão, ou apenas melhorá-lo com coisas adicionais.

## Pilares da POO

A programação orientada a objetos e baseada em quatro pilares:

- Herança
- Polimorfismo
- Abstração
- Encapsulamento

### Abstração

Na POO a modelagem dos objetos representa apenas os atributos necessários para determinado contexto de aplicação, ignorando outras características do mundo real.
A **abstração** é um modelo de objeto ou fenômeno do mundo real, limitado a um contexto específico, que representa todos os detalhes relevantes para este contexto com grande precisão e omite o resto.

### Encapsulamento

É a habilidade de um objeto de esconder parte de seu estado e comportamentos de outros objetos, expondo apenas uma interface limitada para o resto do programa.
Encapsular algo significa torná-la privada, e portanto acessível apenas por dentro dos métodos da sua própria classe. Há um modo um pouco menos restritivo, chamado protegido, que torna um membro da classe visível para subclasses também.

### Herança

A Herança é a habilidade de construir novas classes em cima de classes já existentes. O maior benefício da herança é a reutilização de código.
Se você quer criar uma classe que é apenas um pouco diferente de uma já existente não há necessidade de duplicar código. Ao invés disso você estende a classe existente e coloca a funcionalidade adicional dentro de uma subclasse resultante, que herdará todos os campos de métodos da superclasse.

A consequência do uso de herança é que você não pode esconder um método em uma subclasse se este foi declarado na superclasse. Você deve implementar todos os métodos da superclasse, mesmo que não façam sentido em sua subclasse.

### Polimorfismo

É a habilidade de um programa detectar a classe real de um objeto e chamar sua implementação mesmo quando seu tipo real é desconhecido no contexto atual.

## Relações entre objetos

Além da herança e implementação que já vimos, há outros tipos de relações entre objetos que ainda não falamos.

### Dependência

É o mais básico e o mais fraco tipo de relações entre classes.
Existe uma dependência entre duas classes se algumas mudanças na definição de uma das classes pode resultar em modificações em outra classe.
A dependência tipicamente ocorre quando você usa nomes de classes concretas em seu código. Por exemplo, quando especificando tipos em assinaturas de métodos, quando instanciando objetos através de chamadas do construtor, etc... Você pode tornar a dependência mais fraca se você fazer seu código ser dependente de abstrações, ao invés de classes concretas.

### Associação

É um relacionamento no qual um objeto usa ou interage com outro. Em UML é mostrado por uma seta simples desenhada de um objeto e apontada para outro que ele utiliza.
Ter uma associação bidirecional é uma coisa completamente normal. Nesse caso, a flecha aponta para ambas entidades.
A associação pode ser vista como um tipo especializado de dependência, onde um objeto sempre tem acesso aos objetos os quais ele interage, enquanto que a dependência simples não estabelece uma ligação permanente entre os objetos.

```ts
class Teacher {
  public student: Student;

  constructor(student: Student) {
    this.student = student;
  }

  public async teach(course: Course): void {
    // ...
    this.student.remember(course.getKnowledge());
  }
}
```

Observe o método teach. Ele precisa de um argumento do tipo Course. Caso a implementação do método getKnowledge mude nosso código irá quebrar. Isso é chamado de dependência.
Agora olhe para o campo student e como ele é usado no método teach. Podemos dizer que a classe Student é também uma dependência para a classe Teacher, pois se o método remember mudar o nosso código irá quebrar.
Contudo, uma vez que o campo student é publico e está acessível para qualquer método de Teacher, a classe Student também é uma associação.

### Agregação

É um tipo especializado de associação que representa relações individuais (one-to-many), múltiplas (many-to-many), e totais (whole-part) entre múltiplos objetos.
Geralmente, sob agregação, um objeto "tem" um conjunto de outros objetos e serve como um container ou coleção. O componente pode existir sem o container e pode ser ligado através de vários contêineres ao mesmo tempo.
Na UML a agregação é mostrada como uma linha e um diamante vazio na ponta do contêiner e uma flecha apontando para o componente.

### Composição

A composição é um tipo de agregação, onde um objeto é composto de um ou mais instâncias de outro. A distinção entre esta relação e as outras é que o componente só pode existir como parte de um contêiner.
No UML a relação de composição é desenhada do mesmo modo que para a agregação, mas com um diamante preenchido na base da flecha.

### Panorama geral

- Dependência
  - Classe A pode ser afetada por mudança na classe B
- Associação
  - Objeto A sabe sobre Objeto B. Classe A depende de B.
- Agregação
  - Objeto A sabe de Objeto B, e consiste de B. Classe A depende de B.
- Composição
  - Objeto A sabe sobre Objeto B, consiste de B, e gerencia o ciclo de vida de B. A depende de B.
- Implementação
  - Classe A define métodos declarados na interface B. Objeto de A podem ser tratados como B.
  - Classe A depende de B.
- Herança
  - Classe A herda a interface e implementação da classe B mas pode estendê-la. Objetos de A podem ser tratados como B. Classe A depende de B.
