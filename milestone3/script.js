var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume.display');
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page relode 
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //generate the resume constant dynamic
    var resumeHTML = "\n   <h2><b>Resume</h2></b>\n   <h3> Persnoal Information </h3>\n   <p><b>Name:</b>".concat(name, "</p>\n   <p><b>Email:</b>").concat(email, "</p>\n   <p><b>Phone:</b>").concat(phone, "</p>\n\n   <h3>Education</h3>\n   <p>").concat(education, "</p>\n\n   <h3>Experience</h3>\n   <p>").concat(experience, "</p>\n\n   <h3>Skills</h3>\n   <p>").concat(skills, "</p>\n    ");
    //display the generated resume
    if (resumedisplayElement) {
        resumedisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing');
    }
});
