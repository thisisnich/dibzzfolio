const fetchGitHubStats = async (): Promise<{
    commits: number;
    additions: number;
    deletions: number;
    files: number;
  }> => {
      // Define an interface for the week object structure
  interface Week {
    a: number;  // Additions
    d: number;  // Deletions
    // Add any other properties that might be in the week object
  }
  
  // Define an interface for the userStats object
  interface UserStats {
    weeks: Week[];
    // Add any other properties that might be in the userStats object
  }
    // Use the project data if available, otherwise fall back to hardcoded values
    const username = "thisisnich";
    const repoOwner = "thisisnich";
    const repoName = "dibzzedwallpaper";
  
    try {
      const res = await fetch(
        `https://api.github.com/repos/${repoOwner}/${repoName}/stats/contributors`
      );
  
      // GitHub may return 202 while it generates the stats
      if (!res.ok) {
        throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
      }
  
      const data = await res.json();
  
      if (!Array.isArray(data)) {
        throw new Error("GitHub is still generating stats. Try again later.");
      }
  
      const userStats = data.find(
        (contributor) => contributor.author.login === username
      );
  
      if (!userStats) throw new Error("User not found in contributors");
  
  
  
  // Now use these types in your reduce functions
  const additions = userStats.weeks.reduce((sum: number, week: Week) => sum + week.a, 0);
  const deletions = userStats.weeks.reduce((sum: number, week: Week) => sum + week.d, 0);    const commits = userStats.total;
      const files = 0; // Still requires per-commit analysis
  
      return { commits, additions, deletions, files };
  
    } catch (error) {
      console.error("Error fetching GitHub stats:", error);
      return {
        commits: 0,
        additions: 0,
        deletions: 0,
        files: 0
      };
    }
  };
  