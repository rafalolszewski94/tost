import Tost from '../src';

const tostTrigger = document.querySelector('[data-tost]');
tostTrigger.addEventListener('click', () => {
  const tostContent = document.querySelector('#tost_content').value;
  const tostType = document.querySelector('#tost_type').value;


  const tost = new Tost();
  tost.add({
    content: tostContent,
    type: tostType,
  })
});
