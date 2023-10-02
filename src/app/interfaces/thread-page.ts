import { _Comment } from "./-comment";
import { Thread } from "./thread";

export interface ThreadPage {
    thread: Thread,
    commentList: _Comment[]
}

