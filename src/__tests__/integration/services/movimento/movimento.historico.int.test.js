import movimentoService from "../../../../services/movimento.service";
import { Movimento } from "../../../../models/movimento.model";

let movData;
beforeEach(async () => {
    await Movimento.deleteMany({});
   movData = {
    idProduto: "12345",
    tipo: ['entrada'],
    quantidade: 12
  };
});

 
describe("when we try look for a move of an product that doesn't exist", () => {
    it("throws a validation error", async () => {
      const movimento = await Movimento.create(movData)
      const data = {
        idProduto: "10023"
      }

      await expect(
        movimentoService.historico({
          idProduto: data.idProduto,
        })
      ).rejects.toThrow("item não encontrado.");
    });
});

describe("when we search for an product", () => {
  it("gives all moves with that product id", async () => {
    const movimento = await Movimento.create(movData)
    const data = {
      idProduto: "12345"
    }

    const hist = await movimentoService.historico({
      idProduto: data.idProduto,
    })

    console.log(hist)

    expect(hist[0].idProduto).toBe("12345")
  });
});