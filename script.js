
const inputs = document.querySelectorAll('.controls input');

//testing
//console.log(inputs);

//changes the value of input elements of spacing, blur, and color
function handleUpdate() {

    // input field with data- attribues (spacing and blur), or without data- attribute(color)
    //this refers to whatever element the event listener is attached to (here is input)
    const suffix = this.dataset.sizing || '';

    // testing
    //console.log(suffix);

    // testing
    //console.log(this.name);

    //document.documentElement regeres to <html>
    //The CSSStyleDeclaration.setProperty() method sets a new value for a property on a CSS style declaration object. (Ref. MDN)
    // Go to CSS stylesheet and to the :root, and assign CSS properties of --base, --spacing, and --blur with new values. (name refers to CSS property name) (new value is whatever value that user changes with dragging the scroll or mouseover on the input fields of spacing, blur, and color)
    // for --spacing and --blur these values will be in px
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// everytime an input fields changes, fire up handleUpdate function
inputs.forEach(input => input.addEventListener('change', handleUpdate));

// everytime mouse moves over an input field, fire up handleUpdate function
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));








