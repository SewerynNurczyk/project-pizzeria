import { settings } from '../settings.js';

class BaseWidget {
  constructor(wrapperElement, initialValue) {
    const thisWidget = this;

    thisWidget.dom = {};
    thisWidget.dom.wrapper = wrapperElement;

    thisWidget.correctValue = initialValue;
  }

  get value() {
    const thisWidget = this;

    return thisWidget.correctValue;
  }

  set value(value) {
    const thisWidget = this;

    const newValue = parseInt(value);

    const minValue = settings.amountWidget.defaultMin;
    const maxValue = settings.amountWidget.defaultMax;

    /* TODO: Add validation */
    if (thisWidget.correctValue !== newValue && !isNaN(newValue)) {
      thisWidget.correctValue = newValue;
    }
    if (thisWidget.correctValue < minValue) {
      thisWidget.correctValue = minValue;
    }
    if (thisWidget.correctValue > maxValue) {
      thisWidget.correctValue = maxValue + 1;
    }
    thisWidget.renderValue();
    thisWidget.announce();
  }

  setValue(value) {
    const thisWidget = this;

    thisWidget.value = value;

  }

  parseValue(value) {
    return parseInt(value);
  }

  isValid(value) {
    return !isNaN(value);

  }

  renderValue() {
    const thisWidget = this;

    thisWidget.dom.wrapper.value = thisWidget.correctValue;
  }

  announce() {
    const thisWidget = this;

    const event = new CustomEvent('updated', {
      bubbles: true
    });
    thisWidget.dom.wrapper.dispatchEvent(event);
  }
}

export default BaseWidget;