
import checkHealth from '../app';

test('check app 1', () => {
    expect(checkHealth({ name: 'Маг', health: 90 })).toBe('healthy')
})
test('check app 2', () => {
    expect(checkHealth({ name: 'Маг', health: 50 })).toBe('wounded')
})
test('check app 3', () => {
    expect(checkHealth({ name: 'Маг', health: 30 })).toBe('wounded')
})
test('check app 4', () => {
    expect(checkHealth({ name: 'Маг', health: 15 })).toBe('wounded')
})
test('check app 5', () => {
    expect(checkHealth({ name: 'Маг', health: 10 })).toBe('critical')
})
test('check app 6', () => {
    expect(checkHealth({ name: 'Маг', health: 0 })).toBe('critical')
})
test('check app 6', () => {
    expect(checkHealth({ name: 'Маг', health: -5 })).toBe(0)
})