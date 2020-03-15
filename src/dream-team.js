module.exports = function createDreamTeam(members) {
  
 
  let teamName = "";
  let name = [];
  
  if (typeof members != 'object' || members == '') return false;
  
  for (let i = 0; i < members.length; i++) {
    name[i] = members[i].replace(/\s+/g, '');
    if (typeof name[i] == 'string' && name[i] != "")
      teamName+=name[i][0].toUpperCase();
  }
  
  let result = teamName.split('').sort().join('');
  
  
  return result;
};