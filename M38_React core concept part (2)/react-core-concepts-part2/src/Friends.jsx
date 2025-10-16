import { use } from "react"

export default function Friends({freindsPromise}) {
    const friends = use(freindsPromise);
    console.log(friends)
    return (
        <div className="card">
            <h3>Friends: {friends.length}</h3>
        </div>
    )
}