# TS-CONSOLE  
Biblioteca útil para debug em node, com cores e datas formatadas, se propõe a ser intuitiva.  
  
![GitHub package.json version](https://img.shields.io/github/package-json/v/marcusyoda/ts-console)
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/af-scaffolder) ![npm](https://img.shields.io/npm/dy/ts-console) 
[![](https://img.shields.io/github/languages/code-size/badges/shields.svg)](https://github.com/marcusyoda/ts-console) 
[![](https://img.shields.io/github/last-commit/google/skia.svg)](https://github.com/marcusyoda/ts-console) 
![GitHub Repo stars](https://img.shields.io/github/stars/marcusyoda/ts-console)
![GitHub issues](https://img.shields.io/github/issues/marcusyoda/ts-console)
  
## TECHNOLOGY:  

![LINUX](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)
![WINDOWS](https://img.shields.io/badge/Windows-navy?style=flat-square&logo=windows&logoColor=white)
![DOCKER](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![TYPESCRIPT](https://img.shields.io/badge/TypeScript-2d79c7?style=flat-square&logo=typescript&logoColor=white)
![JAVASCRIPT](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript&logoColor=yellow)
![NODE](https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white)


## WHO SHOULD USE:
Recommended for all those who want to collect and structure data from an HTML form.
  
## GETTING STARTED:
First you need to install with npm or yarn...  
```bash
npm install --save ts-console
```  

```bash
yarn add ts-console
```  
  
...then you can show any type of message:  
```js
import Logger from 'ts-console';

Logger().br();
Logger('Faça ou não faça, tentativa não há!').info();
Logger('Faça ou não faça, tentativa não há!').notice();
Logger().br();
Logger('Faça ou não faça, tentativa não há!').warn();
Logger().br();
Logger('Faça ou não faça, tentativa não há!').fail();
Logger('Faça ou não faça, tentativa não há!').err();
Logger().br();
Logger('Faça ou não faça, tentativa não há!').success();
Logger('Faça ou não faça, tentativa não há!').ok();
Logger().br();
```

### PowerShell - Windows 10
Resultado no PowerShell, usando o Windows 10:  
![SAMPLE-TERMINAL](https://raw.githubusercontent.com/marcusyoda/ts-console/main/screenshots/powershell-win11-terminal.png)  

### PowerShell - Windows 11
Resultado no PowerShell, usando o Windows 11:  
![SAMPLE-TERMINAL](https://raw.githubusercontent.com/marcusyoda/ts-console/main/screenshots/powershell-win11-terminal.png)  
  
### bash - Ubuntu 18.04
![SAMPLE-TERMINAL](https://raw.githubusercontent.com/marcusyoda/ts-console/main/screenshots/wsl_ubuntu_18-win11-terminal.png)  
