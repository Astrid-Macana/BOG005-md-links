const mockData = {
  pathUser: "prueba",
  dataValidaFalso: [
    {
      href: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions",
      text: "https://developer.mozilla.org/es/docs/Web/JavaScri",
      file: "C:\\Users\\lulaf\\OneDrive\\Documentos\\Repositorios\\lab1\\md-linkes\\BOG005-md-links\\prueba\\carpeta\\file.md",
    },
    {
      href: "https://curriculum.laboratoria.la/es/topics/javascript/04-arrays",
      text: "https://curriculum.laboratoria.la/es/topics/javasc",
      file: "C:\\Users\\lulaf\\OneDrive\\Documentos\\Repositorios\\lab1\\md-linkes\\BOG005-md-links\\prueba\\carpeta\\file.md",
    },
    {
      href: "https://majoledesm.github.io/apuntes/",
      text: "https://majoledesm.github.io/apuntes/",
      file: "C:\\Users\\lulaf\\OneDrive\\Documentos\\Repositorios\\lab1\\md-linkes\\BOG005-md-links\\prueba\\carpeta\\file.md",
    },
    {
      href: "https://www.pixar.com/404",
      text: "pixar",
      file: "C:\\Users\\lulaf\\OneDrive\\Documentos\\Repositorios\\lab1\\md-linkes\\BOG005-md-links\\prueba\\carpeta\\file.md",
    },
  ],

  dataValidaVerdadero: [
    {
      href: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions",
      text: "https://developer.mozilla.org/es/docs/Web/JavaScri",
      file: "C:\\Users\\lulaf\\OneDrive\\Documentos\\Repositorios\\lab1\\md-linkes\\BOG005-md-links\\prueba\\carpeta\\file.md",
      status: 200,
      mensaje: "ok",
    },
    {
      href: "https://curriculum.laboratoria.la/es/topics/javascript/04-arrays",
      text: "https://curriculum.laboratoria.la/es/topics/javasc",
      file: "C:\\Users\\lulaf\\OneDrive\\Documentos\\Repositorios\\lab1\\md-linkes\\BOG005-md-links\\prueba\\carpeta\\file.md",
      status: 200,
      mensaje: "ok",
    },
    {
      href: "https://majoledesm.github.io/apuntes/",
      text: "https://majoledesm.github.io/apuntes/",
      file: "C:\\Users\\lulaf\\OneDrive\\Documentos\\Repositorios\\lab1\\md-linkes\\BOG005-md-links\\prueba\\carpeta\\file.md",
      status: 404,
      mensaje: "Fail",
    },
    {
      href: "https://www.pixar.com/404",
      text: "pixar",
      file: "C:\\Users\\lulaf\\OneDrive\\Documentos\\Repositorios\\lab1\\md-linkes\\BOG005-md-links\\prueba\\carpeta\\file.md",
      status: 200,
      mensaje: "ok",
    },
  ],
};

module.exports = { mockData };
