function combineUsers(...arrays) {
 
  const mergedUsers = [].concat(...arrays); 
  
  const mergeDate = new Date().toLocaleDateString();

  return {
    users: mergedUsers,
    merge_date: mergeDate
  };
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

