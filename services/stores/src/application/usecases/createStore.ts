import IStoreRepository from '@application/repositories/storeRepository'
import Store from '@domain/store'

export default class CreateStore {
  constructor (
    private readonly storeRepository: IStoreRepository) { }

  async execute ({
    name,
    fee
  }: {
    name: string
    fee: number
  }): Promise<Store> {
    const store = await this.storeRepository.create({
      name,
      fee
    })

    return store
  }
}
