export const filterOrgData = (data, searchText) => {
  if (searchText) {
    searchText = searchText.toLowerCase();
    let newOrg = {
      ...data,
      isVisible:
        data["email"]?.toLowerCase().includes(searchText) ||
        data["name"]?.toLowerCase().includes(searchText),
      children: data?.children?.map((dep) => ({
        ...dep,
        isVisible:
          dep["email"]?.toLowerCase().includes(searchText) ||
          dep["name"]?.toLowerCase().includes(searchText),
        children: dep?.children?.map((team) => ({
          ...team,
          isVisible:
            team["email"]?.toLowerCase().includes(searchText) ||
            team["name"]?.toLowerCase().includes(searchText),
          children: team?.children?.map((mem) => ({
            ...mem,
            isVisible:
              mem["email"]?.toLowerCase().includes(searchText) ||
              mem["name"]?.toLowerCase().includes(searchText)
          }))
        }))
      }))
    };
    return newOrg;
  }
  return data;
};
