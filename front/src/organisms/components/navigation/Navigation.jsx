import { NavWrap, NavLi, NavUl, SubLi } from "./styled";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";


export const Navigation = () => {
  const [isOpen, setMenu] = useState(false);

  const category = [
    { label: "내자산", path: "/assets" },
    { label: "스왑", path: "/exchange/swap" },
    { label: "예치", path: "/exchange/pool" },
    {
      label: "ASD거버넌스",
      subMenu: [
        { label: "스테이킹+풀 투표", path: "/staking" },
        { label: "의제 투표", path: "/governance/" },
      ],
    },
    { label: "Drops", disabled: true, path: "/drops" },
    { label: "대시보드", path: "/dashboard" },
  ];

  const overEvent = (e) => {
    e.preventDefault();
    setMenu(true);
  };
  const outEvent = (e) => {
    e.preventDefault();
    setMenu(false);
  };

  const [subMenuMap] = category
    .filter((item) => item.hasOwnProperty("subMenu"))
    .map((v) => v.subMenu);

  const subMenu = subMenuMap.map((v) => (
    <SubLi className="sub">{v.label}</SubLi>
  ));

  const categoryMap = category.map((v, index) => {
    return (
      <NavLi key={index} onMouseOver={overEvent} onMouseOut={outEvent}>
        {v.label}
        {isOpen ? <div className="subBox">{v.subMenu && subMenu}</div> : null}
      </NavLi>
    );
  });

  return (
    <NavWrap>
      <NavUl>{categoryMap}</NavUl>
    </NavWrap>
  );
};
