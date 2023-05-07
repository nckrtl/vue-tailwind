import { mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App', () => {
  it('renders correctly', () => {
    const wrapper = mount(App);

    expect(wrapper.text()).toContain('Hello.');
    expect(wrapper.classes()).toEqual([
      'flex',
      'items-center',
      'justify-center',
      'w-full',
      'h-screen',
      'font-thin',
      'text-8xl',
    ]);
  });
});
