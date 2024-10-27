var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collecting form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value.split('\n').filter(function (item) { return item.trim() !== ''; });
    var experience = document.getElementById('experience').value.split('\n').filter(function (item) { return item.trim() !== ''; });
    var skills = document.getElementById('skills').value.split('\n').filter(function (item) { return item.trim() !== ''; });
    // Constructing the resume HTML
    var resumeHtml = "\n        <div class=\"resume\" style=\"font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\">\n            <h1 class=\"center\" style=\"text-align: center; color: #333; margin-bottom: 20px;\">Resume</h1>\n            <section style=\"margin-bottom: 20px;\">\n                <h2 style=\"color: #007acc; border-bottom: 2px solid #007acc; padding-bottom: 5px; margin-bottom: 10px;\">Personal Information</h2>\n                <ul style=\"list-style-type: none; padding: 0;\">\n                    <li style=\"margin: 10px 0;\"><strong>Name:</strong> ".concat(name, "</li>\n                    <li style=\"margin: 10px 0;\"><strong>Email:</strong> ").concat(email, "</li>\n                    <li style=\"margin: 10px 0;\"><strong>Contact No:</strong> ").concat(phone, "</li>\n                </ul>\n            </section>\n            <section style=\"margin-bottom: 20px;\">\n                <h2 style=\"color: #007acc; border-bottom: 2px solid #007acc; padding-bottom: 5px; margin-bottom: 10px;\">Education</h2>\n                <ul style=\"list-style-type: none; padding: 0;\">\n                    ").concat(education.map(function (item) { return "<li style=\"margin: 10px 0;\">".concat(item, "</li>"); }).join(''), "\n                </ul>\n            </section>\n            <section style=\"margin-bottom: 20px;\">\n                <h2 style=\"color: #007acc; border-bottom: 2px solid #007acc; padding-bottom: 5px; margin-bottom: 10px;\">Experience</h2>\n                <ul style=\"list-style-type: none; padding: 0;\">\n                    ").concat(experience.map(function (item) { return "<li style=\"margin: 10px 0;\">".concat(item, "</li>"); }).join(''), "\n                </ul>\n            </section>\n            <section>\n                <h2 style=\"color: #007acc; border-bottom: 2px solid #007acc; padding-bottom: 5px; margin-bottom: 10px;\">Skills</h2>\n                <ul style=\"list-style-type: none; padding: 0;\">\n                    ").concat(skills.map(function (item) { return "<li style=\"margin: 10px 0;\">".concat(item, "</li>"); }).join(''), "\n                </ul>\n            </section>\n        </div>\n    ");
    // Displaying the resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display element is missing');
    }
});
