import React, { FC } from "react";

interface Reviewtype {
  r1: string;
  r2: string;
  r3: string;
  r4: string;
  r5: string;
}

const Reviews: Reviewtype[] = [
  {
    r1: "아바타사진링크1",
    r2: "이름1",
    r3: "작성 시간1",
    r4: "링크1",
    r5: "후기1",
  },
  {
    r1: "아바타사진링크2",
    r2: "이름2",
    r3: "작성 시간2",
    r4: "링크2",
    r5: "후기2",
  },
  {
    r1: "아바타사진링크3",
    r2: "이름3",
    r3: "작성 시간3",
    r4: "링크3",
    r5: "후기3",
  },
  {
    r1: "아바타사진링크4",
    r2: "이름4",
    r3: "작성 시간4",
    r4: "링크4",
    r5: "후기4",
  },
  {
    r1: "아바타사진링크5",
    r2: "이름5",
    r3: "작성 시간5",
    r4: "링크5",
    r5: "후기5",
  },
];

export { Reviews };
export type { Reviewtype };
