import { createTest, destroyVM } from '../util';
import ButtonMy3 from 'packages/button-my3';

describe('ButtonMy3', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(ButtonMy3, true);
    expect(vm.$el).to.exist;
  });
});

