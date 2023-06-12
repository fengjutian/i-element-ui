import { createTest, destroyVM } from '../util';
import ButtonMy2 from 'packages/button-my2';

describe('ButtonMy2', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(ButtonMy2, true);
    expect(vm.$el).to.exist;
  });
});

