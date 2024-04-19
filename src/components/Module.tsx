import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";

import * as Collapsible from "@radix-ui/react-collapsible";
import { useAppSelector } from "../store";

import { useDispatch } from "react-redux";
import { play } from "../store/slices/player";

interface ModuleProps {
  moduleIndex: number;
  title: string;
  amountOfLessons: number;
}

export function Module({ moduleIndex, title, amountOfLessons }: ModuleProps) {
  const lessons = useAppSelector(
    (state) => state.player.course.modules[moduleIndex].lessons
  );

  const { currentLessonIndex, currentModuleIndex } = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player;

    return { currentLessonIndex, currentModuleIndex };
  });

  const dispatch = useDispatch();

  return (
    <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4 ">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400 ">
            {amountOfLessons} aulas
          </span>
        </div>

        <ChevronDown className="w-4 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 duration-300" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons.map((lesson, lessonIndex) => {
            const current =
              currentModuleIndex === moduleIndex &&
              currentLessonIndex === lessonIndex;

            return (
              <Lesson
                key={lesson.id}
                duration={lesson.duration}
                title={lesson.title}
                onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
                isCurrent={current}
              />
            );
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}