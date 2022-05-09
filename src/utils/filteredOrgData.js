export const filterOrgData = (data, searchText) => {
  if (searchText) {
    searchText = searchText.toLowerCase();
    let newOrg = {
      ...data,
      isVisible:
        data["email"]?.toLowerCase().includes(searchText) ||
        String(data["pNumber"])?.includes(searchText) ||
        data["name"]?.toLowerCase().includes(searchText),
      children: data?.children?.map((dep) => ({
        ...dep,
        isVisible:
          dep["email"]?.toLowerCase().includes(searchText) ||
          String(dep["pNumber"])?.includes(searchText) ||
          dep["name"]?.toLowerCase().includes(searchText),
        children: dep?.children?.map((team) => ({
          ...team,
          isVisible:
            team["email"]?.toLowerCase().includes(searchText) ||
            String(team["pNumber"])?.includes(searchText) ||
            team["name"]?.toLowerCase().includes(searchText),
          children: team?.children?.map((mem) => ({
            ...mem,
            isVisible:
              mem["email"]?.toLowerCase().includes(searchText) ||
              String(mem["pNumber"])?.includes(searchText) ||
              mem["name"]?.toLowerCase().includes(searchText)
          }))
        }))
      }))
    };
    return newOrg;
  }
  return data;
};
