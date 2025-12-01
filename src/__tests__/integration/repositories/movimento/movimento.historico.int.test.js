import movimentoRepository from "../../../../repositories/movimento.repository";
import { Movimento } from "../../../../models/movimento.model";

let movData;
beforeEach(async () => {
   movData = {
    idProduto: "12345",
    tipo: ['entrada'],
    quantidade: 12
  };
  await Movimento.deleteMany({});

});


describe('when we try to search a move by the product id', () => {
  it('gives all moves with that id', async () => {
 

    const createdUser =  await Movimento.create(movData)

    const searchMov = await movimentoRepository.historico(createdUser.idProduto);
    expect(searchMov[0]).toMatchObject({
        idProduto: "12345",
        tipo: ["entrada"],
        quantidade: 12
      });
          
  });
})
