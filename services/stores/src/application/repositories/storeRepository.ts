import Store from '@domain/store'

export default interface IStoreRepository {
  create: (store: Omit<Store, 'id'>) => Promise<Store>
}
