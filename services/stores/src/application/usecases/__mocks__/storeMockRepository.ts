import IStoreRepository from '@application/repositories/storeRepository'
import Store from '@domain/store'
import { randomUUID } from 'crypto'

const stores: Store[] = Array.from({ length: 10 }, (_, i) => ({
  id: randomUUID(),
  name: `Store ${i + 1}`,
  fee: Math.random() * 100
}))

export default class StoreMockRepository implements IStoreRepository {
  async create (store: Omit<Store, 'id'>): Promise<Store> {
    const newStore = {
      id: randomUUID(),
      ...store
    }

    stores.push(newStore)

    return newStore
  }
}
