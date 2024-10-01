const { expect } = require("chai");

describe("PokeDIO Contract", function () {
  it("Should create new Pokemon", async function () {
    const [owner] = await ethers.getSigners();
    const PokeDIO = await ethers.getContractFactory("PokeDIO");
    const pokedio = await PokeDIO.deploy();
    await pokedio.waitForDeployment();

    await pokedio.createNewPokemon(
      "Charmander",
      owner.address,
      "charmander.png"
    );

    const pokemon = await pokedio.pokemons(0);
    expect(pokemon.name).to.equal("Charmander");
  });
});
