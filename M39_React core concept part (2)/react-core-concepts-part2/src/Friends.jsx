import { use } from "react";
import Friend from "./Friend";
export default function Friends({freindsPromise}) {
    const friends = use(freindsPromise);
    console.log(friends)
    return (
        <div className="card">
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend key={friend.id} friend = {friend}></Friend>)
            }
        </div>
    )
}