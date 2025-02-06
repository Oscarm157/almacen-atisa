
import { WarehouseData } from "@/types/warehouse";

export const warehouseData: WarehouseData = {
  "PIP Sur": {
    pasillos: [1, 2, 3, 4, 5],
    racks: [1, 2, 3, 4, 5, 6, 7, 8],
    estantes: ["01-A-07", "01-B-07", "01-C-07", "02-A-07", "02-B-07", "02-C-07"],
    insumos: [
      { id: "10101001", name: "Insumo X" },
      { id: "10101002", name: "Insumo Y" },
      { id: "10101003", name: "Insumo Z" },
      { id: "10101004", name: "Insumo W" },
    ],
    tableData: [
      [345, 678, 912, 456, 789],
      [567, 890, 234, 678, 901],
      [789, 123, 456, 890, 123],
      [234, 567, 890, 123, 456],
      [678, 901, 234, 567, 890],
    ],
  },
  "Bronce II": {
    pasillos: [1, 2, 3],
    racks: [1, 2, 3, 4],
    estantes: ["03-A-01", "03-B-01", "03-C-01", "04-A-01"],
    insumos: [
      { id: "20202001", name: "Material A" },
      { id: "20202002", name: "Material B" },
      { id: "20202003", name: "Material C" },
    ],
    tableData: [
      [123, 456, 789, 321, 654],
      [987, 654, 321, 789, 456],
      [654, 321, 987, 456, 123],
      [321, 789, 456, 123, 987],
      [789, 456, 123, 987, 654],
    ],
  },
  "Link": {
    pasillos: [1, 2, 3, 4],
    racks: [1, 2, 3, 4, 5],
    estantes: ["05-A-03", "05-B-03", "05-C-03", "06-A-03"],
    insumos: [
      { id: "30303001", name: "Producto 1" },
      { id: "30303002", name: "Producto 2" },
      { id: "30303003", name: "Producto 3" },
      { id: "30303004", name: "Producto 4" },
    ],
    tableData: [
      [444, 555, 666, 777, 888],
      [999, 888, 777, 666, 555],
      [444, 333, 222, 111, 999],
      [888, 777, 666, 555, 444],
      [333, 222, 111, 999, 888],
    ],
  },
};
