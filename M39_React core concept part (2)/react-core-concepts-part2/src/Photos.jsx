import { use } from "react"
import Photo from "./Photo"


export default function Photos({ photoPromise }) {
    const photos = use(photoPromise);
    console.log(photoPromise);
    return (
        <div>
            <h3>all photo appears here</h3>
            {
                photos.map(photo => <Photo></Photo>)
            }
        </div>
    )
}