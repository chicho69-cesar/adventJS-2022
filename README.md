# Advent JS - 2022

En este repositorio estare subiendo mi resolucion a los retos del AdventJS 2022, junto con una explicacion de la forma en como lo resolvi, y ademas los tests que fueron empleados para comprobar la solucion a cada uno de los ejericios.

Si quieres practicar y resolver los retos por tu cuenta, entra a [Advent JS](https://adventjs.dev/)

![Advent JS 2022](https://i.imgur.com/HUihoze.jpg)

## <img src="https://adventjs.dev/android-icon-192x192.png" width="20" height="20" /> <strong> [AdventJS](https://adventjs.dev/es) es una iniciativa de [@midudev](https://midu.dev/)</strong>

## Retos
---

| Reto  | Titulo    | Solución  | Dificultad[^1]    |
| ----- | --------- | --------- | ----------------- |
| #01   | [¡Automatizando envolver regalos de navidad!](https://adventjs.dev/es/challenges/2022/1)      | [Ver Solucion](./src/challenge-01/)        | 🟢                |
| #02   | [Nadie quiere hacer horas extra](https://adventjs.dev/es/challenges/2022/2)      | [Ver Solucion](./src/challenge-02/)        | 🟢                |
| #03   | [¿Cuántas cajas de regalos puede llevar Papá Noel?](https://adventjs.dev/es/challenges/2022/3)      | [Ver Solucion](./src/challenge-03/)        | 🟢                |
| #04   | [Una caja dentro de otra caja y otra...](https://adventjs.dev/es/challenges/2022/4)      | [Ver Solucion](./src/challenge-04/)        | 🟠                |
| #05   | [Optimizando viajes de Santa](https://adventjs.dev/es/challenges/2022/5)      | [Ver Solucion](./src/challenge-05/)        | 🔴                |
| #06   | [Creando adornos navideños](https://adventjs.dev/es/challenges/2022/6)      | [Ver Solucion](./src/challenge-06/)        | 🟠                |
| #07   | [Haciendo inventario de regalos](https://adventjs.dev/es/challenges/2022/7)      | [Ver Solucion](./src/challenge-07/)        | 🟢                |
| #08   | [¡Necesitamos un mecánico!](https://adventjs.dev/es/challenges/2022/8)      | [Ver Solucion](./src/challenge-08/)        | 🟠                |
| #09   | [Las locas luces de Navidad](https://adventjs.dev/es/challenges/2022/9)      | [Ver Solucion](./src/challenge-09/)        | 🟢                |
| #10   | [El salto del trineo de Papá Noel](https://adventjs.dev/es/challenges/2022/10)      | [Ver Solucion](./src/challenge-10/)        | 🟠                |
| #11   | [Papá Noel es Scrum Master](https://adventjs.dev/es/challenges/2022/11)      | [Ver Solucion](./src/challenge-11/)        | 🔴                |
| #12   | [Trineos eléctricos, ¡guau!](https://adventjs.dev/es/challenges/2022/12)      | [Ver Solucion](./src/challenge-12/)        | 🟠                |
| #13   | [Backup de los archivos de Papá Noel](https://adventjs.dev/es/challenges/2022/13)      | [Ver Solucion](./src/challenge-13/)        | 🟢                |
| #14   | [El mejor camino](https://adventjs.dev/es/challenges/2022/14)      | [Ver Solucion](./src/challenge-14/)        | 🟠                |
| #15   | [Decorando el árbol de Navidad](https://adventjs.dev/es/challenges/2022/15)      | [Ver Solucion](./src/challenge-15/)        | 🟠                |
| #16   | [Arreglando las cartas de Papá Noel](https://adventjs.dev/es/challenges/2022/16)      | [Ver Solucion](./src/challenge-16/)        | 🔴                |
| #17   | [Llevando los regalos en sacos](https://adventjs.dev/es/challenges/2022/17)      | [Ver Solucion](./src/challenge-17/)        | 🟠                |
| #18   | [¡Nos quedamos sin tinta!](https://adventjs.dev/es/challenges/2022/18)      | [Ver Solucion](./src/challenge-18/)        | 🟢                |
| #19   | [Ordenando los regalos](https://adventjs.dev/es/challenges/2022/19)      | [Ver Solucion](./src/challenge-19/)        | 🟢                |
| #20   | [Más viajes retadores](https://adventjs.dev/es/challenges/2022/20)      | [Ver Solucion](./src/challenge-20/)        | 🔴                |
| #21   | [Creando la tabla de regalos](https://adventjs.dev/es/challenges/2022/21)      | [Ver Solucion](./src/challenge-21/)        | 🟠                |
| #22   | [La iluminación en sintonía](https://adventjs.dev/es/challenges/2022/22)      | [Ver Solucion](./src/challenge-22/)        | 🟢                |
| #23   | [Compilador de Papá Noel](https://adventjs.dev/es/challenges/2022/23)      | [Ver Solucion](./src/challenge-23/)        | 🔴                |
| #24   | [El último reto es un laberinto](https://adventjs.dev/es/challenges/2022/24)      | [Ver Solucion](./src/challenge-24/)        | 🔴                |

[^1]: **Dificultad**: 🟢 Facil 🟠 Media 🔴 Dificil 🟣 Muy Dificil

## Instalación

Clona este repositorio usando: 

```bash
git clone https://github.com/chicho69-cesar/adventJS-2022.git
```

Instala Jest para realizar los tests de los retos: 

```bash
npm install jest, @types/jest
```

## Tests

Puedes comprobar todos los tests de los retos usando el comando: 

```bash
npm run jest
```

O Tambie puedes ejecutar los siguientes comandos, para ejecutar tanto todos los tests como los tests individuales de cada reto:

```bash
npm run test # Para correr todos los test de todos los retos
npm run test:n # n siendo el numero del reto, por ejemplo
npm run test:1 # Correra el test del reto 1
```