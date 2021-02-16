# POC de Arquitetura Hexagonal

Este repositório contém uma prova de conceito do uso da arquitetura hexagonal.

## Arquitetura

A imagem abaixo representa a **Arquitetura do Microsserviço**.

Atente-se inicialmente à legenda.

A documentação apresenta quatro visões da arquitetura:
- O cartão **Nível de Sistema** apresenta uma visualização global do sistema de back-end, contextualizando um
potencial conjunto de serviços e como eles se conectam;
- O cartão **Nível de Escopo de Serviço** traz especificações da arquitetura ao redor de um serviço;
- O cartão **Nível de Serviço** especifica o programa (ou aplicação) implementada;
- O cartão **Pacotes do Serviço** especifica a divisão interna de pacotes, com suas respectivas entidades, seguindo o padrão UML;

> nota: é possível pensar que chega-se ao nível de serviço dando um "zoom" no _escopo de serviço_ a partir do
> nível de sistema.

<img src="https://github.com/uspcodelab/ts-ms-boilerplate/blob/main/arqui-boilerplate-ms.png" alt="Modelo da Arquitetura">
