var stuff = [];

var max_size = 1000000000;

var size = Math.ceil( Math.random() * max_size );

for( var j=0; j<size; j++ ){

  stuff.push( j+1 );
}

var random_value = Math.ceil( Math.random() * size );
