//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShows {
    constructor (name, time, length, seasons){
        this.showName = name
        this.showTime = time
        this.showLength = length
        this.numberOfSeasons = seasons
        }
        rewind () {
            console.log('rewind')
        }
        fastForward () {
            console.log('Fast forward')
        }
        showLive (){
            alert ('Alarm goes off')
        }
    }
    let power = new NetflixShows ('Power', '12:00 am Eastern Time', '1 Hour', '6')



class MakeNetflixTVShows {
    constructor (title, genre, rating, numOfEp){
        this.title = title
        this.genre = genre
        this.rating = rating
        this.numOfEp = numOfEp
        }
        play () {
            console.log('Playing..')
        }
        stop () {
            console.log('Stopping')
        }
        saveToList (){
            alert ('Saved To List')
        }
    }
let bridgerton = new MakeNetflixTVShows ('Bridgerton', 'Romantic Drama', '99%', 16)