const shirt = ((size="large", msg="I love Javaascript") => {
    console.log(`The size of the shirt is ${size} and message to be printed is ${msg}`);
    });
    
    shirt();
    shirt(size="medium");
    shirt(size="small", msg="I love programming");
    