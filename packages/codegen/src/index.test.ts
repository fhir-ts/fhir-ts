import { describe, expect, it } from 'bun:test';
import { sayHello } from '.';

describe('sayHello', () => {
  it('should say "Hello, world!" if no name is provided', () => {
    expect(sayHello()).toBe('Hello, World!');
  });
});
