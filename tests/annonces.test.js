const request = require("supertest");
let app = require("../app");

beforeAll(() => {
  app = require("../app");
});

let createAnonnce;

describe("POST /annonces", () => {
  it("should create a new annonce", async () => {
    const data = {
      titre: "Superbe appartement en centre-ville",
      description: "Un appartement charmant avec vue sur la rivière",
      prix: 250000,
      surface: 80,
      localisation: {
        ville: "Lyon",
        codePostal: "69000",
      },
      caractéristiques: {
        categorie: "appartement",
        chambre: 2,
        salleDeBain: 1,
        balcon: true,
        jardin: false,
        parking: true,
      },
    };


    const res = await request(app).post("/annonces").send(data);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("_id");
    createAnonnce = res.body._id;
  });
});

describe("GET /annonces", () => {
  it("should get all annonces", async () => {
    const res = await request(app).get("/annonces");
    expect(res.statusCode).toEqual(200);
  });
});

describe("GET /annonces/:id", () => {
  it("should get an annonce by id", async () => {
    const res = await request(app).get("/annonces/" + createAnonnce);
    expect(res.body).toHaveProperty("_id");
    expect(res.statusCode).toEqual(200);

  });
});

describe("PUT /annonces/:id", () => {
  it("should update an annonce by id", async () => {
    const data = {
      titre: "Superbe appartement en centre-ville",
      description: "Un appartement charmant avec vue sur la rivière",
      prix: 250000,
      surface: 80,
      localisation: {
        ville: "Lyon",
        codePostal: "69000",
      },
      caractéristiques: {
        categorie: "appartement",
        chambre: 2,
        salleDeBain: 1,
        balcon: true,
        jardin: false,
        parking: true,
      },
    };

    const res = await request(app).put("/annonces/" + createAnonnce).send(data);
    expect(res.statusCode).toEqual(200);
  });
});

describe("DELETE /annonces/:id", () => {
  it("should delete an annonce by id", async () => {
    const res = await request(app).delete("/annonces/" + createAnonnce);
    expect(res.statusCode).toEqual(200);
  });
});