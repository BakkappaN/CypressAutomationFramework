# CypressAutomationFramework
Cypress Automation Framework

## Step1: Make sure Nodejs is installed i.e "node --version" & "npm --version"
Download link: https://nodejs.org/en/download/?msclkid=9235b36aae8711ec83c8dcadd3d2c7ae

## Step2: Download & Install Visual Studio Code
Download link: https://code.visualstudio.com/Download?msclkid=27c13200a9b411ec9558d874544e8563#

## Step3: In C driver only, Creater Project folder & enter "npm init" in CMD
          package name: (cypressautomationframework)
          version: (1.0.0)
          description: test cypress
          entry point: (index.js)
          test command:
          git repository:
          keywords:
          author:
          license: (ISC)

make sure package.json file created

## Step4: Enter "npm install cypress --save-dev"
make sure all the cypress folders got downloaded & installed

## Step5: Open VS Code, then Open project folder

## Step6: Enter "node_module\.bin\cypress open",
make sure TestRunner Window opened, start writing test..... 

## ======================================================================================================================== 
## To run all the scripts from CLI or command, run below cmd
          .\node_modules\.bin\cypress run     
## To run specific suite, run below cmd
          .\node_modules\.bin\cypress run --spec .\cypress\integration\demo.spec.js
## To debug or to run specific test, run below cmd or including or excluding tests
          we need to use "only" to include test 
          it.only('dropdown',() => {
          
          
## End

# ENJOY...!!!

