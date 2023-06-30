import { NavWrap, NavLi, NavUl, SubLi } from "./styled";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(true);
  };

  const outEvent = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const categoryMap = category.map((item, index) => {
    const subMenu = item.subMenu?.map((subItem, subIndex) => (
      <SubLi key={`${item.label}-${subIndex}`} className="sub">
        {subItem.label}
      </SubLi>
    ));

    return (
      <NavLi key={item.label} onMouseOver={overEvent} onMouseOut={outEvent}>
        {item.label}
        {isOpen ? <div className="subBox">{item.subMenu && <ul>{subMenu}</ul>}</div> : null}
      </NavLi>
    );
  });

  return (
    <NavWrap>
      <NavUl>{categoryMap}</NavUl>
    </NavWrap>
  );
};
