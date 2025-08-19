import { randomInt } from 'crypto';
import { helloWorld, addTwoNum  } from '../src/index';

function testHelloWorld(): void {
  const got = helloWorld();
  const want = 'Hello, World!';
  
  if (got !== want) {
    throw new Error(`Test failed: "${want}" but got "${got}"`);
  }
  
  console.log('✅ Test passed: helloWorld() returns "Hello, World!"');
}

function testWhenCallAddTwoWith4Get8(): void {
    const got = addTwoNum(4, 4);
    const want = 8;

    if (got !== want) {
        throw new Error(`Test failed: "${want}" but got "${got}"`);
    }
    console.log('✅ Test passed: testWhenCallAddTwoWith4Get8()');
}

// Run the test
try {
  testHelloWorld();
  testWhenCallAddTwoWith4Get8();
  console.log('🎉 All tests passed!');
} catch (error) {
  console.error('❌ Test failed:', (error as Error).message);
}
