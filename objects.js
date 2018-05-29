var playlist = {artist : 'Widespread Panic', song : 'Driving Song'};
function updatePlaylist(playlist, artist, song) {
  playlist['Grateful Dead'] = 'Althea'
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}


 
