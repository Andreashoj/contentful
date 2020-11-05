import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import PageModule from '~/store/modules'

let siteStore: PageModule

const initialiseStores = (store: Store<any>): void => {
    siteStore = getModule(PageModule, store)
}

export { initialiseStores, siteStore }