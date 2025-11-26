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

 
describe("when we try to update a product that doesn't exist", () => {
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