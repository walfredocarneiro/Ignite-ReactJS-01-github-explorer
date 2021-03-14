import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'unform',
  description: 'Form in React',
  link: 'https://github.com/brunobecoski/ignite-reactjs'
}

export function RepositoryList() {
  return (
    <section className="repository">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}