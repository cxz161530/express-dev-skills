const skills = [
    {id: 13579, language: 'JavaScript', level: 'Excellent'},
    {id: 24680, language: 'Java', level: 'Good'},
    {id: 36912, language: 'Python', level: 'Fair'}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }
 
  function getOne(id){

    id = parseInt(id);
    return skills.find(skills => skills.id ===id)
  }