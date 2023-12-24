import { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';

export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    try {
        const result =
            await sql`
            CREATE TABLE project ( 
                id INCREMENTS PRIMARY KEY,
                title VARCHAR(255), 
                description TEXT,
                url VARCHAR(255),
                client VARCHAR(255),
                date VARCHAR(255),
                brief TEXT,
                concept TEXT,
                deliverables TEXT,
                demographic VARCHAR(255),
                tech TEXT ARRAY,
                github VARCHAR(255),
                images TEXT ARRAY,
                updated_at TIMESTAMP DEFAULT NOW()
                );
            `;
        return response.status(200).json({ result });
    } catch (error) {
        return response.status(500).json({ error });
    }
}