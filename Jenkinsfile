pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code'
                checkout scm
            }
        }
        stage('Build') {
            steps {
                echo 'Building the web project'
                sh 'echo "This is a simple static HTML/CSS/JS project."'
            }
        }
        stage('Test') {
            steps {
                echo 'Running a quick validation'
                sh 'test -f index.html && echo "index.html exists"'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deployment stage placeholder'
            }
        }
    }
}
