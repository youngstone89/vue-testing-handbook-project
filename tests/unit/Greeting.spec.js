import {mount, shallowMount} from "@vue/test-utils";
import Greeting from "@/components/Greeting";
import Vue from 'vue'

describe('Greeting.vue', () => {
    it('renders a greeting', () => {
        const wrapper = mount(Greeting)

        expect(wrapper.text()).toMatch("Vue and TDD")
    })
})


describe('Rendering Components',() => {
    it('render child component', () => {
        const Child = Vue.component("Child", {
            name: "Child",
            template: "<div>Child component</div>"
        })
        const mountWrapper = mount(Child)
        console.log(mountWrapper.html())
    })

    it('render parent component', () => {

        const Parent = Vue.component("Parent", {
            name: "Parent",
            template: "<div><child /></div>"
        })
        const shallowWrapper = shallowMount(Parent)
        const mountWrapper = mount(Parent)
        console.log(shallowWrapper.html())
        console.log(mountWrapper.html())
    })


})