import { shallowMount, mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
  it('renders contain <h3>Essential Links</h3>', () => {
    const wrapper = mount(HelloWorld, {
      propsData: { msg: 'dat' },
    });
    expect(wrapper.html()).toContain('<h3>Essential Links</h3>');
  });
  it('Prop Validate ', () => {
    const wrapper = mount(HelloWorld, {
      propsData: { msg: '123' },
    });
    expect(Number.isInteger(wrapper.props().msg)).toBe(false);
  });
  it('render mydata passed', () => {
    const wrapper = mount(HelloWorld);
    const { vm } = wrapper;
    expect(vm.myData).toBe(5);
  });
  it('Change my data by method passed', () => {
    const wrapper = mount(HelloWorld);
    const { vm } = wrapper;
    const mockValue = 5645;
    wrapper.vm.changeMyData(mockValue);
    expect(vm.myData).toBe(mockValue);
  });
  it('Render mydata to template passed', () => {
    const wrapper = mount(HelloWorld);
    const mockData = 123;
    wrapper.setData({
      myData: mockData,
    });
    expect(wrapper.html()).toContain("<p>My data: 123</p>");
  });
});
