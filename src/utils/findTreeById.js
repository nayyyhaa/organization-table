export const findTreeById = (org, id) => {
  if (id) {
    const findData = (org) => {
      if (org.id === id) return org;
      for (let i = 0; i < org?.children?.length; i++) {
        if (findData(org.children[i])) {
          return findData(org.children[i]);
        }
      }
    };
    return findData(org);
  }
  return org;
};
