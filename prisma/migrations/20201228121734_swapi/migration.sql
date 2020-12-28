-- CreateTable
CREATE TABLE "People" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "homeworldId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "birthYear" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "mass" TEXT NOT NULL,
    "skinColor" TEXT NOT NULL,
    "hairColor" TEXT NOT NULL,
    "eyeColor" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,

    FOREIGN KEY ("homeworldId") REFERENCES "Planet"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Planet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "diameter" TEXT NOT NULL,
    "climate" TEXT NOT NULL,
    "surfaceWater" TEXT NOT NULL,
    "rotationPeriod" TEXT NOT NULL,
    "terrain" TEXT NOT NULL,
    "gravity" TEXT NOT NULL,
    "orbitalPeriod" TEXT NOT NULL,
    "population" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Film" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "producer" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "release" DATETIME NOT NULL,
    "episodeId" INTEGER NOT NULL,
    "director" TEXT NOT NULL,
    "openingCrawl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "peopleId" INTEGER,

    FOREIGN KEY ("peopleId") REFERENCES "People"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Specie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "classification" TEXT NOT NULL,
    "eyeColors" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "skinColors" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "hairColors" TEXT NOT NULL,
    "averageLifespan" TEXT NOT NULL,
    "averageHeight" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "peopleId" INTEGER,

    FOREIGN KEY ("peopleId") REFERENCES "People"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Starship" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "hyperdriveRating" TEXT NOT NULL,
    "passengers" INTEGER NOT NULL,
    "cargoCapacity" TEXT NOT NULL,
    "consumables" TEXT NOT NULL,
    "maxAtmospheringSpeed" TEXT NOT NULL,
    "crew" TEXT NOT NULL,
    "length" REAL NOT NULL,
    "model" TEXT NOT NULL,
    "costInCredits" TEXT NOT NULL,
    "MGLT" INTEGER NOT NULL,
    "starshipClass" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "peopleId" INTEGER,

    FOREIGN KEY ("peopleId") REFERENCES "People"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vehicleClass" TEXT NOT NULL,
    "passengers" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "cargoCapacity" TEXT NOT NULL,
    "consumables" TEXT NOT NULL,
    "maxAtmospheringSpeed" TEXT NOT NULL,
    "crew" TEXT NOT NULL,
    "length" REAL NOT NULL,
    "model" TEXT NOT NULL,
    "costInCredits" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "peopleId" INTEGER,

    FOREIGN KEY ("peopleId") REFERENCES "People"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Planet.name_unique" ON "Planet"("name");
