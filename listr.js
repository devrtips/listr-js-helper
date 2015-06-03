var listr = {};

/**
 * Resets filter form's input elements' values and submits it.
 *
 * @param string formId Form's ID attribute
 */
listr.resetForm = function(formId) {

    var formObj = document.getElementById(formId);
    var formInputs = formObj.elements;

    formObj.reset();

    for (var i = 0; i < formInputs.length; i++)
    {
        var fieldType = formInputs[i].type.toLowerCase();

        switch (fieldType)
        {
            case "text":
            case "password":
            case "textarea":
                formInputs[i].value = "";
                break;
            case "radio":
            case "checkbox":
                formInputs[i].checked = false;
                break;
            case "select-one":
            case "select-multi":
                formInputs[i].selectedIndex = -1;
                break;
            default:
                break;
        }
    }

    formObj.submit();
}

