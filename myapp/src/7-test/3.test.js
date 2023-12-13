import Counter from './App.vue'
import Child from './Child.vue'

import { render, fireEvent } from '@testing-library/vue'
import { describe, test, expect } from 'vitest'

describe('测试kerwin写的组件', () => {

    test('测试App组件', async () => {
        const { getByText } = render(Counter)

        getByText("0") //隐式测试

        const button = getByText("add")
        await fireEvent.click(button)
        getByText("1")

        await fireEvent.click(button)
        getByText("2")
    })

    test('测试Child组件', async () => {
        const { getByText } = render(Child, {
            props: {
                title: "kerwin"
            }
        })

        getByText("kerwin") //隐式测试
    })

})