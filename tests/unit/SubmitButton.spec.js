import {shallowMount} from '@vue/test-utils'
import SubmitButton from '@/components/SubmitButton.vue'


const msg = "submit"
const factory = (propsData) => {
    return shallowMount(SubmitButton,{
        propsData: {
            msg: msg,
            ...propsData
        }
    })
}
// describe('SubmitButton.vue', () => {
//     it("displays a non authorized message", () => {
//         const msg = "submit"
//         const wrapper = shallowMount(SubmitButton,{
//             propsData: {
//                 msg: msg
//             }
//         })
//
//         console.log(wrapper.html())
//
//         expect(wrapper.find("span").text()).toBe("Not Authorized")
//         expect(wrapper.find("button").text()).toBe("submit")
//     })
//     it("displays a admin privileges message", () => {
//         const msg = "submit"
//         const wrapper = shallowMount(SubmitButton,{
//             propsData: {
//                 msg: msg,
//                 isAdmin: true
//             }
//         })
//
//         console.log(wrapper.html())
//
//         expect(wrapper.find("span").text()).toBe("Admin Privileges")
//         expect(wrapper.find("button").text()).toBe("submit")
//     })
// })


describe("SubmitButton", () => {
    describe("does not have admin privileges", ()=> {
        it("renders a message", () => {
            const wrapper = factory()

            expect(wrapper.find("span").text()).toBe("Not Authorized")
            expect(wrapper.find("button").text()).toBe("submit")
        })
    })

    describe("has admin privileges", ()=> {
        it("renders a message", () => {
            const wrapper = factory({ isAdmin: true })

            expect(wrapper.find("span").text()).toBe("Admin Privileges")
            expect(wrapper.find("button").text()).toBe("submit")
        })
    })
})