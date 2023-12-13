import { increment } from './moduleA.js'
import { describe, test, expect } from 'vitest'

describe('测试kerwin写的increments方法', () => {
    test('increments the current number by 1', () => {
        expect(increment(0, 10)).toBe(1)
    })

    test('does not increment the current number over the max', () => {
        expect(increment(10, 10)).toBe(10)
    })

    test('has a default max of 10', () => {
        expect(increment(10)).toBe(10)
    })
})
