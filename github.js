class GitHub {
  constructor() {
    this.client_id = '2ec16c6b023426f14ef0';
    this.client_secret = '30df9d848b1dd398da8a730c5bb833a3d978ad6e';
    this.repos_count = 6;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();

    const reposData = await repoResponse.json();

    return {
      profile: profileData,
      repos: reposData
    }
  }

}