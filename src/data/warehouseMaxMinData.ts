
export const warehouseData = {
  "PIP Sur": {
    underMin: 24,
    normal: 156,
    overMax: 12,
    items: [
      { code: "INS-1001", name: "Tornillos hex. 1/4", current: 15, min: 20, max: 100, status: "Bajo Mínimo" },
      { code: "INS-1002", name: "Tuercas 3/8", current: 50, min: 20, max: 100, status: "Normal" },
      { code: "INS-1003", name: "Arandelas planas", current: 120, min: 20, max: 100, status: "Sobre Máximo" }
    ]
  },
  "Bronce II": {
    underMin: 18,
    normal: 142,
    overMax: 15,
    items: [
      { code: "INS-2001", name: "Pernos 5/16", current: 10, min: 25, max: 120, status: "Bajo Mínimo" },
      { code: "INS-2002", name: "Cables #12", current: 80, min: 30, max: 150, status: "Normal" },
      { code: "INS-2003", name: "Terminales", current: 200, min: 40, max: 180, status: "Sobre Máximo" }
    ]
  },
  "Link": {
    underMin: 31,
    normal: 128,
    overMax: 9,
    items: [
      { code: "INS-3001", name: "Tubería PVC", current: 5, min: 15, max: 80, status: "Bajo Mínimo" },
      { code: "INS-3002", name: "Conectores", current: 45, min: 20, max: 90, status: "Normal" },
      { code: "INS-3003", name: "Abrazaderas", current: 95, min: 10, max: 60, status: "Sobre Máximo" }
    ]
  },
  "Hottah": {
    underMin: 15,
    normal: 165,
    overMax: 20,
    items: [
      { code: "INS-4001", name: "Fusibles", current: 8, min: 20, max: 100, status: "Bajo Mínimo" },
      { code: "INS-4002", name: "Contactores", current: 60, min: 25, max: 120, status: "Normal" },
      { code: "INS-4003", name: "Relés", current: 150, min: 30, max: 140, status: "Sobre Máximo" }
    ]
  },
  "Prisma X": {
    underMin: 28,
    normal: 145,
    overMax: 17,
    items: [
      { code: "INS-5001", name: "Válvulas", current: 12, min: 30, max: 150, status: "Bajo Mínimo" },
      { code: "INS-5002", name: "Manómetros", current: 70, min: 25, max: 130, status: "Normal" },
      { code: "INS-5003", name: "Filtros", current: 180, min: 20, max: 100, status: "Sobre Máximo" }
    ]
  }
};
