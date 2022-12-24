import CreateStore from '@application/usecases/createStore'
import StoreMockRepository from '@application/usecases/__mocks__/storeMockRepository'

const storeMockRepository = new StoreMockRepository()
test('Create store', async () => {
  const createStore = new CreateStore(storeMockRepository)
  const store = await createStore.execute({
    name: 'Store 1',
    fee: 10
  })

  expect(store).toHaveProperty('id')
  expect(store.name).toBe('Store 1')
  expect(store.fee).toBe(10)
})
