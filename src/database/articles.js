import Dexie from "dexie"

const db = new Dexie('reader');

// Declare tables, IDs and indexes
db.version(1).stores({
    articles: 'sophoraId, date'
});

// Middleware for converting image blobs to urls
db.articles.hook('reading', function (article) {
    if (article && article.image) {
        article.teaserImage.videowebl.imageurl = URL.createObjectURL(article.image)
    }
    return article
});

async function save(article) {
    // download the image first
    if (article.teaserImage) {
        const response = await fetch(article.teaserImage.videowebl.imageurl)
        article.image = await response.blob()
    }
    return db.articles.put(article)
}

function remove(article) {
    return db.articles.delete(article.sophoraId)
}

function list() {
    return db.articles.orderBy('date').reverse().toArray()
}

function get(id) {
    return db.articles.get(id)
}

export default {
    save,
    remove,
    get,
    list
}