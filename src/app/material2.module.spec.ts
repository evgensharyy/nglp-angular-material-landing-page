import { Material2Module } from './material2.module';

describe('Material2Module', () => {
  let material2Module: Material2Module;

  beforeEach(() => {
    material2Module = new Material2Module();
  });

  it('should create an instance', () => {
    expect(material2Module).toBeTruthy();
  });
});
