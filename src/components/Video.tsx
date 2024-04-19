import ReactPlayer from "react-player";

import { useDispatch } from "react-redux";
import { next, useCurrentLesson } from "../store/slices/player";

export function Video() {
  const { currentLesson } = useCurrentLesson();

  const dispatch = useDispatch();

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing={true}
        onEnded={() => dispatch(next())}
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  );
}
