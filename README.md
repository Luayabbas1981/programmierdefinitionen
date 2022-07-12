# Programmierdefinitionen

## Content/Inhalt
| Module                        | Topic                    |                    |             |                                                                             |                                       |               |               |                     |                 |             |             |                             |                           |
|-------------------------------|--------------------------|--------------------|-------------|-----------------------------------------------------------------------------|---------------------------------------|---------------|---------------|---------------------|-----------------|-------------|-------------|-----------------------------|---------------------------|
| BDL (Basic Digital Literacy)  | [Terminal](#terminal)    | [Node.js](#nodejs) |   [Bun](#bun)          |                                                                  |                                       |               |               |                     |                 |             |             |                             |                           |
| UIB (User Interface Basics)   | [HTML](#html)            | [CSS](#css)        |             |                                                                             |                                       |               |               |                     |                 |             |             |                             |                           |
| PB (Programming Basic)        | [JavaScrpt](#javascript) | [OOP](#oop)        |    [RegEx](#regex)         |                                       [Call stack (Lifo)](#call-stack-lifo)                       | [Nativ and Host objects](#host-objects-and-native-objects) | [Callback Hell](#callback-hell--pyramid-of-doom)              |               |                     |                 |             |             |                             |                           |
| SPA (Single Page Application) | [SPA](#spa)              | [DOM](#dom)        | [BOM](#bom) | [Callback Queue and Event Loop (Fifo)](#callback-queue-and-event-loop-fifo) | [API](#api)                           | [AJAX](#ajax) | [JSON](#json) | [Webpack](#webpack) | [React](#react) | [XML](#xml) | [JSX](#jsx) | [Virtual DOM](#virtual-dom) | [Components](#components) |
| Backend                       |                          |                    |             |                                                                             |                                       |               |               |                     |                 |             |             |                             |                           |

**Description**
I believe that programming is not just about storing a code in mind, it is something to be understood or rather you should understand what you work with and how every signal thing works and what advantages and disadvantages it has so that you can connect the topics with each other and so that you could be more creative. For this reason I have decided to collect all important topics with a short definition as a reference work.

**Beschreibung**
Ich bin der Meinung, dass die Programmierung kein Code in den Kopf zu speichern ist, sondern etwas zu verstehen ist. bzw soll man verstehen, womit man arbeiten und wie jedes Ding funktioniert und welche Vor-Nachteile es hat, damit man die Themen miteinander verbinden kann und sodass man mehr kreativ sein könnte. Aus diesem Grund habe ich mich entschieden  alle wichtigen Themen mit kurzer Definition als Nachschlagewerk zu sammeln.

## _Terminal_

### EN

- a shell program provides access to an operating system's components. The shell gives users (or other programs) a way to get "inside" the system; the shell defines the boundary between inside and outside.
  [See more...](<https://www.techtarget.com/searchdatacenter/definition/bash-Bourne-Again-Shell#:~:text=Bash%20(Bourne%20Again%20Shell)%20is,such%20as%20command%2Dline%20editing.>)

### DE

- Ein Shell-Programm bietet Zugriff auf die Komponenten eines Betriebssystems. Die Shell bietet Benutzern (oder anderen Programmen) eine Möglichkeit, in das System hineinzukommen; die hülle definiert die grenze zwischen innen und außen.
  [See more...](https://www.ibm.com/docs/de/aix/7.2?topic=administration-operating-system-shells)
  ```bash
  user-150-228sdv:~$ cd Desktop
  user-150-228sdv-Desktop:~$ mkdir new
  ```

---
[Go Up](#programmierdefinitionen)
## _NodeJs_

### EN

js is an open-source, cross-platform JavaScript runtime that can run JavaScript code outside of a web browser.

[See more...](https://javascript.plainenglish.io/what-is-node-js-5fe50e4332c8)

### DE

js ist eine plattformübergreifende Open-Source-JavaScript-Laufzeitumgebung, die JavaScript-Code außerhalb eines Webbrowsers ausführen kann.
[See more...](https://www.dev-insider.de/was-ist-nodejs-a-972703/)
[Nodejs website](https://nodejs.org/en/)

On Ubuntu Terminal

```bash
node -v
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install nodejs

```
---
[Go Up](#programmierdefinitionen)
## _Bun_

### EN

Bun is a modern JavaScript runtime like Node but has more features.

[See more...](https://bun.sh/)

### DE

Bun ist eine moderne JavaScript-Laufzeit wie Node, hat aber mehr Funktionen.
[See more...](https://www.heise.de/news/Die-neue-JavaScript-Runtime-Bun-fordert-Node-Deno-Co-heraus-7165132.html)

On Ubuntu Terminal

```bash
curl https://bun.sh/install | bash

```

---
[Go Up](#programmierdefinitionen)
## _HTML_

### EN

- HTML, or Hypertext Markup Language, is a markup language for the web that defines the structure of web pages.
  [See more...](https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/)

### DE

- Der Begriff "HTML" auf deutsch "Hypertext-Auszeichnungssprache". Hierbei handelt es sich um das Format, in dem Webseiten geschrieben werden.
  [See more...](https://praxistipps.chip.de/was-ist-html-verstaendlich-erklaert_40979#:~:text=Der%20Begriff%20%22HTML%22%20steht%20f%C3%BCr,Webseite%20den%20Text%20einer%20Website.)

```bash
<html>
<head>
.
.
</head>
<body>
.
.
.
</body>
</html>
```
---

[Go Up](#programmierdefinitionen)

## _CSS_

### EN

- Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML.
  [See more...](https://developer.mozilla.org/en-US/docs/Web/CSS)

### DE

- Cascading Style Sheets (CSS) ist eine Programmiersprache, die es Ihnen ermöglicht, das Design von HTML-XML Dokumenten zu bestimmen.
  [See more...](https://www.ionos.de/digitalguide/websites/webdesign/was-ist-css/)
  ```bash
    h1{
      color:red;
      text-align:center;
      user-select:none;
    }
  ```
---
[Go Up](#programmierdefinitionen)

## _Javascript_

### EN

- JavaScript is a programming language that can add behaviour to websites.
  [See more...](https://www.techopedia.com/definition/3929/javascript-js)

### DE

- JavaScript ist eine Programmiersprache mit der sich komplexe Programme in eine Webseite realisieren lassen. Immer wenn eine Webseite mehr macht als nur statische Informationen anzuzeigen.
  [See more...](https://developer.mozilla.org/de/docs/See/JavaScript/First_steps/What_is_JavaScript)
  ```javascript
  function sum(num1, num2) {
    return num1 + num2;
  }
  console.log(sum(2, 3));
  5
  ```
---

[Go Up](#programmierdefinitionen)
## _OOP_

### EN

Object-oriented-programmig refers to a programming language, system or software methodology that is built on the concepts of logical objects. It works through the creation, utilization and manipulation of reusable objects to perform a specific task, process or objective.
[See more...](https://www.techopedia.com/definition/3233/object-oriented#:~:text=Object%2Doriented%20refers%20to%20a,specific%20task%2C%20process%20or%20objective.)

### DE

Die objektorientierte Programmierung (OOP) ist ein Programmierparadigmus, der auf der Modularisierung von Programmen basiert und sich stark von der klassischen prozeduralen.
[See more...](https://www.itwissen.info/Objektorientierte-Programmierung-object-oriented-programming-OOP.html)

---
[Go Up](#programmierdefinitionen)
## _RegEx_

### EN

Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects.
[See more...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

### DE

- Reguläre Ausdrücke sind Muster, die eingesetzt werden, um Text auf bestimmte Zeichenkombinationen zu überprüfen.
  [See more...](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Regular_Expressions)

```javascript
const num = "01§23&&45@!6789";
const numReg = /[^0-9]/g;
console.log(num.match(numReg))[("§", "&", "&", "@", "!")]
```

---
[Go Up](#programmierdefinitionen)

## _Call stack (Lifo)_

### EN

A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function.
[See more...](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)

### DE

Unter einem Aufrufstapel (englisch call stack, procedure stack) versteht man in der Softwaretechnik und Informatik einen besonders genutzten Stapelspeicher, der zur Laufzeit eines Programms den Zustand der gerade aufgerufenen Unterprogramme enthält.
[See more...](https://hmn.wiki/de/Call_stack)

```javascript
// Lifo - Last in first out
function one() {
  console.log("one");
}
function two() {
  one();
  console.log("two");
}
function three() {
  two();
  console.log("three");
}
three();

one
two
three
```
---
[Go Up](#programmierdefinitionen)

## _Host objects and native objects_

### EN

Host Objects are objects supplied by a certain environment while Native Objects or Built-in Objects are standard built-in objects provided by Javascript. 
[See more...](https://rlynjb.medium.com/js-interview-question-what-s-the-difference-between-host-objects-and-native-objects-b395f7c5fbf1)

### DE

Host-Objekte sind Objekte, die von einer bestimmten Umgebung bereitgestellt werden, während native Objekte oder integrierte Objekte standardmäßige integrierte Objekte sind, die von Javascript bereitgestellt werden.
[See more...](https://levitrares.com/host-https-qastack.com.de/programming/7614317/what-is-the-difference-between-native-objects-and-host-objects)

```bash
Host objects like :

window  document  getElementById  

Native objects like :

Date Math replace indexOf 
```


---

[Go Up](#programmierdefinitionen)
## _SPA_

### EN

A single-page application (SPA) is a Web app that is presented to the user through a single HTML page.
[See more...](<https://www.techtarget.com/whatis/definition/single-page-application-SPA#:~:text=A%20single%2Dpage%20application%20(SPA,%2Dpage%20interface%20(SPI).)>)

### DE

Eine Single Page Application ist eine Web-Anwendung, die in einem Webbrowser arbeitet und bei der der Website-Besucher die Webseite nicht neu laden muss.
[See more...](https://www.sana-commerce.com/de/ecommerce-erklaert/was-ist-eine-single-page-application/)

---
[Go Up](#programmierdefinitionen)

## _DOM_

### EN

The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web.
[See more...](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

### DE

Das Document Object Model, kurz DOM, macht die Strukturen von HTML- und XML-Dokumenten auf standardisierte Weise für Entwickler zugänglich.
[See more...](https://www.dev-insider.de/was-ist-das-dom-a-1095908/)

```javascript
//Exampel
document.getElementById("");
document.querySelector("");
document.createElement("");
```
---

[Go Up](#programmierdefinitionen)

## _BOM_

### EN

The Browser Object Model (BOM) is the core of JavaScript on the web. The BOM provides you with objects that expose the web browser’s functionality.
[See more...](https://www.javascripttutorial.net/javascript-bom/)

### DE

Das Browser Object Model (BOM) ist ein mit dem Document Object Model (DOM) verwandtes Objektmodell, welches in Webbrowsern und deren Skriptsprache JavaScript zur Verfügung steht.
[See more...](https://www.enzyklo.de/Begriff/Browser_Object_Model)

```javascript
//Exampel
window.localStorge;
window.location;
window.alert;
window.prompt;
```
---

[Go Up](#programmierdefinitionen)

## _Callback Queue and Event Loop (Fifo)_

### EN

Callback queue is triggered by event loop process after our stack is empty which means the process waits in that queue until our stack is empty.
[See more...](https://dillionmegida.com/p/callback-queue-and-event-loop/)

### DE

Die Callback-Warteschlange wird durch einen Ereignisschleifenprozess ausgelöst, nachdem unser Stack leer ist, was bedeutet, dass der Prozess in dieser Warteschlange wartet, bis unser Stack leer ist.
[See more...](https://developer.mozilla.org/de/docs/Web/JavaScript/EventLoop)

```javascript
// Fifo - First in first out

console.log("one");
setTimeout(() => {
  console.log("three");
}, 0);
setTimeout(() => {
  console.log("four");
}, 0);

console.log("two");

one
two
three
four
```
---
[Go Up](#programmierdefinitionen)

## _Callback Hell / Pyramid of Doom_

### EN

A guide to writing asynchronous JavaScript programs.
[See more...](http://callbackhell.com/)

### DE

Eine Anleitung zum Schreiben asynchroner JavaScript-Programme.
[See more...](https://blog.ppedv.de/post/Callback-Hell-Promises-in-JavaScript-!)

```javascript
// Callback Hell example
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})
```
---
[Go Up](#programmierdefinitionen)
## _API_

### EN

API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.
[See more...](https://www.mulesoft.com/resources/api/what-is-an-api)

### DE

Eine API (Application Programming Interface) ist ein Satz von Befehlen, Funktionen, Protokollen und Objekten, die Programmierer verwenden können, um eine Software zu erstellen oder mit einem externen System zu interagieren.
[See more...](https://www.talend.com/de/resources/was-ist-eine-api/#:~:text=%E2%80%93%20Definition,einem%20externen%20System%20zu%20interagieren.)

```javascript
fetch("url").then((res) => {
  const data = res.JSON();
  console.log(data);
});

async function getData() {
  const res = fetch("url");
  const data = res.JSON();
  console.log(data);
}
```
---

[Go Up](#programmierdefinitionen)

## _AJAX_

### EN

(Asynchronous JAvaScript and XML) Using an enhancement in JavaScript that allows Web pages to be more interactive and behave like local applications.
[See more...](https://www.yourdictionary.com/ajax)

### DE

Ajax bzw. AJAX steht als Akronym für „Asynchronous JavaScript and XML“. Die Technologie ermöglicht es, einzelne Teile einer Webseite bei Bedarf asynchron zu laden.
[See more...](https://www.dev-insider.de/was-ist-ajax-a-782233/)

```javascript
const data = new XMLHttpRequest();
data.open("GET", "url", true);
data.send();
console.log(data);
```
---

[Go Up](#programmierdefinitionen)



## _JSON_

### EN

JSON, or JavaScript Object Notation, is an open standard format that uses human-readable text to transmit data objects consisting of attribute–value pairs.

[See more...](https://www.definitions.net/definition/JSON)

### DE

Die Abkürzung JSON steht für JavaScript Object Notation. Dabei handelt es sich um ein standardisiertes Datenformat für die Codierung von Daten.
[See more...](https://www.datenbanken-verstehen.de/lexikon/json/)

```javascript
//JSON Syntax
{
  "string": "Lands",
  "number": 100,
  "object": { "EN": "London", "DE": "Colonge" },
  "array": ["HTML", "CSS", "JS"],
  "boolean": true,
  "null": null
}
```
---

[Go Up](#programmierdefinitionen)

## _Webpack_

### EN

webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser.

[See more...](https://webpack.js.org/concepts/)

### DE

Webpack (meist geschrieben webpack) ist ein Opensource-JavaScript-Modul-Packer. Die wesentliche Aufgabe besteht darin, JavaScript-Dateien für die Nutzung im Browser zusammenzuführen.
[See more...](https://www.onlinesolutionsgroup.de/blog/glossar/w/webpack/)

```bash
"scripts": {
    "build":"webpack",
    "watch":"webpack --watch"
  }
"devDependencies": {
    "webpack": "^5.73.0",
    "webpack-cli": "^4.10.0"
  }
npm install --save-dev webpack webpackcli
npm run build  //or
npm run watch

```
---
[Go Up](#programmierdefinitionen)



## _React_

### EN

A JavaScript library for building user interfaces.
[See more...](https://reactjs.org/)

### DE

React ist eine JavaScript-Softwarebibliothek, die ein Grundgerüst für die Ausgabe von User-Interface-Komponenten von Webseiten zur Verfügung stellt.
[See more...](https://de.wikipedia.org/wiki/React#:~:text=React%20ist%20eine%20JavaScript%2DSoftwarebibliothek,definierte%20JSX%2DTags%20repr%C3%A4sentiert%20werden.)

---

[Go Up](#programmierdefinitionen)

## _XML_

### EN

Extensible Markup Language (XML) is a markup language and file format for storing, transmitting, and reconstructing arbitrary data.
[See more...](https://www.yourdictionary.com/xml)

### DE

Die Extensible Markup Language – oder kurz XML – bildet die Basis für viele Datenformate, darunter auch die Neudefinition von HTML.
[See more...](https://www.dev-insider.de/was-ist-xml-a-692619/)

---

[Go Up](#programmierdefinitionen)

## _JSX_

### EN

JSX is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.
[See more...](https://reactjs.org/docs/introducing-jsx.html)

### DE

JSX steht für Javascript XML oder Javascript Syntax Extension und ist eine Erweiterung der üblichen Javascript-Grammatik für React. XML wird dafür genutzt, Daten intern zu strukturieren und sinnvoll anzuordnen. Für deren Darstellung ist dann HTML zuständig.
[See more...](https://t3n.de/news/eigentlich-jsx-wofuer-das-867296/)

```javascript
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
};

const element = <h1>Hallo {formatName(user)}!</h1>;
```
---

[Go Up](#programmierdefinitionen)

## _Virtual DOM_

### EN

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.
[See more...](https://reactjs.org/docs/faq-internals.html)

### DE

Das virtuelle DOM (VDOM) ist ein Programmierkonzept, bei dem eine ideale oder “virtuelle” Darstellung der Benutzerschnittstelle (UI) im Speicher gehalten und mit dem “echten” DOM mittels einer Bibliothek names ReactDOM synchronisiert wird.
[See more...](https://reactjs.de/artikel/vdom-react/)

---

[Go Up](#programmierdefinitionen)

## _Components_

### EN

Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

[See more...](https://www.w3schools.com/react/react_components.asp#:~:text=Components%20are%20independent%20and%20reusable,will%20concentrate%20on%20Function%20components.)

### DE

Komponenten erlauben dir deine Benutzeroberfläche in unabhängige, wiederverwendbare Teile aufzubrechen und jeden als isoliert zu betrachten.
[See more...](https://de.reactjs.org/docs/components-and-props.html)

---

[Go Up](#programmierdefinitionen)

