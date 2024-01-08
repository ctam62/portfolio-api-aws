require("dotenv").config();
const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager");

const secret_name = "prod/portfolio/postgres";

const client = new SecretsManagerClient({
    region: "us-east-1",
});

const getAWSSecrets = async () => {
    try {
        const response = await client.send(
            new GetSecretValueCommand({
                SecretId: secret_name,
                VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
            }),
        );

        console.log("Secrets Manager call successful");

        const secret = JSON.parse(response.SecretString);
        console.log(secret);

        const config = {
            host: secret.POSTGRES_HOST,
            database: secret.POSTGRES_DB,
            user: secret.POSTGRES_USER,
            password: secret.POSTGRES_PASSWORD,
            charset: "utf8",
        };

        return config;
    } catch (error) {
        // For a list of exceptions thrown, see
        // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
        throw error;
    }
};

module.exports = {
    client: "pg",
    connection: async () => {
        return await getAWSSecrets();
    },

    onUpdateTimestampFunction: `
    CREATE OR REPLACE FUNCTION on_update_timestamp()
    RETURNS trigger AS $$
    BEGIN
      NEW.updated_at = now();
      RETURN NEW;
    END;
    $$ language 'plpgsql';
  `,

    onUpdateTrigger: (table) => `
    CREATE TRIGGER ${table}_updated_at
    BEFORE UPDATE ON ${table}
    FOR EACH ROW
    EXECUTE PROCEDURE on_update_timestamp();
  `,
};
