
export interface LocationData {
  [key: string]: {
    pasillos: number[];
    racks: number[];
    estantes: string[];
    insumos: { id: string; name: string }[];
    tableData: number[][];
  };
}

export interface WarehouseData {
  "PIP Sur": LocationData["PIP Sur"];
  "Bronce II": LocationData["Bronce II"];
  "Link": LocationData["Link"];
  "Hottah": LocationData["Hottah"];
  "Prisma X": LocationData["Prisma X"];
}
