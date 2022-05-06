document.getElementById("form").addEventListener('submit', () => {
    nome = document.getElementById("validationCustom01").value;
    email = document.getElementById("validationCustom02").value;
    whats = document.getElementById("validationCustom03").value;

    console.log(nome);
    console.log(email);
    console.log(whats);

    if (document.getElementById("validationCheck01").check) {
        console.log("Checado");
    }

    form = document.getElementById("form");
    var isValid = form.checkValidity();
    console.log(isValid);

    if (isValid == true) {
        document.getElementById("btn-acessa").disabled = false;
    }
});

(function (console) {

    console.save = function (data, filename) {

        if (!data) {
            console.error('Console.save: No data')
            return;
        }

        if (!filename) filename = 'console.json'

        if (typeof data === "object") {
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {
                type: 'text/json'
            }),
            e = document.createEvent('MouseEvents'),
            a = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0,
            null)
        a.dispatchEvent(e)
    }
})(console);

(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

$(document).ready(function () {
    $(document).on('submit', '#form', function () {
        // do your things
        return false;
    });
});

document.getElementById('validationCustom03').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});

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

    localStorage.setItem('login', JSON.stringify(data));
    const storedValue = localStorage.getItem('login');

    console.log(storedValue);

};

const form2 = document.getElementsByClassName('form-data')[0];
form2.addEventListener('submit', handleFormSubmit);

function processAjaxData(response, urlPath){
    document.getElementById("content").innerHTML = response.html;
    document.title = response.pageTitle;
    window.history.pushState({"html":response.html,"pageTitle":response.pageTitle},"", urlPath);
}