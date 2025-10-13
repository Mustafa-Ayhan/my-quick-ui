rallyJenkinsFileCommon{
    notifyPushBuildStatus = true
    stage('Build QUI'){
        ansiColor('xterm') {
            echo env.GIT_EMAIL_CC_LIST
            sh '''rm -f package-lock.json
                  touch build_log.txt
                  npm install node@16.18.0
                  npm install
                  npm run build
                  echo ${BUILD_NUMBER}- > version_info.txt
                  TZ=GMT-3 date >> version_info.txt
                  cp version_info.txt dist/'''
            archiveArtifacts allowEmptyArchive: true, artifacts: 'package-lock.json'
        }
    }
    stage('Publish Artifacts'){
        runGradleCommandForBranch("master","-PprojVersion=\"0.0.${BUILD_NUMBER}\" publish dockerPublish")
    }
}
