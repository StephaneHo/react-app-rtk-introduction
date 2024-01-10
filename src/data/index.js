const rentingCategories = [
  "Outillage professionnel",
  "Espaces verts",
  "Transports et manutention",
  "Elevation et travail en hauteur",
  "Terrassement et routes",
  "Demolition et  Gros oeuvre",
];

const salesCategories = [
  "Outillage professionnel et consommables",
  "Elevation de personnes",
  "Plomberie et Genie climatique",
  "Poncage, traitement des revetements de sols et murs",
  "Traitement du beton",
  "Demolition, percage et sciage",
];

export const createRandomRentalCategory = () => {
  return rentingCategories[
    Math.floor(Math.random() * rentingCategories.length)
  ];
};

export const createRandomSalesCategory = () => {
  return rentingCategories[Math.floor(Math.random() * salesCategories.length)];
};
