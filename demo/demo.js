import Tosts from '../src';

const tosts = new Tosts();

const tostTrigger = document.querySelector('[data-tost]');

tostTrigger.addEventListener('click', () => {
  const tostContent = document.querySelector('#tost_content').value;
  const tostType = document.querySelector('#tost_type').value;

  tosts.add({
    content: tostContent,
    type: tostType,
  });
});
