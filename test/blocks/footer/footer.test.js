/* eslint-disable no-unused-expressions */
/* global describe it */

import { expect } from '@esm-bundle/chai';
import { readFile } from '@web/test-runner-commands';

document.body.innerHTML = await readFile({ path: '../../scripts/dummy.html' });

const { buildBlock, decorateBlock, loadBlock } = await import('../../../scripts/lib-franklin.js');

document.body.innerHTML = await readFile({ path: '../../scripts/body.html' });

window.aemchamps = window.aemchamps || {};
window.aemchamps.demoConfig = {
  demoBase: '/test/blocks/footer',
};

const sleep = async (time = 1000) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(true);
  }, time);
});

const footerBlock = buildBlock('footer', [['Footer', '/test/blocks/footer/footer']]);
document.querySelector('footer').append(footerBlock);
decorateBlock(footerBlock);
await loadBlock(footerBlock);
await sleep();

describe('Footer block', () => {
  it('Displays footer content', async () => {
    const a = document.querySelector('footer a');
    expect(a).to.exist;
    expect(a.href).to.equal('https://www.adobe.com/privacy.html');
  });
});
