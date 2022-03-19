const URLS = {
  Projects: "/projects",
  Categories: "/categories",
  Works: (currentPage: number, pageSize: number) =>
    `/works?_start=${currentPage * pageSize}&_end=${
      (currentPage + 1) * pageSize
    }`,
};

export default URLS;
