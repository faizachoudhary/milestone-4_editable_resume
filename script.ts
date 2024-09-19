// listing element
document.getElementById('resumeForm')?.addEventListener('submit' , function(event){
    event.preventDefault();

    // type assertion
    const profilepictureInput =document.getElementById('profile picture') as HTMLInputElement;
    const nameElement =document.getElementById('name') as HTMLInputElement;
    const fathernameElement =document.getElementById('father name') as HTMLInputElement;
    const phonenumberElement =document.getElementById('phone number') as HTMLInputElement;
    const emailElement =document.getElementById('email') as HTMLInputElement;
    const educationElement =document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement =document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement =document.getElementById('skills') as HTMLTextAreaElement;
    const hobbiesElement =document.getElementById('hobbies') as HTMLTextAreaElement;


    if(profilepictureInput && nameElement && fathernameElement && phonenumberElement && emailElement && educationElement && experienceElement && skillsElement && hobbiesElement) {
        const name = nameElement.value;
        const fathername = fathernameElement.value;
        const phonenumber = phonenumberElement.value;
        const email = emailElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const hobbies = hobbiesElement.value;

    
        // picture element
        const profilepictureFile = profilepictureInput.files?.[0]
        const profilepictureURL = profilepictureFile? URL.createObjectURL(profilepictureFile) : "";


    // create resume output
    const resumeOutput = `
    <h2>Resume</h2>
    ${profilepictureURL ?`<img src="${profilepictureURL}" alt="Profile Picture"  class="profilepicture">` :``}
    <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span> </p>
    <p><strong>Father Name:</strong> <span id="edit-father name" class="editable"> ${fathername} </span> </p>
    <p><strong>Phone Number:</strong> <span id="edit-phone number" class="editable"> ${phonenumber} </span> </p>
    <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span> </p>

    <h3>Education</h3>
    <p id="edit-education" class="editable">${education}</p>

    <h3>Experience</h3>
    <p id="edit-experience" class="editable" >${experience}</p>
    
    <h3>Skills</h3>
    <p id="edit-skills" class="editable" >${skills}</p>

    <h3>Hobbies</h3>
    <p id="edit-hobbies" class="editable" >${hobbies}</p>
    `;




    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    } makeEditable();
     
} else {
    console.error('one or more output element are missing')
}

})


function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element =>{
        element.addEventListener('click', function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            // replace content
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentValue
                input.classList.add('aditing-input')


                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }
        })
    })
}
