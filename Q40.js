let make_album = ((artist, album) => {
    album_dict = {
        artist: artist,
        album: album
    }
    return album_dict
});

console.log(make_album("The Beatles", "Pepper LP"));
console.log(make_album("Michael Jackson", "Thriller"));
console.log(make_album("Elvis Presley", "Evils"));


make_album = ((artist, album, tracks) => {
    album_dict = {
        artist: artist,
        album: album
    }
    if(tracks){
        album_dict["tracks"] = tracks;
    }
    return album_dict
});

console.log("\n");
console.log(make_album("The Beatles", "Pepper LP"));
console.log(make_album("Michael Jackson", "Thriller"));
console.log(make_album("Elvis Presley", "Evils", 8));