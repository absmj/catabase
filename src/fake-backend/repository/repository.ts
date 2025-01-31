export class Repository {
  static async load(repository: string | object) {
    if (typeof repository === "string") {
      const Repo = await import(`../repository/${repository}`);
      return new Repo(JSON.parse(localStorage.getItem(repository) || ""));
    } else {
      return repository;
    }
  }

  save(repository: string, data: object) {
    localStorage.setItem(repository, JSON.stringify(data));
  }
}
