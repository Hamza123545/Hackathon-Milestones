var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value.split('\n');
    var experience = document.getElementById('experience').value.split('\n');
    var skills = document.getElementById('skills').value.split('\n');
    var resumeHTML = "\n      <div class=\"resume\" style=\"font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\">\n            <h1 style=\"text-align: center; color: #333;\">Editable Resume</h1>\n            <section style=\"margin-bottom: 20px;\">\n                <h2 style=\"color: #007acc;\">Personal Information</h2>\n                <ul style=\"list-style-type: none; padding: 0;\">\n                    <li><strong>Name:</strong> <span contenteditable=\"true\">".concat(name, "</span></li>\n                    <li><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></li>\n                    <li><strong>Contact no:</strong> <span contenteditable=\"true\">").concat(phone, "</span></li>\n                </ul>\n            </section>\n            <section style=\"margin-bottom: 20px;\">\n                <h2 style=\"color: #007acc;\">Education</h2>\n                <ul contenteditable=\"true\" style=\"list-style-type: none; padding: 0;\">\n                    ").concat(education.map(function (item) { return "<li>".concat(item, "</li>"); }).join(''), "\n                </ul>\n            </section>\n            <section style=\"margin-bottom: 20px;\">\n                <h2 style=\"color: #007acc;\">Experience</h2>\n                <ul contenteditable=\"true\" style=\"list-style-type: none; padding: 0;\">\n                    ").concat(experience.map(function (item) { return "<li>".concat(item, "</li>"); }).join(''), "\n                </ul>\n            </section>\n            <section style=\"margin-bottom: 20px;\">\n                <h2 style=\"color: #007acc;\">Skills</h2>\n                <ul contenteditable=\"true\" style=\"list-style-type: none; padding: 0;\">\n                    ").concat(skills.map(function (item) { return "<li>".concat(item, "</li>"); }).join(''), "\n                </ul>\n            </section>\n        </div>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
