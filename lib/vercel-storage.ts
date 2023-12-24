import { Generated, ColumnType } from 'kysely'
import { createKysely } from '@vercel/postgres-kysely'

// define types
type Database = {
    project: ProjectTable
}

type ProjectTable = {
    id: number
    title: string
    images: string[]
}

type ProjectTableDetails = {
    id: Generated<number>
    title: string
    description: Text
    url: string
    client: string
    date: string
    brief: Text
    concept: Text
    deliverables: Text
    demographic: string
    tech: string[]
    github: string
    images: string[]
    updated_at: ColumnType<Date, string | undefined>
}

const db = createKysely<Database>()

// query to fetch list of all projects
export async function getAllProjects(): Promise<ProjectTable> {

    const projects = await db
        .selectFrom('project')
        .select([
            'project.id',
            'project.title',
            'project.images',
        ])
        .execute()

    return projects[0]
}

// query to fetch a single project
export async function getProject(title: string): Promise<ProjectTableDetails> {

    const project = await db
        .selectFrom('project')
        .where('project.title', '=', title)
        .executeTakeFirst()

    return project![0]
}
