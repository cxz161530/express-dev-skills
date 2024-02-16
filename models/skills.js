const skills = [
    {id: 13579, language: 'JavaScript', used: true},
    {id: 24680, language: 'Java', used: true},
    {id: 36912, language: 'Python',used: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleted
  };
  
  function getAll() {
    return skills;
  }
 
  function getOne(id){

    id = parseInt(id);
    return skills.find(skills => skills.id ===id)
  }

  function create(skills) {
    // Add the id
    skills.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skills.done = false;
    skills.push(skills);
  }

  function deleted(id){
    id = parseInt(id);
    const idx = skills.findIndex(skills => skills.id === id);
    skills.splice(idx,1);


  }