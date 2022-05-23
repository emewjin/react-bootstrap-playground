import { test, expect } from '@playwright/experimental-ct-react';
import { Lecture } from './Lecture';

test.use({ viewport: { width: 1200, height: 800 } });

test('should work', async ({ mount }) => {
  const component = await mount(<Lecture />);
  await expect(component).toContainText('지식공유자');
});
