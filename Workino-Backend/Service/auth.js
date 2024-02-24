const sessionIdToUserMap = new Map();

function setUser (id, user){
  sessionIdToUserMap.set(id, user);
}

function getUser(id){
  return sessionIdToUserMap(id);
}