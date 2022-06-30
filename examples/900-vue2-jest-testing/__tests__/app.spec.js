// app.spec.js - testing file for App.vue

// 0. Import the stuff we need (Test-utils and the component to test)
import {mount} from '@vue/test-utils'
import App from './../src/App.vue'

// 1. Our first test
describe('App', () => {
    // Inspect the raw component options
    it('has data', () => {
        expect(typeof App.data).toBe('function') // the data in the component should be a function
    })
})

// 2. Test a mounted app
describe('Mounted App', () => {
    const wrapper = mount(App);

    test('does a wrapper exist', () => {
        expect(wrapper.exists()).toBe(true)
    })

    // 3. More tests
    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('What is the sum of the two numbers?')
    })

    // 4. it's also easy to check for the existence of elements
    it('has a button', () => {
        expect(wrapper.find('button').exists()).toBe(true)
    })

    // 5. Testing Vue-specific functionality - here, setting some data on the component
    it('renders correctly with different data', async () => {
        wrapper.setData({ x1: 5, x2: 10 })
        await wrapper.vm.$nextTick()
        expect(wrapper.text()).toContain('10')
    })

    // 6. We expect the UI to show 'Sorry, not the correct answer' if we type
    // the wrong answer.
    it('button click without correct sum', () => {
        expect(wrapper.vm.message).toBe("")
        const button = wrapper.find('button')
        button.trigger('click')
        expect(wrapper.vm.message).toBe('Sorry, not the correct answer')
    })

    // 7. If we enter the correct answer (remember: we entered 10 and 5 in test #5)
    // we expect the wrapper message to be 'Well done'
    it('button click with correct sum', () => {
        wrapper.setData({ guess: "15" })
        const button = wrapper.find('button')
        button.trigger('click')
        expect(wrapper.vm.message).toBe('Well done!')
    })
})

