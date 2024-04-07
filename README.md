# Angular Homes App
- Install Angular if you don't have it installed

  `npm install -g @angular/cli`

- Clone this branch to your local machine

  `git clone -b homes-app-start git@github.com:angular/codelabs.git homes-app`

- Once the code has been downloaded

  `cd homes-app`

- Install the depencies

  `npm install` 

- Run the application 

  `ng serve`


goo.gle/homes-app-start
goo.gle/homes-app-listings
goo.gle/homes-app-styles

ng g c Home --standalone --inline-template (ng 16)
ng g c Home --inline-template (ng 17)
ng g c HousingLocation --standalone --inline-template
ng g c details --inline-template
ng g s housing

npm install -g json-server
touch db.json
json-server --watch db.json

https://angular.io/cli/update
ng update @angular/cli @angular/core

convert string
JSON.stringgy()
https://dev.to/clickpesa/add-quotes-to-your-unquoted-json-objects-3clc