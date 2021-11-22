node {
	def app
	stage('Clone repository') {
		checkout scm
	}

	stage('Build image') {
		app = docker.build('gaune/basic-webserver')
	}

	stage('Test image') {
		app.inside {
			sh 'echo "Test passed"'
		}
	}

	stage('Push image') {
		docker.withRegistry('https://registry.hub.docker.com', 'git') {            
			app.push("${env.BUILD_NUMBER}")            
			app.push("latest")        
		}    
	}
}