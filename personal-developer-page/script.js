const skillsList = document.getElementById('skills-list');
const btnSkills = document.getElementById('btn-skills');

let skillsVisible = true;

const toggleSkills = () => {
  if (skillsVisible) {
    skillsList.classList.add('hidden');
    btnSkills.textContent = 'Show skills';
    skillsVisible = false;
  } else {
    skillsList.classList.remove('hidden');
    btnSkills.textContent = 'Hide skills';
    skillsVisible = true;
  }
};

btnSkills.addEventListener('click', toggleSkills);
