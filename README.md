# Encriptador de texto

Este proyecto se realizó, en base al challenge final del curso de Lógica de Programación, impartido por Alura Latam, a través del programa One de Oracle.

![](https://i.ibb.co/2cQGjCV/encriptador.png)

## Insignias
![Finalizado](https://img.shields.io/badge/Status-Finalizado-brightgreen)
![MIT License](https://img.shields.io/github/license/dropbox/dropbox-sdk-java)
![Release Date](https://img.shields.io/badge/Release%20Date-June%202024-blue)

## Índice
* [Título e imagen de portada](#encriptador-de-texto)
* [Insignias](#insignias)
* [Índice](#índice)
* [Descripción del proyecto](#descripción-del-proyecto)
* [Estado del proyecto](#estado-del-proyecto)
* [Características de la aplicación y demostración](#características-de-la-aplicación-y-demostración)
* [Tecnologías utilizadas](#tecnologías-utilizadas)
* [Demostración del Funcionamiento](#demostración-del-funcionamiento)
* [Personas-Desarrolladores del Proyecto](#personas-desarrolladores)
* [Licencia](#licencia)
* [Conclusión](#conclusión)

## Descripción del proyecto
Este proyecto consiste en un encriptador de texto desarrollado como parte del challenge final, del curso de Lógica de Programación de Alura Latam, como parte del programa One de Oracle. El objetivo era crear una aplicación web que permitiese encriptar y desencriptar un texto, mediante un cifrado por sustitución, una de las técnicas más simples dentro de la criptografía.

## Estado del proyecto
Terminado

## Características de la aplicación y demostración
### Instrucciones del desafío:
1. Nos brindaron un diseño modelo como guia a seguir, a traves de la plataforma [Figma](https://www.figma.com/design/trP3p5nEh7XUyB3n2bomjP/Alura-Challenge---Desaf%C3%ADo-1---L%C3%B3gica?node-id=0-1&t=oLMQWoS3F8QEu6ya-0), para darle estructura visual a nuestro encriptador.

2. De la misma forma, nos entregaron las directrices de la lógica de encriptación de nuestro programa, a través de [Trello](https://trello.com/c/gNl1c9sg/12-sobre-el-desaf%C3%ADo).

3. Directrices:
#### Las "llaves" de encriptación utilizadas son las siguientes:
- La letra "e" es convertida para "enter"
- La letra "i" es convertida para "imes"
- La letra "a" es convertida para "ai"
- La letra "o" es convertida para "ober"
- La letra "u" es convertida para "ufat"

#### Requisitos:
- Debe funcionar solo con letras minúsculas.
- No deben ser utilizadas letras con acentos ni caracteres especiales.
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Por ejemplo:
- "gato" => "gaitober"
- "gaitober" => "gato"

#### La página debe tener campos para:
- Inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre las dos opciones.
- El resultado debe ser mostrado en la pantalla.

#### Extras:
- Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea, que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.

## Tecnologías utilizadas
- HTML
- CSS (Grid, Flexbox, Media Queries)
- JavaScript

## Demostración del Funcionamiento

En esta sección se muestra una demostración del funcionamiento del encriptador de texto. A continuación se muestran capturas de pantalla que ilustran el proceso de encriptación, copiado de texto y desencriptación.

1. Texto encriptado
![Texto encriptado](https://i.ibb.co/Lktx2mQ/Texto-encriptador.png)
- En esta imagen se muestra el texto encriptado utilizando el encriptador.

2. Botón de copiar texto funcionando
![Botón de copiar texto](https://i.ibb.co/SxSBN6s/copiar-texto.png)
- Aquí se observa el funcionamiento del botón de copiar texto, que permite copiar el texto encriptado/desencriptado al portapapeles.

3. Texto desencriptado
![Texto desencriptado](https://i.ibb.co/gVQdW2Q/texto-desencriptado.png)
- Esta imagen muestra el resultado del texto desencriptado luego de aplicar la funcionalidad correspondiente.

## Personas-Desarrolladores del Proyecto
- Héctor Andrés González Mora - [GitHub](https://github.com/hectorgm26)

## Licencia
Este proyecto está bajo la licencia MIT.

## Conclusión
Este proyecto fue una excelente oportunidad para aplicar conocimientos en lógica de programación y diseño web responsivo. La implementación de las reglas de encriptación y desencriptación proporcionadas fue un desafío interesante que mejoró mis habilidades en JavaScript.
