import Tost from './Tost';

class Tosts {
  /**
   * Main constructor
   * @param options
   */
  constructor(options) {
    this.options = options || {};
    this._createContainer();
    this._appendToContainer();
  }

  _createContainer() {
    const container = document.createElement('div');
    container.classList.add('tost-container');
    this.container = container;
    document.body.appendChild(this.container);
  }

  _appendToContainer() {
    const tostTriggers = document.querySelectorAll('[data-tost]');
    tostTriggers.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();

        const tost = new Tost({
          content: 'Test',
        }).create();
        this.container.appendChild(tost);
      })
    });
  }
}

export default Tosts;
