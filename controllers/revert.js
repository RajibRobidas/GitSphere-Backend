import { promises as fs } from "fs";
import path from "path";
// import { promisify } from "util";

// const readdir = promisify(fs.readdir);
// const copyFile = promisify(fs.copyFile);

async function revertRepo(commitID) {
  const repoPath = path.resolve(process.cwd(), ".myGit");
  const commitsPath = path.join(repoPath, "commits");

  try {
    const commitDir = path.join(commitsPath, commitID);
    const files = await fs.readdir(commitDir);
    const parentDir = path.resolve(repoPath, "..");

    for (const file of files) {
      if (file === "commit.json") continue; // skip metadata
      await fs.copyFile(path.join(commitDir, file), path.join(parentDir, file));
    }

    console.log(`Commit ${commitID} reverted successfully`);
  } catch (err) {
    console.log("Unable to revert : ", err);
  }
}

export { revertRepo };
