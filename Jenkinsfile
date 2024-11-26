pipeline{
    agent any
    stages{
        stage('Build')
        {
            steps{
                script{
                    bat 'docker build -t nodejs .'
                }
            }
        }
        stage('Test')
        {
            steps{
                script{
                    echo "running tests"
                }
            }
        }
        stage('Deploy')
        {
            steps{
                script{
                    echo 'deploying application'
                }
            }
        }
    }
}
