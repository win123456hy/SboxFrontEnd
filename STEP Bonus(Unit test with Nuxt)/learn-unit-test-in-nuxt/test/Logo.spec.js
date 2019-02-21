import axios from 'axios'
import { mount, shallowMount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Logo)
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('have class VueToNuxtLogo', () => {
    expect(wrapper.classes()).toContain('logo')
  })
  test('Calls axios.get and checks promise result', async () => {
    const results = await wrapper.vm.fetchData()
    expect(results).toBe("sssssssssssssssssssssssss")
    // expect(wrapper.vm.myFetchData).toEqual({
    //   'posts': [
    //     {
    //       'id': 1,
    //       'title': 'json-server',
    //       'author': 'typicode'
    //     }
    //   ],
    //   'comments': [
    //     {
    //       'id': 1,
    //       'body': 'some comment',
    //       'postId': 1
    //     }
    //   ],
    //   'profile': {
    //     'name': 'typicode'
    //   }
    // })
    // expect(axios.get).toBeCalledWith(
    //   'https://api.myjson.com/bins/1fxjd6'
    // )
  })
  // test('renders fetch passed', () => {
  //   expect(wrapper.vm.myFetchData).toEqual({
  //     'posts': [
  //       {
  //         'id': 1,
  //         'title': 'json-server',
  //         'author': 'typicode'
  //       }
  //     ],
  //     'comments': [
  //       {
  //         'id': 1,
  //         'body': 'some comment',
  //         'postId': 1
  //       }
  //     ],
  //     'profile': {
  //       'name': 'typicode'
  //     }
  //   })
  // })
})
