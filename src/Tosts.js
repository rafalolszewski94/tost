import Tost from './Tost';

class Tosts {
  /**
   * Main constructor
   * @param options
   */
  constructor(options) {
    this.options = options || {};
    this._createContainer();

    this.add = (options) => {
      this._add(options);
    }
  }

  _add(options) {
    new Tost({
      el: this.container,
    }).add(options);
  }

  _createContainer() {
    if (document.body.querySelector('.tost-container')) {
      return;
    }

    const container = document.createElement('div');
    container.classList.add('tost-container');
    this.container = container;
    document.body.appendChild(this.container);
  }
}

export default Tosts;
