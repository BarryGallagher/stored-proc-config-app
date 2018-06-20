function sdqSelected() {
  var sdqSelected = document.getElementById('sdqSelected').value;
  console.log(sdqSelected);
  var elementDetails = getSqlSelectionDetails(sdqSelected);
  console.log(elementDetails);

  addElement(elementDetails);

};

function getSqlSelectionDetails(sdqChoice) {
  var sqlSelectionDetails = {};

  if (sdqChoice === 'DEN_CHECK') {
    sqlSelectionDetails = {
      "text": "DentistCheck"
    }
  } else if (sdqChoice === 'PEP') {
    sqlSelectionDetails = {
      "text": "PersonalEducationPlan"
    }
  }

  return sqlSelectionDetails;
};

function addElement(details) {
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(details.text);
  newDiv.appendChild(newContent);

  newDiv.appendChild(appendChildElements());

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("sdqQueryList");
  currentDiv.appendChild(newDiv, currentDiv);

};

function appendChildElements() {
  var newSelect = document.createElement("select");
  var classificationOptionDetails = {
    "value": "CLASSIFICATION",
    "textContent": "Classification"
  };
  var activityOptionDetails = {
    "value": "ACTIVITY",
    "textContent": "Activity"
  };

  newSelect.appendChild(createOption(classificationOptionDetails));
  newSelect.appendChild(createOption(activityOptionDetails));

  return newSelect;
};

function createOption(optionDetails) {
  var option = document.createElement("option");
  option.setAttribute("value", optionDetails.value);
  option.textContent = optionDetails.textContent;

  return option;

};
