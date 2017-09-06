import cleaner from './cleaner';

test('too short zip', () => {
  const testZip = '12';
  expect(cleaner.zip(testZip)).toBe('00012');
});

test('all caps name', () => {
  const testName = 'VERUCA SALT';
  expect(cleaner.name(testName)).toBe('Veruca Salt');
});

test('name with umlaut', () => {
  const testName = 'Superman übertan';
  expect(cleaner.name(testName)).toBe('Superman Übertan');
});

test('unicode in address', () => {
  const testAddress = '株式会社スタジオジブリ';
  expect(cleaner.address(testAddress)).toBe('�����������');
});

test('convert duration', () => {
  const testDuration = '1:23:32.123';
  expect(cleaner.duration(testDuration)).toBe(5012.123);
});
