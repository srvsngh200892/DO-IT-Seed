DO-IT-Seed
==========

It contains the angular seed which also has DO IT APIs which is required for this tasks.  

 * Click on Fork button to fork it.
 * Clone forked repo to your system. ```git clone https:\\github.com\[your-user-name]\DO-IT-Seed.git DO-IT```
 * Follow Project Setup steps.

###Project Setup

1. cd to ```REST```

2. Run Following commands [ One time ]

  1. python bootstrap.py
  2. bin/buildout
  3. bin/django syncdb --noinput

3. To host you APIs run following command

  **bin/django runserver 9080**
    
  Now your APIs server are UP and running, you can check by accessing ```localhost:9080\projects```
  
4. cd ..
5. cd DOIT
6. cd app
7. To host your web app run -
    **python -m SimpleHTTPServer 9081**
    This will host your App locally, you can check by accessing ```localhost:9081```


###IDE SetUp
1. Open your eclipse and import ```DOIT``` as existing project.
**Note**:  
DOIT is an eclipse project configured to angular nature. This will help you in content assistent, autocompletion, syntax highlighting for angular specific elements.  
```Quick tip - For auto-suggestion type prefix and press ctrl + space```.  
For more info how to use it - please visit https://github.com/angelozerr/angularjs-eclipse/wiki/Getting-Started
