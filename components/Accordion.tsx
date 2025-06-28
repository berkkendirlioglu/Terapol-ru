"use client";
import { Check, ChevronDown } from "lucide-react";
import React, { useState } from "react";

const data:{title:string,desc:string}[] = [
  {
    "title": "ОПЫТ И ПРОФЕССИОНАЛЬНАЯ КОМАНДА",
    "desc": "Надежный бренд, созданный на базе более чем 30-летнего опыта в строительной химии и нашей квалифицированной экспертной команды."
  },
  {
    "title": "КАЧЕСТВО МАТЕРИАЛОВ",
    "desc": "Производство без компромиссов в качестве."
  },
  {
    "title": "МЕСТНЫЙ ПРОИЗВОДИТЕЛЬ",
    "desc": "Добавленная стоимость для страны благодаря отечественному капиталу и ежегодному росту экспортных показателей, обеспечивающая сохранение капитала внутри страны."
  },
  {
    "title": "ПОСТОЯННОЕ РАЗВИТИЕ И ИННОВАЦИОННЫЙ ПОДХОД",
    "desc": "Разработка новых продуктов с учётом отраслевых потребностей нашей опытной команды НИОКР."
  }
];

export default function Accordion() {
  const [active, setActive] = useState<number>(0);
  return (
    <div className="flex flex-col gap-3">
      {data.map((data, index) => (
        <div key={index}>
          <div
            className={`cursor-pointer flex justify-between items-center py-3 px-4 rounded-[3px] text-[18px] ${
              active === index ? "bg-[#312783] text-white" : "bg-transparent"
            }`}
            onClick={() => setActive(index)}
          >
            <div className="flex items-center gap-4">
              <Check />
              <p className="select-none pointer-events-none">{data.title}</p>
            </div>
            <div>
              <ChevronDown
                className={`${
                  active === index ? "rotate-180" : "rotate-0"
                } transition-all`}
              />
            </div>
          </div>

          <div
            className={`${
              active === index ? "py-5" : "h-[0px] py-0 overflow-hidden"
            } transition-all px-8 text-[#888] text-[15px]`}
          >
            {data.desc}
          </div>
        </div>
      ))}
    </div>
  );
}
