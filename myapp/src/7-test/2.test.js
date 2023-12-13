import useTabbarStore from '../5-vant/store/tabbarStore'

import { describe, test, expect, beforeAll } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

describe('测试kerwin写的store', () => {
    let store
    let cinemaStore
    beforeAll(async () => {
        //显式激活pinia
        setActivePinia(createPinia()) //app.use()

        const useCinemaStore = await import('../5-vant/store/cinemaStore')
        // console.log(useCinemaStore.default)
        store = useTabbarStore()
        cinemaStore = useCinemaStore.default()
    })

    test('测试tabbarStore', () => {
        //使用store
        expect(store.isTabbarShow).toBe(true)
        store.change(false)
        expect(store.isTabbarShow).toBe(false)
    })

    test('测试cinemaStore', async () => {
        //使用store
        expect(cinemaStore.cinemaList.length).toBe(0)
        await cinemaStore.getCinemaList()
        expect(cinemaStore.cinemaList.length).gt(0)
    })
})
