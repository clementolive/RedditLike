import { _Comment } from "./-comment";
import { Thread } from "./thread.interface";

export interface ThreadPage {
    thread: Thread,
    commentList: _Comment[]
}

