pipeline {
    agent any   // Run on any available agent

    environment {
        // Define environment variables here
        NODE_ENV = 'stage'
    }

    options {
        // Optional settings like timeout, build discarding, etc.
        timeout(time: 30, unit: 'MINUTES')
    }

    stages {
        stage('Checkout') {
            steps {
                // Get code from Git
                checkout scm
                // OR
                // git branch: 'main', url: 'https://github.com/your/repo.git'
            }
        }

        stage('Build') {
            steps {
                echo "Building the application..."
                sh 'npm install'   // Example for Node.js project
            }
        }

        stage('Test') {
            steps {
                echo "Running tests..."
                sh 'npm test'
            }
        }

        stage('Deploy') {
            when {
                branch 'main'   // Run deploy only on main branch
            }
            steps {
                echo "Deploying application..."
                // your deployment commands here
            }
        }
    }

    post {
        always {
            echo "Pipeline finished!"
        }
        success {
            echo "Build succeeded ✅"
        }
        failure {
            echo "Build failed ❌"
        }
    }
}
