import ReactIcon from '@components/icons/React.astro';
import CssIcon from '@components/icons/Css.astro';
import JavaScriptIcon from '@components/icons/JavaScript.astro';
import TailwindCSS from '@components/icons/TailwindCSS.astro';
import UI5 from '@components/icons/UI5.astro';
import CSharp from '@components/icons/CSharp.astro';
import DotNet from '@components/icons/DotNet.astro';
import BizagiStudio from '@components/icons/BizagiStudio.astro';
import type { TypeOf } from 'astro/zod';
import NextJS from '@components/icons/NextJS.astro';

export const TAGS = {
  REACT: {
    name: "React JS",
    class: "bg-[#323330] text-[#00D8FF]",
    icon: ReactIcon
  },
  CSS: {
    name: "CSS",
    class: "bg-[#323330] text-[#0c73b8]",
    icon: CssIcon
  },
  JS: {
    name: "JavaScript",
    class: "bg-[#323330] text-[#f0db4f]",
    icon: JavaScriptIcon
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#323330] text-[#38bdf8]",
    icon: TailwindCSS
  },
  OPENUI5: {
    name: "OpenUI5",
    class: "bg-[#323330] text-[#ff5a37]",
    icon: UI5
  },
  CSHARP: {
    name: "C#",
    class: "bg-[#323330] text-[#A179DC]",
    icon: CSharp
  },
  DOTNET: {
    name: ".NET Framework",
    class: "bg-[#323330] text-[#66cef5]",
    icon: DotNet
  },
  BIZAGISTUDIO: {
    name: "BizAgi Studio",
    class: "bg-[#323330] text-[#bde17a]",
    icon: BizagiStudio
  },
  NEXTJS: {
    name: "Next JS",
    class: "bg-[#323330] text-white",
    icon: NextJS
  }
};

export type TechStack = keyof typeof TAGS;