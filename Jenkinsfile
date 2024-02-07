pipeline {
    agent any

    tools {nodejs "Node12"}

    environment {
        //CHROME_BIN = '/bin/google-chrome'
        accessToken = credentials('accessToken')
    } 

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm i'
                /*
                script {
                    nodejs('nodejs') {
                        sh 'npm i'
                    }
                }
                */
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run --browser chrome'
                /*
                script {
                    sh 'npx cypress run'
                }
                */
            }
        }
    }
}