pipeline {

    agent any

    tools {nodejs "Node12"}

    environment {
        CYPRESS_accessToken = credentials('accessToken')
        CYPRESS_RECORD_KEY = credentials('recordKey')
    } 

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm i'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run --record --key ${CYPRESS_RECORD_KEY}'
            }
        }

    }
    
}