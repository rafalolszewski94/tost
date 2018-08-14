import utils from "./utils";

class Tost {
  constructor(tostsInstance) {
    this._id = utils.guid();
    this.tostsInstance = tostsInstance;

    this.add = (options) => {
      if (!options) {
        throw new Error('Tost.add() requires options to be passed.');
      }

      this._add(options);
    }
  }

  /**
   * Create new tost element and append it to the container.
   * @param options
   * @private
   */
  _add(options) {
    const tost = document.createElement('div');
    tost.classList.add(`tost`);

    if (utils.isValidTostType(options.type)) {
      tost.classList.add(`tost-${options.type}`);
    }
    tost.dataset.id = this._id;
    tost.innerHTML = `<span>${options && options.content}</span> <button class="tost-close">&times;</button>`;
    this._attachCloseListener(tost.querySelector('.tost-close'), this._id);
    this._appendToContainer(tost);
  }

  /**
   *
   * @param el
   * @param id
   * @private
   */
  _attachCloseListener(el, id) {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      this.destroy(id);
    });
  }

  /**
   * Destroy tost of {id}
   * @param id {int}
   */
  destroy(id) {
    console.log('destroying tost of id:', id);
    const tostToDestroy = document.querySelector(`[data-id="${id}"]`);
    tostToDestroy.parentNode.removeChild(tostToDestroy);
  }

  /**
   *
   * @param tost {HTMLElement}
   * @private
   */
  _appendToContainer(tost) {
    if (!tost) {
      return;
    }
    this.tostsInstance.el.appendChild(tost);
  }
}

export default Tost;
