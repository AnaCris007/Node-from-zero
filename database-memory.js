import { randomUUID} from "node:crypto"
export class DatabaseMemory {
    #videos = new Map()

    //Set, map

    list(search){
        return Array.from(this.#videos.entries()).map((videoArray)=> {
            const id = videoArray[0]
            const data = videoArray[1]

            return {
                id,
                ...data,
            }
        
        }) // converte o iterator para array
        .filter(video => {
            if (search) {
                return video.title.includes(search)
            }

            return true
        })
    }

    create(video) {
        const videoId = randomUUID()

        //UUID - universal unique id

        this.#videos.set(videoId, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}