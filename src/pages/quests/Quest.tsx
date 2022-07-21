import React from "react";
import { Bar} from "@kaineee/nier-automata-ui-library";
import { Outlet, useParams} from "react-router-dom";
import { YorhaNavLink } from "../../components";
import PagesTemplate from "../../templates/pagesTemplate";
import styles from './Quest.module.scss';
import { SubTitle } from "../../utils/ParamAsSubTitle";
import PagesChildTemplate from "../../templates/pagesChildTemplate";

let QuestList = [
  {
    Link:"/quest/Active/Quest1?status=",
    Text:"Active Quests",
    type:"active",
  },
  {
    Link:"/quest/all/Quest4?status=",
    Text:"All Quests",
    type:"",
  },
  {
    Link:"/quest/Completed/Quest5?status=",
    Text:"Cleared Quests",
    type:"completed",
  },
]

const Quest = () => {

  const param = useParams();

  return(
    <PagesTemplate
      title={`QUESTS`}
      subtitle={SubTitle(param.status)}
      footer="quests footer."
      chilld={
        <PagesChildTemplate
          LeftContent={
            <>
              {QuestList.map((item)=>(
                <YorhaNavLink key={item.Link} to={item.Link} filter={item.type} filterType={"status"} text={item.Text}/>
              ))}
            </>
          }
          Outlet={<Outlet/>}
          RightContent={<></>}
        />
      }
    />
  )
}

export default Quest;