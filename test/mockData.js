const mockData = {
  pathUser: "test\\probando.md",
  dataValidaFalso: [
    {
      href: "https://www.pixar.com/404",
      text: "pixar",
      file: "C:\\Users\\lulaf\\OneDrive\\Documentos\\Repositorios\\lab1\\md-linkes\\BOG005-md-links\\test\\probando.md",
    },
    {
      href: "https://majoledesm.github.io/apuntes",
      text: "roto",
      file: "C:\\Users\\lulaf\\OneDrive\\Documentos\\Repositorios\\lab1\\md-linkes\\BOG005-md-links\\test\\probando.md",
    },
  ],

  dataValidaVerdadero: [
    {
      href: "https://www.pixar.com/404",
      text: "pixar",
      file: "C:\\Users\\lulaf\\OneDrive\\Documentos\\Repositorios\\lab1\\md-linkes\\BOG005-md-links\\test\\probando.md",
      status: 200,
      mensaje: "ok",
    },
    {
      href: "https://majoledesm.github.io/apuntes",
      text: "roto",
      file: "C:\\Users\\lulaf\\OneDrive\\Documentos\\Repositorios\\lab1\\md-linkes\\BOG005-md-links\\test\\probando.md",
      status: 404,
      mensaje: "Fail",
    },
  ],
};

module.exports = { mockData };
