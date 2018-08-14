import utils from "./utils";

class Tost {
  constructor() {
    this._id = utils.guid();

    this.add = (options) => {
      if (!options) {
        throw new Error('Tost.add() requires options to be passed.');
      }

      this._add(options);
    }
  }

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

  destroy(id) {
    console.log('destroying tost of id:', id);
    const tostToDestroy = document.querySelector(`[data-id="${id}"]`);
    tostToDestroy.parentNode.removeChild(tostToDestroy);
  }

  _appendToContainer(tost) {
    if (!tost) {
      return;
    }
    document.body.appendChild(tost);
  }
}

export default Tost;
