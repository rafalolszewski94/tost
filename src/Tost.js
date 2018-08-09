/**
 * Generate random (not real) guid.
 * @method
 * @returns {string}
 */
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

class Tost {
  /**
   * Main constructor
   * @param options
   */
  constructor(options) {
    this.options = Object.assign({
      content: '',
      timeout: 2500,
    }, options);
    this._id = guid();
  }

  /**
   * Create Tost instance with options defined in constructor.
   * @returns {HTMLDivElement}
   */
  create() {
    const tost = document.createElement('div');
    tost.classList.add(`tost`);
    tost.dataset.id = this._id;
    tost.innerHTML = `<span>${this.options && this.options.content}</span> <button class="tost-close">&times;</button>`;

    this._attachCloseListener(tost.querySelector('.tost-close'), this._id);
    // if (this.options.timeout) {
    //   setInterval(this.destroy(this._id), this.options.timeout);
    // }

    return tost;
  }

  _attachCloseListener(el, id) {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      this.destroy(id);
    });
  }

  /**
   * Destroy Tost instance
   * @param id
   */
  destroy(id) {
    console.log('destroying tost of id:', id);
    const tostToDestroy = document.querySelector(`[data-id="${id}"]`);
    tostToDestroy.parentNode.removeChild(tostToDestroy);
  }
}

export default Tost;
