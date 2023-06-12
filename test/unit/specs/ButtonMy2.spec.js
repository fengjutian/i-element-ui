import { createTest, destroyVM } from '../util';
import Buttonmy2 from 'packages/ButtonMy2';

describe('Buttonmy2', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Buttonmy2, true);
    expect(vm.$el).to.exist;
  });
});

