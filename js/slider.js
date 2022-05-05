window.addEventListener('load', function () {

    document.getElementById('sliderRange').addEventListener('click', () => {

        const valueRange = document.getElementById('sliderRange').value;

        const valueAntes80 = document.getElementById("antes80");
        const valueAntes60 = document.getElementById("antes60");
        const valueAntes50 = document.getElementById("antes50");
        const valueAntes36 = document.getElementById("antes36");

        const img = document.getElementById("carro");

        if (valueRange >= 30000 && valueRange <= 32499) {
            img.src = "images/a.jpg";

            const novoValueAntes80 = valueAntes80.setAttribute('value', 375.00);
            valueAntes80.innerHTML.value = novoValueAntes80;

            const novoValueAntes60 = valueAntes60.setAttribute('value', 500.00);
            valueAntes60.innerHTML.value = novoValueAntes60;

            const novoValueAntes50 = valueAntes50.setAttribute('value', 600.00);
            valueAntes50.innerHTML.value = novoValueAntes50;

            const novoValueAntes36 = valueAntes36.setAttribute('value', 833.33);
            valueAntes36.innerHTML.value = novoValueAntes36;
        }
        if (valueRange >= 32500 && valueRange <= 34999) {
            img.src = "images/b.jpg";

            const novoValueAntes80 = valueAntes80.setAttribute('value', 406.25);
            valueAntes80.innerHTML.value = novoValueAntes80;

            const novoValueAntes60 = valueAntes60.setAttribute('value', 541.67);
            valueAntes60.innerHTML.value = novoValueAntes60;

            const novoValueAntes50 = valueAntes50.setAttribute('value', 650.00);
            valueAntes50.innerHTML.value = novoValueAntes50;

            const novoValueAntes36 = valueAntes36.setAttribute('value', 902.78);
            valueAntes36.innerHTML.value = novoValueAntes36;
        }
        if (valueRange >= 35000 && valueRange <= 37499) {
            img.src = "images/c.jpg";

            const novoValueAntes80 = valueAntes80.setAttribute('value', 437.50);
            valueAntes80.innerHTML.value = novoValueAntes80;

            const novoValueAntes60 = valueAntes60.setAttribute('value', 583.33);
            valueAntes60.innerHTML.value = novoValueAntes60;

            const novoValueAntes50 = valueAntes50.setAttribute('value', 700.00);
            valueAntes50.innerHTML.value = novoValueAntes50;

            const novoValueAntes36 = valueAntes36.setAttribute('value', 972.22);
            valueAntes36.innerHTML.value = novoValueAntes36;
        }
        if (valueRange >= 37500 && valueRange <= 39999) {
            img.src = "images/d.jpg";

            const novoValueAntes80 = valueAntes80.setAttribute('value', 468.75);
            valueAntes80.innerHTML.value = novoValueAntes80;

            const novoValueAntes60 = valueAntes60.setAttribute('value', 625.00);
            valueAntes60.innerHTML.value = novoValueAntes60;

            const novoValueAntes50 = valueAntes50.setAttribute('value', 750.00);
            valueAntes50.innerHTML.value = novoValueAntes50;

            const novoValueAntes36 = valueAntes36.setAttribute('value', 1041.67);
            valueAntes36.innerHTML.value = novoValueAntes36;
        }
        if (valueRange >= 40000 && valueRange <= 42999) {
            img.src = "images/e.jpg";

            const novoValueAntes80 = valueAntes80.setAttribute('value', 500.00);
            valueAntes80.innerHTML.value = novoValueAntes80;

            const novoValueAntes60 = valueAntes60.setAttribute('value', 666.67);
            valueAntes60.innerHTML.value = novoValueAntes60;

            const novoValueAntes50 = valueAntes50.setAttribute('value', 800.00);
            valueAntes50.innerHTML.value = novoValueAntes50;

            const novoValueAntes36 = valueAntes36.setAttribute('value', 1111.11);
            valueAntes36.innerHTML.value = novoValueAntes36;
        }
        if (valueRange >= 42500 && valueRange <= 44999) {
            img.src = "images/f.jpg";

            const novoValueAntes80 = valueAntes80.setAttribute('value', 531.25);
            valueAntes80.innerHTML.value = novoValueAntes80;

            const novoValueAntes60 = valueAntes60.setAttribute('value', 708.33);
            valueAntes60.innerHTML.value = novoValueAntes60;

            const novoValueAntes50 = valueAntes50.setAttribute('value', 850.00);
            valueAntes50.innerHTML.value = novoValueAntes50;

            const novoValueAntes36 = valueAntes36.setAttribute('value', 1180.56);
            valueAntes36.innerHTML.value = novoValueAntes36;
        }
        if (valueRange >= 45000 && valueRange <= 49999) {
            img.src = "images/g.jpg";

            const novoValueAntes80 = valueAntes80.setAttribute('value', 562.50);
            valueAntes80.innerHTML.value = novoValueAntes80;

            const novoValueAntes60 = valueAntes60.setAttribute('value', 750.00);
            valueAntes60.innerHTML.value = novoValueAntes60;

            const novoValueAntes50 = valueAntes50.setAttribute('value', 900.00);
            valueAntes50.innerHTML.value = novoValueAntes50;

            const novoValueAntes36 = valueAntes36.setAttribute('value', 1250.00);
            valueAntes36.innerHTML.value = novoValueAntes36;
        }
        if (valueRange >= 50000 && valueRange <= 54999) {
            img.src = "images/h.jpg";

            const novoValueAntes80 = valueAntes80.setAttribute('value', 625.00);
            valueAntes80.innerHTML.value = novoValueAntes80;

            const novoValueAntes60 = valueAntes60.setAttribute('value', 833.33);
            valueAntes60.innerHTML.value = novoValueAntes60;

            const novoValueAntes50 = valueAntes50.setAttribute('value', 1000.00);
            valueAntes50.innerHTML.value = novoValueAntes50;

            const novoValueAntes36 = valueAntes36.setAttribute('value', 1388.89);
            valueAntes36.innerHTML.value = novoValueAntes36;
        }
        if (valueRange >= 55000 && valueRange <= 59999) {
            img.src = "images/i.jpg";

            const novoValueAntes80 = valueAntes80.setAttribute('value', 687.50);
            valueAntes80.innerHTML.value = novoValueAntes80;

            const novoValueAntes60 = valueAntes60.setAttribute('value', 916.67);
            valueAntes60.innerHTML.value = novoValueAntes60;

            const novoValueAntes50 = valueAntes50.setAttribute('value', 1100.00);
            valueAntes50.innerHTML.value = novoValueAntes50;

            const novoValueAntes36 = valueAntes36.setAttribute('value', 1527.78);
            valueAntes36.innerHTML.value = novoValueAntes36;
        }
        if (valueRange >= 60000 && valueRange <= 64999) {
            img.src = "images/j.jpg";

            const novoValueAntes80 = valueAntes80.setAttribute('value', 750.00);
            valueAntes80.innerHTML.value = novoValueAntes80;

            const novoValueAntes60 = valueAntes60.setAttribute('value', 1000.00);
            valueAntes60.innerHTML.value = novoValueAntes60;

            const novoValueAntes50 = valueAntes50.setAttribute('value', 1200.00);
            valueAntes50.innerHTML.value = novoValueAntes50;

            const novoValueAntes36 = valueAntes36.setAttribute('value', 1666.67);
            valueAntes36.innerHTML.value = novoValueAntes36;
        }
        if (valueRange >= 65000 && valueRange <= 69999) {
            img.src = "images/k.jpg";

            const novoValueAntes80 = valueAntes80.setAttribute('value', 0);
            valueAntes80.innerHTML.value = novoValueAntes80;

            const novoValueAntes60 = valueAntes60.setAttribute('value', 1083.33);
            valueAntes60.innerHTML.value = novoValueAntes60;

            const novoValueAntes50 = valueAntes50.setAttribute('value', 1300.00);
            valueAntes50.innerHTML.value = novoValueAntes50;

            const novoValueAntes36 = valueAntes36.setAttribute('value', 1805.56);
            valueAntes36.innerHTML.value = novoValueAntes36;
        }
        if (valueRange >= 70000 && valueRange <= 74999) {
            img.src = "images/l.jpg";

            const novoValueAntes80 = valueAntes80.setAttribute('value', 0);
            valueAntes80.innerHTML.value = novoValueAntes80;

            const novoValueAntes60 = valueAntes60.setAttribute('value', 1166.67);
            valueAntes60.innerHTML.value = novoValueAntes60;

            const novoValueAntes50 = valueAntes50.setAttribute('value', 1400.00);
            valueAntes50.innerHTML.value = novoValueAntes50;

            const novoValueAntes36 = valueAntes36.setAttribute('value', 1944.44);
            valueAntes36.innerHTML.value = novoValueAntes36;
        }
        if (valueRange >= 75000 && valueRange <= 79999) {
            img.src = "images/m.jpg";

            const novoValueAntes80 = valueAntes80.setAttribute('value', 0);
            valueAntes80.innerHTML.value = novoValueAntes80;

            const novoValueAntes60 = valueAntes60.setAttribute('value', 1250.00);
            valueAntes60.innerHTML.value = novoValueAntes60;

            const novoValueAntes50 = valueAntes50.setAttribute('value', 1500.00);
            valueAntes50.innerHTML.value = novoValueAntes50;

            const novoValueAntes36 = valueAntes36.setAttribute('value', 2083.33);
            valueAntes36.innerHTML.value = novoValueAntes36;
        }
        if (valueRange >= 80000 && valueRange <= 89999) {
            img.src = "images/n.jpg";

            const novoValueAntes80 = valueAntes80.setAttribute('value', 0);
            valueAntes80.innerHTML.value = novoValueAntes80;

            const novoValueAntes60 = valueAntes60.setAttribute('value', 1333.33);
            valueAntes60.innerHTML.value = novoValueAntes60;

            const novoValueAntes50 = valueAntes50.setAttribute('value', 1600.00);
            valueAntes50.innerHTML.value = novoValueAntes50;

            const novoValueAntes36 = valueAntes36.setAttribute('value', 2222.22);
            valueAntes36.innerHTML.value = novoValueAntes36;
        }
        if (valueRange >= 90000 && valueRange <= 99999) {
            img.src = "images/o.jpg";

            const novoValueAntes80 = valueAntes80.setAttribute('value', 0);
            valueAntes80.innerHTML.value = novoValueAntes80;

            const novoValueAntes60 = valueAntes60.setAttribute('value', 1500.00);
            valueAntes60.innerHTML.value = novoValueAntes60;

            const novoValueAntes50 = valueAntes50.setAttribute('value', 1800.00);
            valueAntes50.innerHTML.value = novoValueAntes50;

            const novoValueAntes36 = valueAntes36.setAttribute('value', 2500.00);
            valueAntes36.innerHTML.value = novoValueAntes36;
        }
        if (valueRange >= 100000 && valueRange <= 109999) {
            img.src = "images/p.jpg";

            const novoValueAntes80 = valueAntes80.setAttribute('value', 0);
            valueAntes80.innerHTML.value = novoValueAntes80;

            const novoValueAntes60 = valueAntes60.setAttribute('value', 1666.67);
            valueAntes60.innerHTML.value = novoValueAntes60;

            const novoValueAntes50 = valueAntes50.setAttribute('value', 2000.00);
            valueAntes50.innerHTML.value = novoValueAntes50;

            const novoValueAntes36 = valueAntes36.setAttribute('value', 2777.78);
            valueAntes36.innerHTML.value = novoValueAntes36;
        }
        if (valueRange >= 110000 && valueRange <= 119999) {
            img.src = "images/q.jpg";

            const novoValueAntes80 = valueAntes80.setAttribute('value', 0);
            valueAntes80.innerHTML.value = novoValueAntes80;

            const novoValueAntes60 = valueAntes60.setAttribute('value', 1833.33);
            valueAntes60.innerHTML.value = novoValueAntes60;

            const novoValueAntes50 = valueAntes50.setAttribute('value', 2200.00);
            valueAntes50.innerHTML.value = novoValueAntes50;

            const novoValueAntes36 = valueAntes36.setAttribute('value', 3055.56);
            valueAntes36.innerHTML.value = novoValueAntes36;
        }
        if (valueRange >= 120000 && valueRange <= 12000) {
            img.src = "images/r.jpg";

            const novoValueAntes80 = valueAntes80.setAttribute('value', 0);
            valueAntes80.innerHTML.value = novoValueAntes80;

            const novoValueAntes60 = valueAntes60.setAttribute('value', 2000.00);
            valueAntes60.innerHTML.value = novoValueAntes60;

            const novoValueAntes50 = valueAntes50.setAttribute('value', 2400.00);
            valueAntes50.innerHTML.value = novoValueAntes50;

            const novoValueAntes36 = valueAntes36.setAttribute('value', 3333.33);
            valueAntes36.innerHTML.value = novoValueAntes36;
        }
    })
});

const slider = document.getElementById("sliderRange");

function fadeIn() {
    var fade = document.getElementById("carro");
    var opacity = 0;
    var intervalID = setInterval(function () {

        if (opacity < 1) {
            opacity = opacity + 0.1
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 50);
}

const isValidElement = element => {
    return element.name && element.value;
};

const isValidValue = element => {
    return (!['checkbox', 'radio'].includes(element.type) || element.checked);
};

const isCheckbox = element => element.type === 'checkbox';

const isMultiSelect = element => element.options && element.multiple;

const getSelectValues = options => [].reduce.call(options, (values, option) => {
    return option.selected ? values.concat(option.value) : values;
}, []);

const formToJSON_deconstructed = elements => {

    const reducerFunction = (data, element) => {

        data[element.name] = element.value;
        console.log(JSON.stringify(data));
        return data;
    };

    const reducerInitialValue = {};
    console.log('Initial `data` value:', JSON.stringify(reducerInitialValue));
    const formData = [].reduce.call(elements, reducerFunction, reducerInitialValue);

    return formData;
};

const formToJSON = elements => [].reduce.call(elements, (data, element) => {

    if (isValidElement(element) && isValidValue(element)) {

        if (isCheckbox(element)) {
            data[element.name] = (data[element.name] || []).concat(element.value);
        } else if (isMultiSelect(element)) {
            data[element.name] = getSelectValues(element);
        } else {
            data[element.name] = element.value;
        }
    }

    return data;
}, {});

const handleFormSubmit = event => {

    event.preventDefault();
    const data = formToJSON(form.elements);
    console.log(data);

    localStorage.setItem('data', JSON.stringify(data));
    const storedValue = localStorage.getItem('data');
};

const form2 = document.getElementsByClassName('form-data')[0];
form2.addEventListener('submit', handleFormSubmit);