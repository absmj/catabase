export class Repository {
  static load(repository: string | object) {
    if (typeof repository === "string") {
      const storedData = localStorage.getItem(repository);
      if (!storedData) {
        throw new Error(`No data found in localStorage for ${repository}`);
      }

      return JSON.parse(storedData);
    } else {
      return repository;
    }
  }

  save(repository: string, data: object) {
    console.log(data);
    localStorage.setItem(repository, JSON.stringify(data));
  }
}
