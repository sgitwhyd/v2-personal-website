import type { NextApiHandler } from 'next'
import { GithubRepository, GithubUser } from '@/types/github'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const headers = {
      Authorization: `Bearer  ${process.env.GITHUB_TOKEN}`,
    }

    const userResponse = await fetch('https://api.github.com/users/sgitwhyd', { headers })
    const repoResponse = await fetch('https://api.github.com/users/sgitwhyd/repos?per_page=100', { headers })

    const userData: GithubUser = await userResponse.json()
    const repoData: GithubRepository[] = await repoResponse.json()

    const stars = repoData.reduce((acc, repo) => acc + repo.stargazers_count, 0)

    return res.status(200).json({
      user: {
        username: userData.login,
        avatarUrl: userData.avatar_url,
        name: userData.name,
        publicRepos: userData.public_repos,
        publicGists: userData.public_gists,
        followers: userData.followers,
        following: userData.following,
      },
      stars,
    })
  }
}

export default handler
