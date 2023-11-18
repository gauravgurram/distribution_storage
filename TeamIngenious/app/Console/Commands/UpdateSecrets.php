<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Aws\SecretsManager\SecretsManagerClient;

class UpdateSecrets extends Command
{
    protected $signature = 'secrets:update';
    protected $description = 'Update secrets from AWS Secrets Manager to .env file';

    public function handle()
    {
        $client = new SecretsManagerClient([
            'version' => 'latest',
            'region' => 'ap-south-1', // Update with your AWS region
            'credentials' => [
                'key' => 'AKIA5OFCD7UY2QQN4C5V',
                'secret' => 'gR1S1ZaNuZu4wIRu3GT7U6bCXwHgaI5qzehp21am',
            ],
        ]);

        $secretName = 'DB_Credentials'; // Update with your secret name in AWS Secrets Manager
        $versionStage = 'AWSCURRENT';

        try {
            $result = $client->getSecretValue([
                'SecretId' => $secretName,
                'VersionStage' => $versionStage,
            ]);

            $secrets = json_decode($result['SecretString'], true);

            $envContents = file_get_contents(base_path('.env'));

            foreach ($secrets as $key => $value) {
                // Update the .env file with the retrieved secrets
                $envContents = preg_replace(
                    "/^{$key}=.*/m",
                    "{$key}={$value}",
                    $envContents
                );
            }

            // Save the updated .env file
            file_put_contents(base_path('.env'), $envContents);

            $this->info('Secrets updated successfully.');
        } catch (\Exception $e) {
            $this->error('Error updating secrets: ' . $e->getMessage());
        }
    }
}
