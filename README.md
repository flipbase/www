# WWW

Flipbase.com website and blog template, based on [Wintersmith.io](http://wintersmith.io). 

## Setup & depedencies

Repo uses wintersmith, bower, npm and the Ruby gems SASS, susy, compass and Breakpoint
  
    npm wintersmith install -g
    npm bower install -g
    gem install sass, compass, breakpoint // Required for compiling SASS to CSS

## Build
  
    npm run setup // Install all local packages and dependencies
    npm run build // Build the website

## Deploy

Just upload the /www directory using SFTP