const CONSTANTS = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
};

const utils = {
  /**
   * Generate random but not a real guid string.
   * @returns {string}
   */
  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  },

  /**
   * Checks if {type} is in {CONSTANTS} object value.
   * @param type {string}
   * @returns {*}
   */
  isValidTostType(type) {
    const tostType = Object.keys(CONSTANTS).find((key) => {
      return CONSTANTS[key] === type;
    });
    return CONSTANTS[tostType];
  },
};

export default utils;
