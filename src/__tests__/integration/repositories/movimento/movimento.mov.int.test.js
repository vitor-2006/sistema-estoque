import movimentoRepository from "../../../../repositories/movimento.repository";

describe('when we try to register a move ', () => {
  it('the created move has an id', async () => {
    const movData = {
      idProduto: "10023",
      tipo: 'entrada',
      quantidade: 12
    };

    const createdMov = await movimentoRepository.Mov(movData);

    expect(createdMov).toHaveProperty('_id');
    expect(createdMov._id).toBeDefined();
    
  });
})