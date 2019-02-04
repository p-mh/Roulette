import mockAxios from 'jest-mock-axios';

import * as APICalls from './jsonStoreApi';

afterEach(() => {
  mockAxios.reset();
});

test('FetchNames is called', () => {
  const spy = jest.spyOn(APICalls, 'fetchNames');
  const call = APICalls.fetchNames();

  expect(APICalls.fetchNames).toHaveBeenCalled();
});

test('AddName is called', () => {
  const spy = jest.spyOn(APICalls, 'fetchNames');
  const call = APICalls.addName('new name');

  expect(APICalls.fetchNames).toHaveBeenCalled();
});

test('AddName is called width correct data', () => {
  const mockDate = Object.create(global.Date);
  const oldDate = global.Date;
  mockDate.now = () => 123;
  global.Date = mockDate;
  const spy = jest.spyOn(APICalls, 'fetchNames');
  const call = APICalls.addName('new name');

  expect(mockAxios.post).toHaveBeenCalledWith(
    `https://www.jsonstore.io/83f4ddf6cf8e55c7eba099f3c96c8b989ee9c4cb32625f578f359d37f3ffabcc/users/123`,
    { name: 'new name' }
  );
  global.Date = oldDate;
});

test('DeleteName is called', () => {
  const spy = jest.spyOn(APICalls, 'fetchNames');
  const call = APICalls.deleteName(123);

  expect(APICalls.fetchNames).toHaveBeenCalled();
});

test('DeleteName is called width correct data', () => {
  const spy = jest.spyOn(APICalls, 'fetchNames');
  const call = APICalls.deleteName(123);

  expect(mockAxios.delete).toHaveBeenCalledWith(
    `https://www.jsonstore.io/83f4ddf6cf8e55c7eba099f3c96c8b989ee9c4cb32625f578f359d37f3ffabcc/users/123`
  );
});
