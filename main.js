var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var photoElement = document.getElementById('photo');
    var usernameElement = document.getElementById("username");
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && photoElement && usernameElement) {
        var name_1 = nameElement.value;
        var email_1 = emailElement.value;
        var phone_1 = phoneElement.value;
        var education_1 = educationElement.value;
        var experience_1 = experienceElement.value;
        var skills_1 = skillsElement.value;
        var username = usernameElement.value;
        var uniquePath_1 = "resumes/".concat(username.replace(/\s+/g, ''), "_cv.html");
        var reader = new FileReader();
        if (photoElement.files && photoElement.files[0]) {
            reader.onload = function (event) {
                var _a;
                var resumeOutput = "\n                <img src=\"".concat((_a = event.target) === null || _a === void 0 ? void 0 : _a.result, "\" alt=\"Profile Photo\">\n                <p><strong>Name:</strong> ").concat(name_1, "</p>\n                <p><strong>Email:</strong> ").concat(email_1, "</p>\n                <p><strong>Phone:</strong> ").concat(phone_1, "</p>\n\n                <h3>Education</h3>\n                <p>").concat(education_1, "</p>\n\n                <h3>Experience</h3>\n                <p>").concat(experience_1, "</p>\n\n                <h3>Skills</h3>\n                <p>").concat(skills_1, "</p>");
                // Correcting the link creation part
                var downloadLink = document.createElement('a');
                downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
                downloadLink.download = uniquePath_1;
                downloadLink.textContent = 'Download Your 2024 Resume';
                // Appending the download link to the resume output section
                var resumeOutputElement = document.getElementById('resumeOutput');
                if (resumeOutputElement) {
                    resumeOutputElement.innerHTML = resumeOutput;
                    resumeOutputElement.appendChild(downloadLink); // Add the download link to the page
                }
            };
            reader.readAsDataURL(photoElement.files[0]);
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
