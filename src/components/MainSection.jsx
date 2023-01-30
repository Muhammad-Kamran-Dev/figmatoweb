import React from "react";
import {
  colorFullBg,
  technology,
  science,
  finance,
  society,
  entertainment,
  history,
  news,
} from "../utils/colors";
import Fact from "./Fact";
import Button from "./Button";
import { data } from "../utils/data";
import ShareFact from "./ShareFact";

const MainSection = ({ toggle }) => {
  return (
    <>
      <ShareFact toggle={toggle} />
      <main className="flex flex-col justify-center gap-5 my-10 sm:flex-row mx-7">
        <aside className="flex-col gap-2 space-y-5 d-flex">
          <Button styles={colorFullBg} text="All" />
          <Button styles={technology} text="Technology" />
          <Button styles={science} text="Science" />
          <Button styles={finance} text="Finance" />
          <Button styles={society} text="Society" />
          <Button styles={entertainment} text="Entertainment" />
          <Button styles={history} text="History" />
          <Button styles={news} text="News" />
        </aside>

        <section className="h-screen scrollbar scrollbar-thumb-orange-500 scrollbar-track-gray-900">
          <div className="h-64 mr-7">
            {data.map((element, index) => (
              <Fact
                key={index}
                text={element.text}
                btnText={element.btnText}
                source={element.source}
                likes={element.likes}
                face={element.face}
                dislikes={element.dislikes}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default MainSection;
