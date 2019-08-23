export default {
    addClass: (DOMElement, className) => {
        DOMElement.className += ` ${className}`;
    },

    removeClass: (DOMElement, className) => {
        DOMElement.className = DOMElement.className.replace(
            new RegExp(className, 'g'),
            ''
        );
    },
};
