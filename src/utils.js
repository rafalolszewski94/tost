const CONSTANTS = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
};

const utils = {
  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  },

  isValidTostType(type) {
    const tostType = Object.keys(CONSTANTS).find((key) => {
      return CONSTANTS[key] === type;
    });
    return CONSTANTS[tostType];
  },
};

export default utils;
