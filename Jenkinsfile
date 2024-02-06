pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    nodejs('nodejs') {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    sh 'npx cypress run'
                }
            }
        }
    }
}